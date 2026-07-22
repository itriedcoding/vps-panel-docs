'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function SSLCertificatesPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">SSL Certificates</h1>
        <p className="text-lg text-dark-300">
          Secure your domains with SSL/TLS certificates using Let's Encrypt, self-signed certificates, or custom certificates.
        </p>
      </div>

      <h2>Let's Encrypt Setup</h2>
      <p>
        Let's Encrypt provides free SSL certificates and is the recommended option for production use.
        VPS Panel automates the entire process.
      </p>

      <h3>Prerequisites</h3>
      <ul>
        <li>Domain must be pointing to your server's IP address</li>
        <li>Port 80 must be accessible from the internet</li>
        <li>Nginx must be installed and configured</li>
      </ul>

      <h3>Issuing a Certificate</h3>
      <p>Using the web interface:</p>
      <ol>
        <li>Navigate to "Domains" → Select your domain</li>
        <li>Click "SSL Certificate"</li>
        <li>Select "Let's Encrypt"</li>
        <li>Enter your email address (for renewal notifications)</li>
        <li>Click "Issue Certificate"</li>
      </ol>

      <p>Using the CLI:</p>
      <CodeBlock
        code={`# Issue a certificate for a domain
vps-panel ssl issue example.com --email admin@example.com

# Issue with wildcard support
vps-panel ssl issue example.com --wildcard

# Check certificate status
vps-panel ssl status example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Automatic Renewal</h3>
      <p>
        VPS Panel automatically renews certificates before they expire. The renewal process runs
        daily via a cron job:
      </p>

      <CodeBlock
        code={`# Check the renewal cron job
crontab -l | grep vps-panel

# Manual renewal
vps-panel ssl renew

# Test renewal process
vps-panel ssl renew --dry-run`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Self-Signed Certificates</h2>
      <p>
        Self-signed certificates are useful for development and testing environments where
        you don't need public trust validation.
      </p>

      <CodeBlock
        code={`# Generate a self-signed certificate
vps-panel ssl self-signed example.com

# With custom expiration (in days)
vps-panel ssl self-signed example.com --days 365

# Generate with custom organization
vps-panel ssl self-signed example.com --org "My Company" --country US`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
        <p className="text-yellow-200">
          ⚠️ <strong>Warning:</strong> Self-signed certificates will show browser warnings.
          Never use self-signed certificates in production environments.
        </p>
      </div>

      <h2>Custom Certificates</h2>
      <p>
        If you have purchased SSL certificates from a Certificate Authority, you can upload
        them to VPS Panel.
      </p>

      <h3>Required Files</h3>
      <ul>
        <li><strong>Certificate file</strong> (.crt or .pem)</li>
        <li><strong>Private key</strong> (.key)</li>
        <li><strong>CA bundle</strong> (optional, for intermediate certificates)</li>
      </ul>

      <h3>Uploading via Web Interface</h3>
      <ol>
        <li>Navigate to "Domains" → Select your domain</li>
        <li>Click "SSL Certificate"</li>
        <li>Select "Custom Certificate"</li>
        <li>Upload your certificate files</li>
        <li>Click "Install Certificate"</li>
      </ol>

      <h3>Uploading via CLI</h3>
      <CodeBlock
        code={`# Install a custom certificate
vps-panel ssl install example.com \\
  --cert /path/to/certificate.crt \\
  --key /path/to/private.key \\
  --ca /path/to/ca-bundle.crt

# Verify the installation
vps-panel ssl status example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Certificate Management</h2>

      <h3>Viewing Certificates</h3>
      <CodeBlock
        code={`# List all certificates
vps-panel ssl list

# View certificate details
vps-panel ssl info example.com

# Check expiration dates
vps-panel ssl expiry`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Revoking Certificates</h3>
      <CodeBlock
        code={`# Revoke a Let's Encrypt certificate
vps-panel ssl revoke example.com

# Remove a self-signed or custom certificate
vps-panel ssl remove example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>SSL Configuration Options</h2>

      <CodeBlock
        code={`{
  "ssl": {
    "provider": "letsencrypt",
    "email": "admin@example.com",
    "auto_renew": true,
    "renewal_days": 30,
    "protocols": ["TLSv1.2", "TLSv1.3"],
    "ciphers": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256",
    "hsts": true,
    "hsts_max_age": 31536000,
    "ocsp_stapling": true
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h2>Troubleshooting SSL</h2>

      <h3>Certificate Not Issuing</h3>
      <ul>
        <li>Verify DNS is pointing to your server</li>
        <li>Check port 80 is accessible from the internet</li>
        <li>Ensure Nginx is running: <code>systemctl status nginx</code></li>
        <li>Check Let's Encrypt rate limits</li>
      </ul>

      <h3>Certificate Expired</h3>
      <CodeBlock
        code={`# Force renewal
vps-panel ssl renew --force

# Check certificate expiry
openssl x509 -in /etc/letsencrypt/live/example.com/fullchain.pem -noout -dates`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Browser Shows Not Secure</h3>
      <ul>
        <li>Check if the certificate matches the domain</li>
        <li>Verify the CA bundle is complete</li>
        <li>Check for mixed content warnings</li>
        <li>Clear browser cache and SSL state</li>
      </ul>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Use <a href="https://www.ssllabs.com/ssltest/" target="_blank" className="underline">SSL Labs</a> to
          test your SSL configuration and get a security grade.
        </p>
      </div>
    </div>
  )
}
