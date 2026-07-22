import { CodeBlock } from '@/components/CodeBlock'
import Link from 'next/link'

export default function InstallationPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Installation</h1>
        <p className="text-lg text-dark-300">
          Get VPS Panel running on your server in minutes with our simple installation process.
        </p>
      </div>

      <h2>Prerequisites</h2>
      <p>Before installing VPS Panel, ensure your server meets the following requirements:</p>
      <ul>
        <li>A Linux VPS with root or sudo access</li>
        <li>Minimum 1 GB RAM (2 GB recommended)</li>
        <li>10 GB free disk space</li>
        <li>A valid domain name pointing to your server (optional but recommended)</li>
        <li>Ports 80, 443, and 8080 available</li>
      </ul>

      <h2>One-Liner Install</h2>
      <p>
        The easiest way to install VPS Panel is using our installation script. Simply run this command
        as root on your server:
      </p>
      <CodeBlock
        code="bash <(curl -s https://your-domain.com/install.sh)"
        language="bash"
        filename="Terminal"
        showLineNumbers={false}
      />

      <p>
        If you want to specify a custom domain during installation, use the <code>--domain</code> flag:
      </p>
      <CodeBlock
        code="bash <(curl -s https://your-domain.com/install.sh) --domain panel.example.com"
        language="bash"
        filename="Terminal"
      />

      <h2>Installation Flags</h2>
      <p>The installation script supports the following flags:</p>
      
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--domain</code></td>
            <td>Set the domain for the panel</td>
            <td><code>--domain panel.example.com</code></td>
          </tr>
          <tr>
            <td><code>--port</code></td>
            <td>Custom port for the panel (default: 8080)</td>
            <td><code>--port 3000</code></td>
          </tr>
          <tr>
            <td><code>--update</code></td>
            <td>Update an existing installation</td>
            <td><code>--update</code></td>
          </tr>
          <tr>
            <td><code>--uninstall</code></td>
            <td>Remove VPS Panel completely</td>
            <td><code>--uninstall</code></td>
          </tr>
          <tr>
            <td><code>--skip-nginx</code></td>
            <td>Skip Nginx installation</td>
            <td><code>--skip-nginx</code></td>
          </tr>
          <tr>
            <td><code>--skip-ssl</code></td>
            <td>Skip SSL certificate setup</td>
            <td><code>--skip-ssl</code></td>
          </tr>
        </tbody>
      </table>

      <h2>What Gets Installed</h2>
      <p>The installation script will set up the following components:</p>
      <ul>
        <li><strong>VPS Panel Backend</strong> - Node.js API server and WebSocket handlers</li>
        <li><strong>VPS Panel Frontend</strong> - React-based dashboard interface</li>
        <li><strong>Nginx</strong> - Reverse proxy for SSL termination and static files</li>
        <li><strong>SQLite</strong> - Lightweight database for configuration</li>
        <li><strong>Systemd Service</strong> - Auto-start on boot and process management</li>
      </ul>

      <h2>Post-Installation Verification</h2>
      <p>After installation completes, verify everything is working:</p>
      
      <h3>1. Check Service Status</h3>
      <CodeBlock
        code="systemctl status vps-panel"
        language="bash"
        filename="Terminal"
      />

      <h3>2. Access the Web Interface</h3>
      <p>
        Open your browser and navigate to your panel URL. If you set up a domain, use:
      </p>
      <CodeBlock
        code="https://panel.example.com"
        language="text"
      />

      <p>If you didn't configure a domain, use:</p>
      <CodeBlock
        code="http://your-server-ip:8080"
        language="text"
      />

      <h3>3. Login with Default Credentials</h3>
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
        <p className="text-yellow-200 font-medium">⚠️ Important: Change these credentials immediately!</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td><code>admin</code></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><code>admin</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Troubleshooting</h2>

      <h3>Port Already in Use</h3>
      <p>If port 8080 is already in use, stop the conflicting service or use a different port:</p>
      <CodeBlock
        code="bash <(curl -s https://your-domain.com/install.sh) --port 3000"
        language="bash"
        filename="Terminal"
      />

      <h3>Installation Fails</h3>
      <p>If the installation fails, check the logs:</p>
      <CodeBlock
        code="journalctl -u vps-panel -n 100"
        language="bash"
        filename="Terminal"
      />

      <h3>Can't Access the Panel</h3>
      <p>If you can't access the panel after installation:</p>
      <ol>
        <li>Check if the service is running: <code>systemctl status vps-panel</code></li>
        <li>Verify firewall allows the port: <code>ufw status</code></li>
        <li>Check Nginx configuration: <code>nginx -t</code></li>
        <li>Review Nginx error logs: <code>tail -f /var/log/nginx/error.log</code></li>
      </ol>

      <div className="mt-8">
        <Link
          href="/docs/getting-started/quick-start"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Continue to Quick Start →
        </Link>
      </div>
    </div>
  )
}
