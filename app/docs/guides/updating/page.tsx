import { CodeBlock } from '@/components/CodeBlock'

export default function UpdatingPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Updating the Panel</h1>
        <p className="text-lg text-dark-300">
          How to safely update VPS Panel to the latest version.
        </p>
      </div>

      <h2>Before You Update</h2>

      <h3>Backup Your Data</h3>
      <p>
        Always create a backup before updating to prevent data loss:
      </p>

      <CodeBlock
        code={`# Create a full backup
vps-panel backup create --full

# Or backup specific components
vps-panel backup create --config --databases

# List available backups
vps-panel backup list`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Check Current Version</h3>
      <CodeBlock
        code={`# Check current version
vps-panel --version

# Check for available updates
vps-panel update --check`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Review Changelog</h3>
      <p>
        Check the changelog for breaking changes or important notes:
      </p>
      <ul>
        <li>Visit the GitHub releases page</li>
        <li>Review breaking changes</li>
        <li>Check for migration requirements</li>
        <li>Note any new configuration options</li>
      </ul>

      <h2>Update Procedure</h2>

      <h3>Method 1: Using the Update Script</h3>
      <p>
        The recommended way to update VPS Panel:
      </p>

      <CodeBlock
        code={`# Download and run the update script
bash <(curl -s https://your-domain.com/install.sh) --update

# Or with specific version
bash <(curl -s https://your-domain.com/install.sh) --update --version 1.1.0`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Method 2: Manual Update</h3>
      <p>
        For more control over the update process:
      </p>

      <CodeBlock
        code={`# Stop the panel service
sudo systemctl stop vps-panel

# Backup the current installation
sudo cp -r /opt/vps-panel /opt/vps-panel-backup-$(date +%Y%m%d)

# Download the latest version
cd /opt
sudo wget https://github.com/your-repo/vps-panel/releases/latest/download/vps-panel.tar.gz

# Extract the new version
sudo tar -xzf vps-panel.tar.gz

# Install dependencies
cd vps-panel
sudo npm install --production

# Run database migrations
sudo vps-panel migrate

# Update configuration (if needed)
sudo vps-panel config --validate

# Start the panel service
sudo systemctl start vps-panel

# Verify the update
vps-panel --version`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Method 3: Using Package Manager</h3>
      <p>
        If installed via package manager:
      </p>

      <CodeBlock
        code={`# Update package lists
sudo apt update

# Upgrade VPS Panel
sudo apt upgrade vps-panel

# Or specifically
sudo apt install --only-upgrade vps-panel`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Post-Update Steps</h2>

      <h3>Verify the Update</h3>
      <CodeBlock
        code={`# Check the new version
vps-panel --version

# Verify service is running
systemctl status vps-panel

# Check for any errors in logs
journalctl -u vps-panel -n 50

# Test the web interface
curl -I https://panel.example.com`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Run Database Migrations</h3>
      <p>
        If the update includes database changes:
      </p>

      <CodeBlock
        code={`# Run migrations
vps-panel migrate

# Check migration status
vps-panel migrate --status

# Rollback if needed
vps-panel migrate --rollback`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Update Nginx Configuration</h3>
      <p>
        If the update includes Nginx changes:
      </p>

      <CodeBlock
        code={`# Test Nginx configuration
nginx -t

# Reload Nginx
systemctl reload nginx

# Or restart if needed
systemctl restart nginx`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Automatic Updates</h2>
      <p>
        Configure automatic updates for convenience:
      </p>

      <CodeBlock
        code={`# Enable automatic updates
vps-panel config --set auto_update=true

# Set update schedule (daily at 3 AM)
vps-panel config --set update_schedule="0 3 * * *"

# Configure update preferences
vps-panel config --set update_channel=stable
vps-panel config --set update_notification=true`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Automatic Update Configuration</h3>
      <CodeBlock
        code={`{
  "updates": {
    "auto_update": true,
    "schedule": "0 3 * * *",
    "channel": "stable",
    "notification": true,
    "backup_before_update": true,
    "rollback_on_failure": true
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
      />

      <h2>Rollback Procedure</h2>
      <p>
        If something goes wrong after an update, you can rollback:
      </p>

      <CodeBlock
        code={`# Stop the panel service
sudo systemctl stop vps-panel

# Restore from backup
sudo rm -rf /opt/vps-panel
sudo cp -r /opt/vps-panel-backup-20240115 /opt/vps-panel

# Restore configuration
sudo cp /etc/vps-panel/config.json.backup /etc/vps-panel/config.json

# Restore database (if needed)
vps-panel backup restore backup-20240115.tar.gz

# Start the panel service
sudo systemctl start vps-panel

# Verify rollback
vps-panel --version`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Troubleshooting Updates</h2>

      <h3>Update Fails</h3>
      <ul>
        <li>Check disk space availability</li>
        <li>Verify internet connectivity</li>
        <li>Review update logs</li>
        <li>Check for dependency conflicts</li>
      </ul>

      <h3>Service Won't Start After Update</h3>
      <ul>
        <li>Check for configuration changes</li>
        <li>Review service logs</li>
        <li>Verify Node.js version compatibility</li>
        <li>Check for missing dependencies</li>
      </ul>

      <h3>Database Migration Errors</h3>
      <ul>
        <li>Backup database before migration</li>
        <li>Check migration logs</li>
        <li>Verify database permissions</li>
        <li>Contact support if needed</li>
      </ul>

      <h2>Version Policy</h2>
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>X.Y.Z</code></td>
            <td>Stable</td>
            <td>Production-ready releases</td>
          </tr>
          <tr>
            <td><code>X.Y.Z-beta.N</code></td>
            <td>Beta</td>
            <td>Testing releases</td>
          </tr>
          <tr>
            <td><code>X.Y.Z-rc.N</code></td>
            <td>Release Candidate</td>
            <td>Pre-release candidates</td>
          </tr>
          <tr>
            <td><code>nightly</code></td>
            <td>Nightly</td>
            <td>Daily builds (unstable)</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
        <p className="text-yellow-200">
          ⚠️ <strong>Important:</strong> Always backup your data before updating. While updates
          are generally safe, unexpected issues can occur.
        </p>
      </div>
    </div>
  )
}
