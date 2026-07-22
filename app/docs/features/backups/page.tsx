import { CodeBlock } from '@/components/CodeBlock'

export default function BackupsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Backup & Restore</h1>
        <p className="text-lg text-dark-300">
          Automated backups with one-click restore for your server data.
        </p>
      </div>

      <h2>Creating Backups</h2>
      <p>
        VPS Panel provides flexible backup options to protect your data.
      </p>

      <h3>Backup Types</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Full Backup</strong></td>
            <td>Complete server snapshot</td>
            <td>Initial backup, migration</td>
          </tr>
          <tr>
            <td><strong>Incremental</strong></td>
            <td>Only changed files since last backup</td>
            <td>Regular automated backups</td>
          </tr>
          <tr>
            <td><strong>Database Only</strong></td>
            <td>Just database dumps</td>
            <td>Database-heavy applications</td>
          </tr>
          <tr>
            <td><strong>Files Only</strong></td>
            <td>Web files and configurations</td>
            <td>Static websites</td>
          </tr>
        </tbody>
      </table>

      <h3>Creating a Backup</h3>
      <ol>
        <li>Navigate to "Backups" in the sidebar</li>
        <li>Click "Create Backup"</li>
        <li>Select backup type and scope</li>
        <li>Choose what to include:
          <ul>
            <li>System files</li>
            <li>Web files</li>
            <li>Databases</li>
            <li>Email accounts</li>
            <li>Configuration files</li>
          </ul>
        </li>
        <li>Click "Start Backup"</li>
      </ol>

      <h3>Using the CLI</h3>
      <CodeBlock
        code={`# Create full backup
vps-panel backup create --full

# Create web files backup
vps-panel backup create --web

# Create database backup
vps-panel backup create --databases

# Create specific database backup
vps-panel backup create --database myapp

# List backups
vps-panel backup list

# Verify backup integrity
vps-panel backup verify backup-2024-01-15.tar.gz`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Restoring Data</h2>
      <p>
        Restore your server from any backup with a single click.
      </p>

      <h3>Restore Options</h3>
      <ul>
        <li><strong>Full Restore</strong> - Restore entire server state</li>
        <li><strong>Selective Restore</strong> - Choose specific files/databases</li>
        <li><strong>Preview Before Restore</strong> - See what will be restored</li>
        <li><strong>Rollback</strong> - Undo a restore operation</li>
      </ul>

      <h3>Restoring a Backup</h3>
      <ol>
        <li>Navigate to "Backups" in the sidebar</li>
        <li>Find the backup you want to restore</li>
        <li>Click "Restore"</li>
        <li>Select restore type (full or selective)</li>
        <li>Review what will be restored</li>
        <li>Confirm the restore operation</li>
        <li>Wait for completion</li>
      </ol>

      <h3>Restore Commands</h3>
      <CodeBlock
        code={`# List available backups
vps-panel backup list

# Restore full backup
vps-panel backup restore backup-2024-01-15.tar.gz

# Restore specific database
vps-panel backup restore backup-2024-01-15.tar.gz --database myapp

# Restore specific directory
vps-panel backup restore backup-2024-01-15.tar.gz --path /var/www

# Verify backup before restore
vps-panel backup restore backup-2024-01-15.tar.gz --verify`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Scheduling Backups</h2>
      <p>
        Automate your backup routine with scheduled backups.
      </p>

      <h3>Backup Schedule Options</h3>
      <table>
        <thead>
          <tr>
            <th>Schedule</th>
            <th>Cron Expression</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hourly</td>
            <td><code>0 * * * *</code></td>
            <td>Critical data</td>
          </tr>
          <tr>
            <td>Daily</td>
            <td><code>0 2 * * *</code></td>
            <td>Regular websites</td>
          </tr>
          <tr>
            <td>Weekly</td>
            <td><code>0 2 * * 0</code></td>
            <td>Low-change servers</td>
          </tr>
          <tr>
            <td>Monthly</td>
            <td><code>0 2 1 * *</code></td>
            <td>Archive backups</td>
          </tr>
        </tbody>
      </table>

      <h3>Configuring Scheduled Backups</h3>
      <ol>
        <li>Navigate to "Backups" → "Settings"</li>
        <li>Click "Add Schedule"</li>
        <li>Configure backup type and scope</li>
        <li>Set the schedule (cron expression)</li>
        <li>Configure retention policy</li>
        <li>Set notification preferences</li>
        <li>Click "Save"</li>
      </ol>

      <h2>Backup Storage</h2>

      <h3>Local Storage</h3>
      <p>
        Backups are stored locally by default at:
      </p>
      <CodeBlock
        code="/var/backups/vps-panel/"
        language="text"
      />

      <h3>Remote Storage</h3>
      <p>
        Configure remote storage for off-site backups:
      </p>
      <ul>
        <li><strong>SFTP</strong> - Secure file transfer</li>
        <li><strong>Amazon S3</strong> - Cloud storage</li>
        <li><strong>Google Cloud Storage</strong> - Google Cloud</li>
        <li><strong>Dropbox</strong> - Cloud backup</li>
      </ul>

      <h3>Remote Storage Configuration</h3>
      <CodeBlock
        code={`{
  "backup": {
    "storage": {
      "local": {
        "enabled": true,
        "path": "/var/backups/vps-panel"
      },
      "sftp": {
        "enabled": false,
        "host": "backup.example.com",
        "port": 22,
        "username": "backup",
        "key": "/root/.ssh/id_rsa",
        "path": "/backups/vps-panel"
      },
      "s3": {
        "enabled": false,
        "bucket": "my-backups",
        "region": "us-east-1",
        "access_key": "YOUR_ACCESS_KEY",
        "secret_key": "YOUR_SECRET_KEY"
      }
    }
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h2>Retention Policy</h2>
      <p>
        Configure how long backups are kept:
      </p>

      <table>
        <thead>
          <tr>
            <th>Retention</th>
            <th>Description</th>
            <th>Storage Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daily for 7 days</td>
            <td>Keep last 7 daily backups</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Weekly for 4 weeks</td>
            <td>Keep last 4 weekly backups</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Monthly for 12 months</td>
            <td>Keep last 12 monthly backups</td>
            <td>Low</td>
          </tr>
        </tbody>
      </table>

      <h2>Backup Encryption</h2>
      <p>
        Encrypt your backups for additional security:
      </p>

      <CodeBlock
        code={`# Create encrypted backup
vps-panel backup create --full --encrypt

# Restore encrypted backup
vps-panel backup restore backup-2024-01-15.tar.gz.enc

# Set encryption key
vps-panel backup config --encryption-key "your-secret-key"`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Monitoring Backup Status</h2>
      <ul>
        <li>View backup history and status</li>
        <li>Receive notifications for completed/failed backups</li>
        <li>Monitor backup size and duration</li>
        <li>Verify backup integrity</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Backup Failed</h3>
      <ul>
        <li>Check disk space availability</li>
        <li>Verify database credentials</li>
        <li>Check file permissions</li>
        <li>Review backup logs</li>
      </ul>

      <h3>Restore Failed</h3>
      <ul>
        <li>Verify backup integrity</li>
        <li>Check available disk space</li>
        <li>Ensure services are stopped</li>
        <li>Review restore logs</li>
      </ul>
    </div>
  )
}
