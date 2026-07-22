import { CodeBlock } from '@/components/CodeBlock'
import Link from 'next/link'

export default function QuickStartPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Quick Start</h1>
        <p className="text-lg text-dark-300">
          Get up and running with VPS Panel in just a few minutes.
        </p>
      </div>

      <h2>Step 1: First Login</h2>
      <p>
        After installation, open your browser and navigate to your panel URL. You'll be greeted
        with the login screen.
      </p>
      
      <ol>
        <li>Enter the default credentials (admin/admin)</li>
        <li>You'll be prompted to change the password immediately</li>
        <li>Choose a strong password and save it securely</li>
      </ol>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Use a password manager to store your credentials securely.
        </p>
      </div>

      <h2>Step 2: Dashboard Overview</h2>
      <p>
        Once logged in, you'll see the main dashboard with an overview of your server:
      </p>
      <ul>
        <li><strong>System Overview</strong> - Server uptime, hostname, and OS info</li>
        <li><strong>CPU Usage</strong> - Real-time CPU utilization chart</li>
        <li><strong>Memory Usage</strong> - RAM and swap usage statistics</li>
        <li><strong>Disk Usage</strong> - Storage utilization by partition</li>
        <li><strong>Network Traffic</strong> - Incoming and outgoing bandwidth</li>
        <li><strong>Running Services</strong> - Status of system services</li>
      </ul>

      <h2>Step 3: Changing Admin Password</h2>
      <p>For security, change your admin password immediately:</p>
      <ol>
        <li>Click on your username in the top-right corner</li>
        <li>Select "Profile" from the dropdown menu</li>
        <li>Click "Change Password"</li>
        <li>Enter your current password and the new password</li>
        <li>Click "Save Changes"</li>
      </ol>

      <h2>Step 4: Adding Your First Domain</h2>
      <p>
        To host websites, you need to add a domain. Here's how:
      </p>
      
      <h3>4.1 Add Domain in Panel</h3>
      <ol>
        <li>Navigate to "Domains" in the sidebar</li>
        <li>Click "Add Domain"</li>
        <li>Enter your domain name (e.g., example.com)</li>
        <li>Select the document root directory</li>
        <li>Click "Create"</li>
      </ol>

      <h3>4.2 Configure DNS</h3>
      <p>
        Add an A record pointing to your server's IP address:
      </p>
      <CodeBlock
        code={`Type: A
Name: @ (or your subdomain)
Value: YOUR_SERVER_IP
TTL: 3600`}
        language="text"
        filename="DNS Configuration"
      />

      <h3>4.3 SSL Certificate</h3>
      <p>
        Enable SSL for your domain with Let's Encrypt:
      </p>
      <ol>
        <li>Go to your domain settings</li>
        <li>Click "SSL Certificate"</li>
        <li>Select "Let's Encrypt"</li>
        <li>Click "Issue Certificate"</li>
      </ol>

      <h2>Step 5: Basic Configuration</h2>
      <p>Configure essential settings for your panel:</p>

      <h3>5.1 Server Settings</h3>
      <CodeBlock
        code={`# Edit the main configuration file
nano /etc/vps-panel/config.json

# Key settings to configure:
{
  "domain": "panel.example.com",
  "port": 8080,
  "ssl": true,
  "backup_enabled": true
}`}
        language="bash"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h3>5.2 Enable Firewall</h3>
      <p>
        Configure the firewall to secure your server:
      </p>
      <CodeBlock
        code={`# Enable firewall
ufw enable

# Allow SSH
ufw allow 22/tcp

# Allow HTTP/HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Allow panel port (if different from 80/443)
ufw allow 8080/tcp

# Check status
ufw status`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>5.3 Create a User Account</h3>
      <p>Create a non-admin user for regular access:</p>
      <ol>
        <li>Go to "Users" in the sidebar</li>
        <li>Click "Add User"</li>
        <li>Fill in username, email, and password</li>
        <li>Assign appropriate permissions</li>
        <li>Click "Create User"</li>
      </ol>

      <h2>Next Steps</h2>
      <p>
        Now that you have the basics set up, explore more advanced features:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Link
          href="/docs/configuration/initial-setup"
          className="glass-card p-4 hover:border-primary-500/50 transition-all"
        >
          <h3 className="text-white font-medium mb-1">Configuration Guide</h3>
          <p className="text-dark-400 text-sm">Advanced configuration options</p>
        </Link>
        <Link
          href="/docs/features/dashboard"
          className="glass-card p-4 hover:border-primary-500/50 transition-all"
        >
          <h3 className="text-white font-medium mb-1">Dashboard Features</h3>
          <p className="text-dark-400 text-sm">Explore all dashboard capabilities</p>
        </Link>
        <Link
          href="/docs/api/authentication"
          className="glass-card p-4 hover:border-primary-500/50 transition-all"
        >
          <h3 className="text-white font-medium mb-1">API Documentation</h3>
          <p className="text-dark-400 text-sm">Integrate with the REST API</p>
        </Link>
        <Link
          href="/docs/guides/security"
          className="glass-card p-4 hover:border-primary-500/50 transition-all"
        >
          <h3 className="text-white font-medium mb-1">Security Hardening</h3>
          <p className="text-dark-400 text-sm">Secure your server</p>
        </Link>
      </div>
    </div>
  )
}
