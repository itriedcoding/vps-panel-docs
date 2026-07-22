'use client'

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
        The easiest way to install VPS Panel is using our interactive installation script. 
        Simply run this command as root on your server:
      </p>
      <CodeBlock
        code="curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash"
        language="bash"
        filename="Terminal"
        showLineNumbers={false}
      />

      <h2>Interactive Menu</h2>
      <p>
        The installer features a beautiful interactive menu that guides you through the setup process:
      </p>

      <div className="bg-dark-800/50 border border-dark-600 rounded-lg p-4 my-4 font-mono text-sm">
        <pre className="text-green-400">{`
  ██╗   ██╗██████╗ ███████╗    ███████╗██╗   ██╗███████╗███╗   ██╗████████╗
  ██║   ██║██╔══██╗██╔════╝    ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝
  ██║   ██║██████╔╝█████╗      ███████╗██║   ██║█████╗  ██╔██╗ ██║   ██║
  ╚██████╔╝██║     ███████╗    ███████║╚██████╔╝███████╗██║ ╚████║   ██║
   ╚═════╝ ╚═╝     ╚══════╝    ╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝

  Modern VPS Control Panel • v1.0.0
  Ubuntu • Debian • Arch Linux

─────────────────────────────────────────────────────────────────
  System:        Ubuntu 24.04
  Architecture:  x86_64
  Status:        Not Installed

  Select an option:

    1  │  Install Panel       Full installation
    2  │  Configure Domain    Set custom domain before install
    3  │  View Help           Show installation options
    4  │  Exit

  Enter choice [1-5]: _`}</pre>
      </div>

      <h2>Installation Configuration</h2>
      <p>
        When you select Install, the wizard will prompt you for configuration:
      </p>

      <div className="bg-dark-800/50 border border-dark-600 rounded-lg p-4 my-4 font-mono text-sm">
        <pre className="text-green-400">{`
  Installation Configuration

  Panel Port: (press Enter for default: 8080)
  → 8080
  ✓ Panel port: 8080

  Custom Domain: (press Enter to skip, use server IP)
  → vps.example.com
  ✓ Domain: vps.example.com

─────────────────────────────────────────────────────────────────
  Ready to install:
    • Panel Port:  8080
    • Domain:      vps.example.com
    • Install Dir: /opt/vspanel
    • OS:          Ubuntu 24.04
─────────────────────────────────────────────────────────────────

  Proceed with installation? (y/N): _`}</pre>
      </div>

      <h2>CLI Flags</h2>
      <p>
        For automated installs (without the menu), use CLI flags:
      </p>

      <CodeBlock
        code="# Interactive mode (recommended)
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash

# Direct install with flags
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --domain vps.example.com

# Update existing installation
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --update

# Uninstall
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --uninstall"
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
            <td><code>--install</code></td>
            <td>Run installation without the interactive menu</td>
            <td><code>--install</code></td>
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
        </tbody>
      </table>

      <h2>What Gets Installed</h2>
      <p>The installation script will set up the following components:</p>
      <ul>
        <li><strong>Go API Server</strong> - High-performance backend for system operations (port 8080)</li>
        <li><strong>Web Dashboard</strong> - PHP-based control panel with dark theme UI</li>
        <li><strong>WebSocket Server</strong> - Node.js server for real-time terminal (port 8081)</li>
        <li><strong>Python Monitor</strong> - System metrics collector (CPU, RAM, disk, network)</li>
        <li><strong>Nginx</strong> - Reverse proxy for SSL termination and static files</li>
        <li><strong>SQLite</strong> - Lightweight database for sessions and configuration</li>
        <li><strong>Systemd Services</strong> - Auto-start on boot and process management</li>
      </ul>

      <h2>Post-Installation Verification</h2>
      <p>After installation completes, verify everything is working:</p>
      
      <h3>1. Check Service Status</h3>
      <CodeBlock
        code="systemctl status vspanel
systemctl status vspanel-web
systemctl status vspanel-monitor"
        language="bash"
        filename="Terminal"
      />

      <h3>2. Access the Web Interface</h3>
      <p>
        Open your browser and navigate to your panel URL. If you set up a domain, use:
      </p>
      <CodeBlock
        code="https://vps.example.com"
        language="text"
      />

      <p>If you didn't configure a domain, use your server IP:</p>
      <CodeBlock
        code="http://your-server-ip"
        language="text"
      />

      <h3>3. Login with Credentials</h3>
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
        <p className="text-yellow-200 font-medium">
          ⚠️ Your password is displayed after installation. Save it - it won't be shown again!
          Change the default password after first login.
        </p>
      </div>

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
