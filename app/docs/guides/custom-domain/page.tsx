'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function CustomDomainPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Custom Domain Setup</h1>
        <p className="text-lg text-dark-300">
          Step-by-step guide to setting up a custom domain for your VPS Panel.
        </p>
      </div>

      <h2>Overview</h2>
      <p>
        This guide walks you through setting up a custom domain for your VPS Panel installation.
        Using a custom domain provides a professional URL and enables SSL certificate provisioning.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>VPS Panel installed and running</li>
        <li>A registered domain name</li>
        <li>Access to your domain's DNS settings</li>
        <li>Root or sudo access on your server</li>
      </ul>

      <h2>Step 1: Point Domain to Server</h2>
      <p>
        Configure your domain's DNS records to point to your VPS IP address.
      </p>

      <h3>DNS Records Required</h3>
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
            <td><code>panel</code></td>
            <td>Your server IP</td>
            <td>3600</td>
          </tr>
          <tr>
            <td><code>CNAME</code></td>
            <td><code>www</code></td>
            <td><code>@</code> or domain.com</td>
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
        <li>Click "Add record"</li>
        <li>Create Type A, Name: panel, Content: your-server-ip</li>
        <li>Disable proxy (grey cloud) initially</li>
      </ol>

      <h4>Namecheap</h4>
      <ol>
        <li>Log in to Namecheap dashboard</li>
        <li>Go to Domain List → Manage</li>
        <li>Click "Advanced DNS"</li>
        <li>Add A record for panel subdomain</li>
      </ol>

      <h4>Google Domains</h4>
      <ol>
        <li>Log in to Google Domains</li>
        <li>Select your domain</li>
        <li>Go to DNS → Custom records</li>
        <li>Add A record for panel subdomain</li>
      </ol>

      <h2>Step 2: Update Panel Configuration</h2>
      <p>
        Configure VPS Panel to use your custom domain:
      </p>

      <CodeBlock
        code={`# Edit the panel configuration
sudo nano /etc/vps-panel/config.json

# Update the domain setting
{
  "panel": {
    "domain": "panel.example.com",
    "ssl": true,
    "ssl_provider": "letsencrypt"
  }
}`}
        language="bash"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h2>Step 3: Configure Nginx</h2>
      <p>
        Update the Nginx configuration for your domain:
      </p>

      <CodeBlock
        code={`# Create or update Nginx config
sudo nano /etc/nginx/sites-available/vps-panel

server {
    listen 80;
    server_name panel.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name panel.example.com;

    # SSL will be configured by Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/panel.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/panel.example.com/privkey.pem;

    # Proxy to VPS Panel
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket support
    location /ws {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400;
    }
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel"
        showLineNumbers
      />

      <h2>Step 4: Obtain SSL Certificate</h2>
      <p>
        Use Let's Encrypt to obtain a free SSL certificate:
      </p>

      <CodeBlock
        code={`# Install Certbot (if not installed)
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot certonly --nginx -d panel.example.com

# Or use VPS Panel's built-in command
vps-panel ssl issue panel.example.com --email admin@example.com

# Test auto-renewal
sudo certbot renew --dry-run`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Step 5: Restart Services</h2>
      <CodeBlock
        code={`# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Restart VPS Panel
sudo systemctl restart vps-panel

# Verify SSL is working
curl -I https://panel.example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Step 6: Verify Setup</h2>
      <p>
        Verify everything is working correctly:
      </p>

      <h3>Check DNS Propagation</h3>
      <CodeBlock
        code={`# Check DNS resolution
dig panel.example.com +short
nslookup panel.example.com

# Test from external source
curl -I http://panel.example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Check SSL Certificate</h3>
      <CodeBlock
        code={`# Verify SSL certificate
openssl s_client -connect panel.example.com:443 -servername panel.example.com

# Check certificate details
vps-panel ssl info panel.example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Test Web Interface</h3>
      <ol>
        <li>Open https://panel.example.com in your browser</li>
        <li>Verify the SSL padlock icon appears</li>
        <li>Log in with your credentials</li>
        <li>Check all features are working</li>
      </ol>

      <h2>Troubleshooting</h2>

      <h3>DNS Not Propagating</h3>
      <ul>
        <li>DNS propagation can take up to 48 hours</li>
        <li>Check with online tools: dnschecker.org</li>
        <li>Verify DNS records are correct</li>
        <li>Try flushing local DNS cache</li>
      </ul>

      <h3>SSL Certificate Issues</h3>
      <ul>
        <li>Ensure port 80 is accessible from the internet</li>
        <li>Verify DNS is pointing to your server</li>
        <li>Check Let's Encrypt rate limits</li>
        <li>Review Nginx error logs</li>
      </ul>

      <h3>502 Bad Gateway</h3>
      <ul>
        <li>Verify VPS Panel service is running</li>
        <li>Check Nginx proxy configuration</li>
        <li>Review Nginx error logs</li>
        <li>Verify firewall allows traffic</li>
      </ul>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> After DNS changes, you may need to wait for propagation
          and clear your browser cache before seeing the changes.
        </p>
      </div>
    </div>
  )
}
