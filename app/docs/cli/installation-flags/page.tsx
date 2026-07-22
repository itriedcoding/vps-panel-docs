'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function InstallationFlagsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Installation Flags</h1>
        <p className="text-lg text-dark-300">
          Complete reference for all installation script flags and options.
        </p>
      </div>

      <h2>Basic Usage</h2>
      <p>
        The VPS Panel installation script supports both interactive mode (with menu) and CLI flags:
      </p>

      <CodeBlock
        code={`# Interactive mode (recommended)
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash

# CLI mode with flags
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- [OPTIONS]`}
        language="bash"
        filename="Terminal"
      />

      <h2>Available Flags</h2>

      <h3>Mode Selection</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--install</code></td>
            <td>Run installation without the interactive menu</td>
          </tr>
          <tr>
            <td><code>--update</code></td>
            <td>Update an existing installation</td>
          </tr>
          <tr>
            <td><code>--uninstall</code></td>
            <td>Remove VPS Panel completely</td>
          </tr>
          <tr>
            <td><code>--help</code></td>
            <td>Show all available options</td>
          </tr>
        </tbody>
      </table>

      <h3>Configuration</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
            <th>Default</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--domain</code></td>
            <td>Set the domain for the panel</td>
            <td>Server IP</td>
            <td><code>--domain vps.example.com</code></td>
          </tr>
          <tr>
            <td><code>--port</code></td>
            <td>Set the panel API port</td>
            <td>8080</td>
            <td><code>--port 3000</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Usage Examples</h2>

      <h3>Interactive Install (Recommended)</h3>
      <CodeBlock
        code={`# Launch interactive menu
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash

# The menu will guide you through:
# 1. System detection
# 2. Configuration (port, domain)
# 3. Installation with progress
# 4. Credentials display`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Direct Install with Flags</h3>
      <CodeBlock
        code={`# Install with custom domain
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --domain vps.example.com

# Install with custom port
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --port 3000

# Install with both
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --domain vps.example.com --port 3000`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Update Installation</h3>
      <CodeBlock
        code={`# Update to latest version
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --update`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Uninstall</h3>
      <CodeBlock
        code={`# Remove VPS Panel (with confirmation prompt)
curl -sL https://raw.githubusercontent.com/itriedcoding/vps-panel/main/install.sh | bash -s -- --uninstall`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Post-Installation</h2>
      <p>
        After installation, verify everything is working:
      </p>

      <CodeBlock
        code={`# Check service status
systemctl status vspanel
systemctl status vspanel-web
systemctl status vspanel-monitor

# View logs
journalctl -u vspanel -f

# Test web access
curl -I http://localhost:8080`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Run the installation script with <code>--help</code> to see
          all available options: <code>bash install.sh --help</code>
        </p>
      </div>
    </div>
  )
}
