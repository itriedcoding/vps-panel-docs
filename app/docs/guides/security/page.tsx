'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function SecurityPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Security Hardening</h1>
        <p className="text-lg text-dark-300">
          Best practices to secure your VPS and VPS Panel installation.
        </p>
      </div>

      <h2>Security Overview</h2>
      <p>
        Security is critical for any server exposed to the internet. This guide covers essential
        steps to harden your VPS and protect it from common threats.
      </p>

      <h2>Initial Security Steps</h2>

      <h3>1. Change Default Credentials</h3>
      <p>
        Immediately change the default admin credentials after installation:
      </p>
      <ol>
        <li>Log in with admin/admin</li>
        <li>Go to Profile → Change Password</li>
        <li>Use a strong, unique password (16+ characters)</li>
        <li>Enable two-factor authentication if available</li>
      </ol>

      <h3>2. Create a Non-Root User</h3>
      <p>
        Avoid using root for daily operations:
      </p>
      <CodeBlock
        code={`# Create a new user
adduser john

# Add to sudo group
usermod -aG sudo john

# Switch to new user
su - john`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>3. Disable Root SSH Login</h3>
      <CodeBlock
        code={`# Edit SSH configuration
sudo nano /etc/ssh/sshd_config

# Change these settings
PermitRootLogin no
PasswordAuthentication no

# Restart SSH service
sudo systemctl restart sshd`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Firewall Configuration</h2>

      <h3>UFW Setup</h3>
      <CodeBlock
        code={`# Enable UFW
sudo ufw enable

# Set default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH (change port if needed)
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow VPS Panel (if using custom port)
sudo ufw allow 8080/tcp

# Check status
sudo ufw status verbose`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Rate Limiting</h3>
      <CodeBlock
        code={`# Rate limit SSH (6 attempts per minute)
sudo ufw limit 22/tcp

# Rate limit HTTP
sudo ufw limit 80/tcp`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>SSH Hardening</h2>

      <h3>Use SSH Keys</h3>
      <CodeBlock
        code={`# Generate SSH key pair (on your local machine)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key to server
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server-ip

# Test connection
ssh -i ~/.ssh/id_ed25519 user@server-ip`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>SSH Configuration</h3>
      <CodeBlock
        code={`# Edit SSH configuration
sudo nano /etc/ssh/sshd_config

# Recommended settings
Port 2222                    # Change default port
PermitRootLogin no           # Disable root login
PasswordAuthentication no    # Key-only authentication
MaxAuthTries 3               # Limit login attempts
ClientAliveInterval 300      # Timeout idle connections
ClientAliveCountMax 2        # Disconnect after timeout
AllowUsers john              # Only allow specific users`}
        language="bash"
        filename="/etc/ssh/sshd_config"
        showLineNumbers
      />

      <h2>Fail2Ban Setup</h2>
      <p>
        Protect against brute force attacks with Fail2Ban:
      </p>

      <CodeBlock
        code={`# Install Fail2Ban
sudo apt install fail2ban

# Create local configuration
sudo nano /etc/fail2ban/jail.local

# Add these configurations
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5
backend = systemd

[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
port = http,https
filter = nginx-http-auth
logpath = /var/log/nginx/error.log

# Restart Fail2Ban
sudo systemctl restart fail2ban

# Check status
sudo fail2ban-client status`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>System Updates</h2>
      <p>
        Keep your system updated with the latest security patches:
      </p>

      <CodeBlock
        code={`# Update package lists
sudo apt update

# Upgrade all packages
sudo apt upgrade -y

# Remove unused packages
sudo apt autoremove -y

# Enable automatic updates (optional)
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>File Permissions</h2>

      <h3>Critical Files</h3>
      <CodeBlock
        code={`# SSH directory
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

# Panel configuration
chmod 600 /etc/vps-panel/config.json
chown root:root /etc/vps-panel/config.json

# Nginx configuration
chmod 644 /etc/nginx/nginx.conf
chmod 644 /etc/nginx/sites-available/*`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Sensitive Directories</h3>
      <CodeBlock
        code={`# Restrict access to sensitive directories
chmod 750 /var/log
chmod 750 /etc/ssl/private

# Set proper ownership
chown -R www-data:www-data /var/www
chmod -R 755 /var/www`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Network Security</h2>

      <h3>Disable Unnecessary Services</h3>
      <CodeBlock
        code={`# List running services
systemctl list-units --type=service --state=running

# Stop and disable unused services
sudo systemctl stop <service-name>
sudo systemctl disable <service-name>`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Bind Services to Localhost</h3>
      <CodeBlock
        code={`# MySQL - bind to localhost only
# Edit /etc/mysql/mysql.conf.d/mysqld.cnf
bind-address = 127.0.0.1

# Redis - bind to localhost only
# Edit /etc/redis/redis.conf
bind 127.0.0.1 ::1`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Monitoring and Logging</h2>

      <h3>Enable Audit Logging</h3>
      <CodeBlock
        code={`# Install auditd
sudo apt install auditd

# Add rules to monitor critical files
sudo auditctl -w /etc/passwd -p wa -k passwd_changes
sudo auditctl -w /etc/shadow -p wa -k shadow_changes
sudo auditctl -w /etc/sudoers -p wa -k sudoers_changes

# View audit logs
sudo ausearch -k passwd_changes`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Log Monitoring</h3>
      <CodeBlock
        code={`# Monitor auth logs
sudo tail -f /var/log/auth.log

# Monitor Nginx access
sudo tail -f /var/log/nginx/access.log

# Monitor panel logs
sudo tail -f /var/log/vps-panel/panel.log`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Backup Security</h2>
      <ul>
        <li>Encrypt backups before storage</li>
        <li>Store backups off-site</li>
        <li>Use separate credentials for backup storage</li>
        <li>Test backup restoration regularly</li>
        <li>Limit backup access to necessary users</li>
      </ul>

      <h2>Security Checklist</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Change default admin password</td>
            <td><span className="text-red-400">Critical</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Disable root SSH login</td>
            <td><span className="text-red-400">Critical</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Enable SSH key authentication</td>
            <td><span className="text-red-400">Critical</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Configure firewall</td>
            <td><span className="text-red-400">Critical</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Install and configure Fail2Ban</td>
            <td><span className="text-yellow-400">High</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Set up automatic updates</td>
            <td><span className="text-yellow-400">High</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Review file permissions</td>
            <td><span className="text-yellow-400">High</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Enable SSL/HTTPS</td>
            <td><span className="text-yellow-400">High</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Set up backup system</td>
            <td><span className="text-yellow-400">High</span></td>
            <td>☐</td>
          </tr>
          <tr>
            <td>Monitor system logs</td>
            <td><span className="text-green-400">Medium</span></td>
            <td>☐</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
        <p className="text-yellow-200">
          ⚠️ <strong>Important:</strong> Security is an ongoing process. Regularly review and
          update your security measures to protect against new threats.
        </p>
      </div>
    </div>
  )
}
