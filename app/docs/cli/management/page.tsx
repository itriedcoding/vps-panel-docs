'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function ManagementPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Management Commands</h1>
        <p className="text-lg text-dark-300">
          CLI commands for managing VPS Panel services, configuration, and maintenance.
        </p>
      </div>

      <h2>Service Management</h2>

      <h3>Service Control</h3>
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel start</code></td>
            <td>Start the panel service</td>
          </tr>
          <tr>
            <td><code>vps-panel stop</code></td>
            <td>Stop the panel service</td>
          </tr>
          <tr>
            <td><code>vps-panel restart</code></td>
            <td>Restart the panel service</td>
          </tr>
          <tr>
            <td><code>vps-panel status</code></td>
            <td>Check service status</td>
          </tr>
          <tr>
            <td><code>vps-panel reload</code></td>
            <td>Reload configuration</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Start the service
vps-panel start

# Check status
vps-panel status

# Restart after changes
vps-panel restart`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Systemd Commands</h3>
      <CodeBlock
        code={`# Using systemctl directly
sudo systemctl start vps-panel
sudo systemctl stop vps-panel
sudo systemctl restart vps-panel
sudo systemctl status vps-panel

# Enable auto-start on boot
sudo systemctl enable vps-panel

# Disable auto-start
sudo systemctl disable vps-panel`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Configuration Commands</h2>

      <h3>View Configuration</h3>
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel config --show</code></td>
            <td>Display current configuration</td>
          </tr>
          <tr>
            <td><code>vps-panel config --validate</code></td>
            <td>Validate configuration file</td>
          </tr>
          <tr>
            <td><code>vps-panel config --get KEY</code></td>
            <td>Get a specific config value</td>
          </tr>
          <tr>
            <td><code>vps-panel config --set KEY=VALUE</code></td>
            <td>Set a config value</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Show all configuration
vps-panel config --show

# Get specific setting
vps-panel config --get panel.domain

# Set a value
vps-panel config --set panel.port=3000

# Validate configuration
vps-panel config --validate`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Database Configuration</h3>
      <CodeBlock
        code={`# Test database connection
vps-panel config --test-db

# Reset database
vps-panel config --reset-db

# Backup database
vps-panel config --backup-db`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>User Management Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel user create USERNAME</code></td>
            <td>Create a new user</td>
          </tr>
          <tr>
            <td><code>vps-panel user delete USERNAME</code></td>
            <td>Delete a user</td>
          </tr>
          <tr>
            <td><code>vps-panel user list</code></td>
            <td>List all users</td>
          </tr>
          <tr>
            <td><code>vps-panel user info USERNAME</code></td>
            <td>Show user details</td>
          </tr>
          <tr>
            <td><code>vps-panel user password USERNAME</code></td>
            <td>Change user password</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Create a user
vps-panel user create john --email john@example.com

# Create with sudo access
vps-panel user create john --email john@example.com --sudo

# List all users
vps-panel user list

# Change password
vps-panel user password john`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Domain Management Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel domain add DOMAIN</code></td>
            <td>Add a new domain</td>
          </tr>
          <tr>
            <td><code>vps-panel domain remove DOMAIN</code></td>
            <td>Remove a domain</td>
          </tr>
          <tr>
            <td><code>vps-panel domain list</code></td>
            <td>List all domains</td>
          </tr>
          <tr>
            <td><code>vps-panel domain info DOMAIN</code></td>
            <td>Show domain details</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Add a domain
vps-panel domain add example.com --root /var/www/example.com

# Add with SSL
vps-panel domain add example.com --root /var/www/example.com --ssl

# List domains
vps-panel domain list

# Remove domain
vps-panel domain remove example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>SSL Management Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel ssl issue DOMAIN</code></td>
            <td>Issue SSL certificate</td>
          </tr>
          <tr>
            <td><code>vps-panel ssl renew</code></td>
            <td>Renew certificates</td>
          </tr>
          <tr>
            <td><code>vps-panel ssl status DOMAIN</code></td>
            <td>Check SSL status</td>
          </tr>
          <tr>
            <td><code>vps-panel ssl list</code></td>
            <td>List all certificates</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Issue certificate
vps-panel ssl issue example.com --email admin@example.com

# Renew all certificates
vps-panel ssl renew

# Check specific domain
vps-panel ssl status example.com

# List all certificates
vps-panel ssl list`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Backup Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel backup create</code></td>
            <td>Create a backup</td>
          </tr>
          <tr>
            <td><code>vps-panel backup restore FILE</code></td>
            <td>Restore from backup</td>
          </tr>
          <tr>
            <td><code>vps-panel backup list</code></td>
            <td>List available backups</td>
          </tr>
          <tr>
            <td><code>vps-panel backup verify FILE</code></td>
            <td>Verify backup integrity</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Create full backup
vps-panel backup create --full

# Create web files backup
vps-panel backup create --web

# List backups
vps-panel backup list

# Restore backup
vps-panel backup restore backup-2024-01-15.tar.gz`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Database Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel db create NAME</code></td>
            <td>Create a database</td>
          </tr>
          <tr>
            <td><code>vps-panel db drop NAME</code></td>
            <td>Drop a database</td>
          </tr>
          <tr>
            <td><code>vps-panel db list</code></td>
            <td>List all databases</td>
          </tr>
          <tr>
            <td><code>vps-panel db backup NAME</code></td>
            <td>Backup a database</td>
          </tr>
          <tr>
            <td><code>vps-panel db restore NAME FILE</code></td>
            <td>Restore a database</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Create database
vps-panel db create myapp --type mysql

# List databases
vps-panel db list

# Backup database
vps-panel db backup myapp

# Restore database
vps-panel db restore myapp backup.sql`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Firewall Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel firewall status</code></td>
            <td>Check firewall status</td>
          </tr>
          <tr>
            <td><code>vps-panel firewall enable</code></td>
            <td>Enable firewall</td>
          </tr>
          <tr>
            <td><code>vps-panel firewall disable</code></td>
            <td>Disable firewall</td>
          </tr>
          <tr>
            <td><code>vps-panel firewall allow PORT</code></td>
            <td>Allow a port</td>
          </tr>
          <tr>
            <td><code>vps-panel firewall deny PORT</code></td>
            <td>Deny a port</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Check status
vps-panel firewall status

# Allow a port
vps-panel firewall allow 8080/tcp

# Deny a port
vps-panel firewall deny 3306/tcp

# Block IP
vps-panel firewall block-ip 123.456.789.0`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Maintenance Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel update</code></td>
            <td>Check for updates</td>
          </tr>
          <tr>
            <td><code>vps-panel update --install</code></td>
            <td>Install updates</td>
          </tr>
          <tr>
            <td><code>vps-panel logs</code></td>
            <td>View panel logs</td>
          </tr>
          <tr>
            <td><code>vps-panel logs --follow</code></td>
            <td>Follow logs in real-time</td>
          </tr>
          <tr>
            <td><code>vps-panel clear-cache</code></td>
            <td>Clear system cache</td>
          </tr>
          <tr>
            <td><code>vps-panel health</code></td>
            <td>Run health checks</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Check for updates
vps-panel update --check

# Install updates
vps-panel update --install

# View logs
vps-panel logs --tail 100

# Follow logs
vps-panel logs --follow

# Health check
vps-panel health`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Debugging Commands</h2>

      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vps-panel --version</code></td>
            <td>Show version</td>
          </tr>
          <tr>
            <td><code>vps-panel --help</code></td>
            <td>Show help</td>
          </tr>
          <tr>
            <td><code>vps-panel debug</code></td>
            <td>Run debug diagnostics</td>
          </tr>
          <tr>
            <td><code>vps-panel test</code></td>
            <td>Run test suite</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock
        code={`# Show version
vps-panel --version

# Debug mode
vps-panel debug

# Test connections
vps-panel test --db
vps-panel test --redis
vps-panel test --nginx`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Use <code>vps-panel --help</code> to see all available commands
          and options. Add <code>--help</code> after any command for specific help.
        </p>
      </div>
    </div>
  )
}
