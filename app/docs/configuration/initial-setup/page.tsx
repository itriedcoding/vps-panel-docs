import { CodeBlock } from '@/components/CodeBlock'

export default function InitialSetupPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Initial Setup</h1>
        <p className="text-lg text-dark-300">
          Configure VPS Panel after installation with these essential settings.
        </p>
      </div>

      <h2>Configuration File Location</h2>
      <p>
        VPS Panel stores its configuration in a JSON file at:
      </p>
      <CodeBlock
        code="/etc/vps-panel/config.json"
        language="text"
      />

      <h2>Configuration Format</h2>
      <p>
        The configuration file uses standard JSON format. Here's a complete example with all available options:
      </p>

      <CodeBlock
        code={`{
  "panel": {
    "domain": "panel.example.com",
    "port": 8080,
    "ssl": true,
    "ssl_provider": "letsencrypt",
    "session_timeout": 24,
    "max_login_attempts": 5,
    "lockout_duration": 30
  },
  "database": {
    "type": "sqlite",
    "path": "/var/lib/vps-panel/database.sqlite",
    "backup_interval": 24
  },
  "monitoring": {
    "enabled": true,
    "interval": 5,
    "retention_days": 30,
    "alerts": {
      "cpu_threshold": 80,
      "memory_threshold": 85,
      "disk_threshold": 90
    }
  },
  "backups": {
    "enabled": true,
    "schedule": "0 2 * * *",
    "retention_days": 7,
    "path": "/var/backups/vps-panel"
  },
  "security": {
    "two_factor_auth": false,
    "api_rate_limit": 100,
    "cors_origins": ["https://panel.example.com"]
  },
  "logging": {
    "level": "info",
    "file": "/var/log/vps-panel/panel.log",
    "max_size": "50M",
    "max_files": 10
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h2>Important Settings</h2>

      <h3>Panel Settings</h3>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>domain</code></td>
            <td>string</td>
            <td>-</td>
            <td>Domain name for the panel</td>
          </tr>
          <tr>
            <td><code>port</code></td>
            <td>number</td>
            <td>8080</td>
            <td>Port for direct access</td>
          </tr>
          <tr>
            <td><code>ssl</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>Enable SSL/HTTPS</td>
          </tr>
          <tr>
            <td><code>session_timeout</code></td>
            <td>number</td>
            <td>24</td>
            <td>Session timeout in hours</td>
          </tr>
        </tbody>
      </table>

      <h3>Monitoring Settings</h3>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>interval</code></td>
            <td>number</td>
            <td>5</td>
            <td>Monitoring interval in seconds</td>
          </tr>
          <tr>
            <td><code>retention_days</code></td>
            <td>number</td>
            <td>30</td>
            <td>How long to keep monitoring data</td>
          </tr>
          <tr>
            <td><code>cpu_threshold</code></td>
            <td>number</td>
            <td>80</td>
            <td>CPU usage alert threshold (%)</td>
          </tr>
        </tbody>
      </table>

      <h2>Environment Variables</h2>
      <p>
        You can override configuration settings using environment variables. This is useful for
        Docker deployments or when you don't want to modify the config file directly.
      </p>

      <CodeBlock
        code={`# Panel settings
VPS_PANEL_DOMAIN=panel.example.com
VPS_PANEL_PORT=8080
VPS_PANEL_SSL=true

# Database
VPS_PANEL_DB_TYPE=sqlite
VPS_PANEL_DB_PATH=/var/lib/vps-panel/database.sqlite

# Security
VPS_PANEL_SESSION_SECRET=your-secret-key-here
VPS_PANEL_JWT_EXPIRY=24h

# Monitoring
VPS_PANEL_MONITORING_ENABLED=true
VPS_PANEL_MONITORING_INTERVAL=5

# Logging
VPS_PANEL_LOG_LEVEL=info
VPS_PANEL_LOG_FILE=/var/log/vps-panel/panel.log`}
        language="bash"
        filename="/etc/vps-panel/environment"
        showLineNumbers
      />

      <h2>Applying Configuration Changes</h2>
      <p>
        After modifying the configuration file, restart the panel service to apply changes:
      </p>

      <CodeBlock
        code={`# Restart the panel service
systemctl restart vps-panel

# Verify the service is running
systemctl status vps-panel

# Check for configuration errors
journalctl -u vps-panel -n 50 --no-pager`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Service Management Commands</h2>
      <p>
        Use these commands to manage the VPS Panel service:
      </p>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>systemctl start vps-panel</code></td>
            <td>Start the panel service</td>
          </tr>
          <tr>
            <td><code>systemctl stop vps-panel</code></td>
            <td>Stop the panel service</td>
          </tr>
          <tr>
            <td><code>systemctl restart vps-panel</code></td>
            <td>Restart the panel service</td>
          </tr>
          <tr>
            <td><code>systemctl status vps-panel</code></td>
            <td>Check service status</td>
          </tr>
          <tr>
            <td><code>systemctl enable vps-panel</code></td>
            <td>Enable auto-start on boot</td>
          </tr>
          <tr>
            <td><code>systemctl disable vps-panel</code></td>
            <td>Disable auto-start on boot</td>
          </tr>
        </tbody>
      </table>

      <h2>Verifying Configuration</h2>
      <p>
        To verify your configuration is valid, use the built-in validation command:
      </p>

      <CodeBlock
        code={`# Validate configuration file
vps-panel config --validate

# Show current configuration (sanitized)
vps-panel config --show

# Test database connection
vps-panel config --test-db`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Always backup your configuration file before making changes.
          You can find it at <code>/etc/vps-panel/config.json</code>
        </p>
      </div>
    </div>
  )
}
