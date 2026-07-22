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
        The VPS Panel installation script supports various flags to customize the installation:
      </p>

      <CodeBlock
        code={`bash <(curl -s https://your-domain.com/install.sh) [OPTIONS]`}
        language="bash"
        filename="Terminal"
      />

      <h2>Available Flags</h2>

      <h3>Domain Configuration</h3>
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
            <td>None (IP only)</td>
            <td><code>--domain panel.example.com</code></td>
          </tr>
          <tr>
            <td><code>--email</code></td>
            <td>Email for SSL certificate</td>
            <td>None</td>
            <td><code>--email admin@example.com</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Port Configuration</h3>
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
            <td><code>--port</code></td>
            <td>Set the panel port</td>
            <td>8080</td>
            <td><code>--port 3000</code></td>
          </tr>
          <tr>
            <td><code>--http-port</code></td>
            <td>Set HTTP port for redirect</td>
            <td>80</td>
            <td><code>--http-port 8080</code></td>
          </tr>
          <tr>
            <td><code>--https-port</code></td>
            <td>Set HTTPS port</td>
            <td>443</td>
            <td><code>--https-port 8443</code></td>
          </tr>
        </tbody>
      </table>

      <h3>SSL Configuration</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--skip-ssl</code></td>
            <td>Skip SSL certificate setup</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--self-signed</code></td>
            <td>Use self-signed certificate</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--letsencrypt</code></td>
            <td>Use Let's Encrypt</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>

      <h3>Component Selection</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--skip-nginx</code></td>
            <td>Skip Nginx installation</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--skip-mysql</code></td>
            <td>Skip MySQL installation</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--skip-postgresql</code></td>
            <td>Skip PostgreSQL installation</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--skip-firewall</code></td>
            <td>Skip firewall configuration</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code>--skip-fail2ban</code></td>
            <td>Skip Fail2Ban installation</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h3>Management Options</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--update</code></td>
            <td>Update existing installation</td>
          </tr>
          <tr>
            <td><code>--uninstall</code></td>
            <td>Remove VPS Panel completely</td>
          </tr>
          <tr>
            <td><code>--repair</code></td>
            <td>Repair installation issues</td>
          </tr>
          <tr>
            <td><code>--force</code></td>
            <td>Force installation (skip checks)</td>
          </tr>
        </tbody>
      </table>

      <h3>Advanced Options</h3>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--install-path</code></td>
            <td>Custom installation directory</td>
            <td>/opt/vps-panel</td>
          </tr>
          <tr>
            <td><code>--data-path</code></td>
            <td>Custom data directory</td>
            <td>/var/lib/vps-panel</td>
          </tr>
          <tr>
            <td><code>--log-path</code></td>
            <td>Custom log directory</td>
            <td>/var/log/vps-panel</td>
          </tr>
          <tr>
            <td><code>--node-version</code></td>
            <td>Specific Node.js version</td>
            <td>20 LTS</td>
          </tr>
          <tr>
            <td><code>--debug</code></td>
            <td>Enable debug output</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h2>Usage Examples</h2>

      <h3>Basic Installation</h3>
      <CodeBlock
        code={`# Simple installation with defaults
bash <(curl -s https://your-domain.com/install.sh)

# With domain
bash <(curl -s https://your-domain.com/install.sh) --domain panel.example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Custom Port</h3>
      <CodeBlock
        code={`# Install on custom port
bash <(curl -s https://your-domain.com/install.sh) --port 3000

# With domain and custom port
bash <(curl -s https://your-domain.com/install.sh) --domain panel.example.com --port 3000`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Skip Components</h3>
      <CodeBlock
        code={`# Skip Nginx (use built-in server)
bash <(curl -s https://your-domain.com/install.sh) --skip-nginx

# Skip database (use external)
bash <(curl -s https://your-domain.com/install.sh) --skip-mysql --skip-postgresql

# Skip all optional components
bash <(curl -s https://your-domain.com/install.sh) --skip-nginx --skip-mysql --skip-postgresql --skip-firewall --skip-fail2ban`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Update Installation</h3>
      <CodeBlock
        code={`# Update to latest version
bash <(curl -s https://your-domain.com/install.sh) --update

# Update with backup
bash <(curl -s https://your-domain.com/install.sh) --update --backup`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Uninstall</h3>
      <CodeBlock
        code={`# Uninstall (with confirmation)
bash <(curl -s https://your-domain.com/install.sh) --uninstall

# Force uninstall (no confirmation)
bash <(curl -s https://your-domain.com/install.sh) --uninstall --force`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Custom Installation Paths</h3>
      <CodeBlock
        code={`# Custom installation path
bash <(curl -s https://your-domain.com/install.sh) --install-path /usr/local/vps-panel

# Custom data path
bash <(curl -s https://your-domain.com/install.sh) --data-path /data/vps-panel

# Full custom paths
bash <(curl -s https://your-domain.com/install.sh) \\
  --install-path /usr/local/vps-panel \\
  --data-path /data/vps-panel \\
  --log-path /var/log/vps-panel`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Environment Variables</h2>
      <p>
        You can also configure installation using environment variables:
      </p>

      <CodeBlock
        code={`# Set environment variables
export VPS_PANEL_DOMAIN="panel.example.com"
export VPS_PANEL_PORT="8080"
export VPS_PANEL_EMAIL="admin@example.com"

# Run installation
bash <(curl -s https://your-domain.com/install.sh)`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>VPS_PANEL_DOMAIN</code></td>
            <td>Panel domain name</td>
          </tr>
          <tr>
            <td><code>VPS_PANEL_PORT</code></td>
            <td>Panel port number</td>
          </tr>
          <tr>
            <td><code>VPS_PANEL_EMAIL</code></td>
            <td>Email for SSL certificate</td>
          </tr>
          <tr>
            <td><code>VPS_PANEL_INSTALL_PATH</code></td>
            <td>Installation directory</td>
          </tr>
          <tr>
            <td><code>VPS_PANEL_DATA_PATH</code></td>
            <td>Data directory</td>
          </tr>
        </tbody>
      </table>

      <h2>Post-Installation</h2>
      <p>
        After installation, verify everything is working:
      </p>

      <CodeBlock
        code={`# Check installation status
vps-panel status

# Verify configuration
vps-panel config --validate

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
