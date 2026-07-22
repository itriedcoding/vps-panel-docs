'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function DomainSetupPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Domain Configuration</h1>
        <p className="text-lg text-dark-300">
          Set up custom domains and configure virtual hosts for your hosted websites.
        </p>
      </div>

      <h2>Adding Custom Domains</h2>
      <p>
        VPS Panel makes it easy to add and manage domains. You can add multiple domains and
        subdomains to your server.
      </p>

      <h3>Method 1: Using the Web Interface</h3>
      <ol>
        <li>Navigate to "Domains" in the sidebar</li>
        <li>Click "Add Domain"</li>
        <li>Enter the domain name (e.g., example.com)</li>
        <li>Select the document root directory</li>
        <li>Choose whether to enable SSL</li>
        <li>Click "Create"</li>
      </ol>

      <h3>Method 2: Using the CLI</h3>
      <CodeBlock
        code={`# Add a domain
vps-panel domain add example.com --root /var/www/example.com

# Add with SSL
vps-panel domain add example.com --root /var/www/example.com --ssl

# List all domains
vps-panel domain list

# Remove a domain
vps-panel domain remove example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>DNS Configuration Guide</h2>
      <p>
        Before adding a domain to VPS Panel, you need to configure your DNS records to point
        to your server.
      </p>

      <h3>Required DNS Records</h3>
      <table>
        <thead>
          <tr>
            <th>Record Type</th>
            <th>Name</th>
            <th>Value</th>
            <th>TTL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>A</code></td>
            <td><code>@</code></td>
            <td>Your server IP</td>
            <td>3600</td>
          </tr>
          <tr>
            <td><code>A</code></td>
            <td><code>www</code></td>
            <td>Your server IP</td>
            <td>3600</td>
          </tr>
          <tr>
            <td><code>A</code></td>
            <td><code>panel</code></td>
            <td>Your server IP</td>
            <td>3600</td>
          </tr>
        </tbody>
      </table>

      <h3>DNS Provider Examples</h3>
      
      <h4>Cloudflare</h4>
      <ol>
        <li>Log in to Cloudflare dashboard</li>
        <li>Select your domain</li>
        <li>Go to DNS → Records</li>
        <li>Add the required A records</li>
        <li>Disable Cloudflare proxy (grey cloud) for initial setup</li>
      </ol>

      <h4>Namecheap</h4>
      <ol>
        <li>Log in to Namecheap dashboard</li>
        <li>Go to Domain List → Manage</li>
        <li>Advanced DNS → Add New Record</li>
        <li>Add A records with your server IP</li>
      </ol>

      <h4>DigitalOcean</h4>
      <ol>
        <li>Log in to DigitalOcean control panel</li>
        <li>Go to Networking → Domains</li>
        <li>Add your domain</li>
        <li>Create A records pointing to your droplet</li>
      </ol>

      <h2>Nginx Virtual Host Setup</h2>
      <p>
        VPS Panel automatically creates Nginx configuration files for each domain. Here's how
        the virtual host configuration works:
      </p>

      <CodeBlock
        code={`server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com www.example.com;

    root /var/www/example.com;
    index index.html index.htm index.php;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" always;

    # Logging
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # PHP Processing
    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Static Files Caching
    location ~* \\\\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Deny Access to Hidden Files
    location ~ /\\\\. {
        deny all;
    }
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/example.com.conf"
        showLineNumbers
      />

      <h2>Wildcard Domains</h2>
      <p>
        VPS Panel supports wildcard domains for catching all subdomains. This is useful for
        development environments or multi-tenant applications.
      </p>

      <h3>DNS Configuration for Wildcards</h3>
      <table>
        <thead>
          <tr>
            <th>Record Type</th>
            <th>Name</th>
            <th>Value</th>
            <th>TTL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>A</code></td>
            <td><code>*</code></td>
            <td>Your server IP</td>
            <td>3600</td>
          </tr>
        </tbody>
      </table>

      <h3>Panel Configuration</h3>
      <CodeBlock
        code={`# Enable wildcard domains in config
{
  "panel": {
    "wildcard_domains": true,
    "wildcard_pattern": "*.example.com"
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
      />

      <h2>Verifying Domain Setup</h2>
      <p>
        After configuring your domains, verify everything is working correctly:
      </p>

      <CodeBlock
        code={`# Check DNS resolution
dig example.com +short
nslookup example.com

# Test Nginx configuration
nginx -t

# Check SSL certificate
openssl s_client -connect example.com:443 -servername example.com

# Verify HTTP to HTTPS redirect
curl -I http://example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Common Issues</h2>
      
      <h3>DNS Not Propagating</h3>
      <p>DNS changes can take up to 48 hours to propagate. Use these tools to check:</p>
      <ul>
        <li><a href="https://dnschecker.org" target="_blank">DNSChecker.org</a></li>
        <li><a href="https://www.whatsmydns.net" target="_blank">WhatsMyDNS.net</a></li>
      </ul>

      <h3>502 Bad Gateway</h3>
      <p>This usually means the backend service isn't running. Check:</p>
      <CodeBlock
        code="systemctl status vps-panel"
        language="bash"
      />

      <h3>SSL Certificate Issues</h3>
      <p>If SSL isn't working:</p>
      <ul>
        <li>Verify DNS is pointing to your server</li>
        <li>Check port 80 is accessible from the internet</li>
        <li>Ensure Let's Encrypt isn't rate-limited</li>
        <li>Check Nginx error logs: <code>tail -f /var/log/nginx/error.log</code></li>
      </ul>
    </div>
  )
}
