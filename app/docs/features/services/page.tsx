'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function ServicesPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Service Management</h1>
        <p className="text-lg text-dark-300">
          View, start, stop, and restart system services from the web interface.
        </p>
      </div>

      <h2>Viewing Services</h2>
      <p>
        The Services page displays all system services managed by systemd, along with their
        current status and resource usage.
      </p>

      <h3>Service Status Indicators</h3>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Color</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Active (Running)</td>
            <td><span className="text-green-400">●</span> Green</td>
            <td>Service is running normally</td>
          </tr>
          <tr>
            <td>Inactive (Dead)</td>
            <td><span className="text-gray-400">●</span> Gray</td>
            <td>Service is stopped</td>
          </tr>
          <tr>
            <td>Failed</td>
            <td><span className="text-red-400">●</span> Red</td>
            <td>Service encountered an error</td>
          </tr>
          <tr>
            <td>Activating</td>
            <td><span className="text-yellow-400">●</span> Yellow</td>
            <td>Service is starting up</td>
          </tr>
        </tbody>
      </table>

      <h3>Service Information</h3>
      <p>For each service, you can view:</p>
      <ul>
        <li><strong>Name</strong> - Service identifier</li>
        <li><strong>Description</strong> - What the service does</li>
        <li><strong>Status</strong> - Current running state</li>
        <li><strong>Load</strong> - Memory and CPU usage</li>
        <li><strong>Uptime</strong> - How long the service has been running</li>
        <li><strong>PID</strong> - Process ID (when running)</li>
      </ul>

      <h2>Service Actions</h2>

      <h3>Available Operations</h3>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
            <th>When to Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Start</strong></td>
            <td>Start a stopped service</td>
            <td>Service is inactive but should be running</td>
          </tr>
          <tr>
            <td><strong>Stop</strong></td>
            <td>Stop a running service</td>
            <td>Temporarily disable a service</td>
          </tr>
          <tr>
            <td><strong>Restart</strong></td>
            <td>Stop and start the service</td>
            <td>After configuration changes</td>
          </tr>
          <tr>
            <td><strong>Reload</strong></td>
            <td>Reload configuration without downtime</td>
            <td>When service supports graceful reload</td>
          </tr>
          <tr>
            <td><strong>Enable</strong></td>
            <td>Start service on boot</td>
            <td>Service should auto-start</td>
          </tr>
          <tr>
            <td><strong>Disable</strong></td>
            <td>Don't start service on boot</td>
            <td>Service should not auto-start</td>
          </tr>
        </tbody>
      </table>

      <h3>Using the Web Interface</h3>
      <ol>
        <li>Navigate to "Services" in the sidebar</li>
        <li>Find the service you want to manage</li>
        <li>Click the action buttons (▶️ Start, ⏹️ Stop, 🔄 Restart)</li>
        <li>Confirm the action if prompted</li>
        <li>Wait for the status to update</li>
      </ol>

      <h3>Using the CLI</h3>
      <CodeBlock
        code={`# Start a service
systemctl start nginx

# Stop a service
systemctl stop nginx

# Restart a service
systemctl restart nginx

# Reload configuration
systemctl reload nginx

# Enable on boot
systemctl enable nginx

# Disable on boot
systemctl disable nginx

# Check service status
systemctl status nginx`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Common Services</h2>

      <h3>Web Server</h3>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Package</th>
            <th>Default Port</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>nginx</code></td>
            <td>nginx</td>
            <td>80, 443</td>
          </tr>
          <tr>
            <td><code>apache2</code></td>
            <td>apache2</td>
            <td>80, 443</td>
          </tr>
          <tr>
            <td><code>caddy</code></td>
            <td>caddy</td>
            <td>80, 443</td>
          </tr>
        </tbody>
      </table>

      <h3>Database</h3>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Package</th>
            <th>Default Port</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>mysql</code></td>
            <td>mysql-server</td>
            <td>3306</td>
          </tr>
          <tr>
            <td><code>postgresql</code></td>
            <td>postgresql</td>
            <td>5432</td>
          </tr>
          <tr>
            <td><code>redis</code></td>
            <td>redis-server</td>
            <td>6379</td>
          </tr>
        </tbody>
      </table>

      <h3>System Services</h3>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>ssh</code></td>
            <td>SSH server for remote access</td>
          </tr>
          <tr>
            <td><code>ufw</code></td>
            <td>Firewall service</td>
          </tr>
          <tr>
            <td><code>fail2ban</code></td>
            <td>Intrusion prevention</td>
          </tr>
          <tr>
            <td><code>cron</code></td>
            <td>Task scheduler</td>
          </tr>
        </tbody>
      </table>

      <h2>Viewing Service Logs</h2>
      <p>
        Access service logs directly from the web interface:
      </p>
      <ol>
        <li>Click on a service name</li>
        <li>Navigate to the "Logs" tab</li>
        <li>View recent log entries</li>
        <li>Use the search function to filter</li>
        <li>Download logs for offline analysis</li>
      </ol>

      <h3>Log Commands</h3>
      <CodeBlock
        code={`# View service logs
journalctl -u nginx

# Follow logs in real-time
journalctl -u nginx -f

# View last 100 lines
journalctl -u nginx -n 100

# View logs since a specific time
journalctl -u nginx --since "2 hours ago"

# View logs with priority filter
journalctl -u nginx -p err`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Service Auto-Recovery</h2>
      <p>
        Configure services to automatically restart on failure:
      </p>

      <CodeBlock
        code={`# Edit service file
sudo systemctl edit nginx.service

# Add these lines
[Service]
Restart=always
RestartSec=10
StartLimitBurst=3
StartLimitIntervalSec=60`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Troubleshooting Services</h2>

      <h3>Service Won't Start</h3>
      <ul>
        <li>Check logs for error messages</li>
        <li>Verify configuration file syntax</li>
        <li>Ensure required dependencies are installed</li>
        <li>Check if port is already in use</li>
        <li>Verify file permissions</li>
      </ul>

      <h3>Service Keeps Restarting</h3>
      <ul>
        <li>Check crash logs</li>
        <li>Monitor resource usage</li>
        <li>Verify configuration</li>
        <li>Check for dependency issues</li>
      </ul>
    </div>
  )
}
