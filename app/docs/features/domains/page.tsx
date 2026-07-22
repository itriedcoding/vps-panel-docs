'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function DomainsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Domain Management</h1>
        <p className="text-lg text-dark-300">
          Manage domains, virtual hosts, and DNS records from the web interface.
        </p>
      </div>

      <h2>Domain Management</h2>
      <p>
        VPS Panel makes it easy to add, configure, and manage multiple domains on your server.
      </p>

      <h3>Adding a Domain</h3>
      <ol>
        <li>Navigate to "Domains" in the sidebar</li>
        <li>Click "Add Domain"</li>
        <li>Enter the domain name</li>
        <li>Configure document root</li>
        <li>Set PHP version (if applicable)</li>
        <li>Enable/disable SSL</li>
        <li>Click "Create"</li>
      </ol>

      <h3>Domain Options</h3>
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Document Root</strong></td>
            <td>Directory where website files are stored</td>
            <td>/var/www/domain.com</td>
          </tr>
          <tr>
            <td><strong>PHP Version</strong></td>
            <td>PHP version for this domain</td>
            <td>8.2</td>
          </tr>
          <tr>
            <td><strong>SSL</strong></td>
            <td>Enable HTTPS</td>
            <td>Enabled</td>
          </tr>
          <tr>
            <td><strong>WWW Redirect</strong></td>
            <td>Redirect www to non-www (or vice versa)</td>
            <td>None</td>
          </tr>
          <tr>
            <td><strong>Auto Index</strong></td>
            <td>Show directory listing</td>
            <td>Disabled</td>
          </tr>
        </tbody>
      </table>

      <h2>Virtual Hosts</h2>
      <p>
        Nginx virtual host configurations are automatically managed by VPS Panel.
      </p>

      <h3>Virtual Host Structure</h3>
      <CodeBlock
        code={`# HTTP to HTTPS redirect
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server block
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;

    root /var/www/example.com;
    index index.html index.php;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Logging
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # PHP processing
    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # Static files
    location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/example.com.conf"
        showLineNumbers
      />

      <h3>Custom Nginx Configuration</h3>
      <p>
        Add custom Nginx directives for specific domains:
      </p>
      <ol>
        <li>Select the domain from the list</li>
        <li>Click "Nginx Settings"</li>
        <li>Add custom configuration in the editor</li>
        <li>Test configuration</li>
        <li>Apply changes</li>
      </ol>

      <h2>DNS Records</h2>
      <p>
        Manage DNS records directly from VPS Panel (if using the built-in DNS server).
      </p>

      <h3>Supported Record Types</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>A</code></td>
            <td>Maps domain to IPv4 address</td>
            <td>example.com → 192.168.1.1</td>
          </tr>
          <tr>
            <td><code>AAAA</code></td>
            <td>Maps domain to IPv6 address</td>
            <td>example.com → 2001:db8::1</td>
          </tr>
          <tr>
            <td><code>CNAME</code></td>
            <td>Alias to another domain</td>
            <td>www → example.com</td>
          </tr>
          <tr>
            <td><code>MX</code></td>
            <td>Mail server record</td>
            <td>mail.example.com</td>
          </tr>
          <tr>
            <td><code>TXT</code></td>
            <td>Text information</td>
            <td>SPF, DKIM records</td>
          </tr>
          <tr>
            <td><code>NS</code></td>
            <td>Name server record</td>
            <td>ns1.example.com</td>
          </tr>
        </tbody>
      </table>

      <h3>Managing DNS Records</h3>
      <CodeBlock
        code={`# Add DNS record
vps-panel dns add example.com --type A --value 192.168.1.1

# Add CNAME record
vps-panel dns add www.example.com --type CNAME --value example.com

# List DNS records
vps-panel dns list example.com

# Remove DNS record
vps-panel dns remove example.com --type A --value 192.168.1.1`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>SSL Management</h2>
      <p>
        Manage SSL certificates for your domains:
      </p>

      <h3>SSL Options</h3>
      <ul>
        <li><strong>Let's Encrypt</strong> - Free automatic certificates</li>
        <li><strong>Self-Signed</strong> - For development/testing</li>
        <li><strong>Custom</strong> - Upload your own certificates</li>
      </ul>

      <h3>SSL Commands</h3>
      <CodeBlock
        code={`# Issue Let's Encrypt certificate
vps-panel ssl issue example.com

# Check SSL status
vps-panel ssl status example.com

# Renew certificates
vps-panel ssl renew

# View certificate details
vps-panel ssl info example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Domain Aliases</h2>
      <p>
        Configure domain aliases to point multiple domains to the same content:
      </p>

      <ul>
        <li>Add alias domains in domain settings</li>
        <li>Configure redirects between domains</li>
        <li>Set up domain parking</li>
      </ul>

      <h2>Subdomain Management</h2>
      <p>
        Create and manage subdomains:
      </p>

      <ol>
        <li>Go to "Domains" → "Add Domain"</li>
        <li>Enter the full subdomain (e.g., app.example.com)</li>
        <li>Configure document root</li>
        <li>Set up SSL certificate</li>
        <li>Configure any custom settings</li>
      </ol>

      <h2>Domain Statistics</h2>
      <p>
        Monitor domain usage and performance:
      </p>

      <ul>
        <li><strong>Bandwidth Usage</strong> - Monthly data transfer</li>
        <li><strong>Disk Usage</strong> - Storage consumed</li>
        <li><strong>Visitor Statistics</strong> - Page views and unique visitors</li>
        <li><strong>Error Logs</strong> - 404, 500 errors</li>
        <li><strong>Access Logs</strong> - Detailed request logs</li>
      </ul>

      <h2>Bulk Operations</h2>
      <p>
        Perform actions on multiple domains at once:
      </p>

      <ul>
        <li>Bulk enable/disable SSL</li>
        <li>Bulk change PHP version</li>
        <li>Bulk update DNS records</li>
        <li>Bulk create backups</li>
        <li>Export/import domain configurations</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Domain Not Resolving</h3>
      <ul>
        <li>Verify DNS records are configured correctly</li>
        <li>Check DNS propagation status</li>
        <li>Ensure domain is pointed to correct IP</li>
        <li>Wait for DNS cache to expire</li>
      </ul>

      <h3>502 Bad Gateway</h3>
      <ul>
        <li>Check if backend service is running</li>
        <li>Verify Nginx configuration</li>
        <li>Check proxy settings</li>
        <li>Review error logs</li>
      </ul>
    </div>
  )
}
