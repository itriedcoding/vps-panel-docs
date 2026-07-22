export default function FirewallPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Firewall Management</h1>
        <p className="text-lg text-dark-300">
          UFW-based firewall management with IP blocking and port configuration.
        </p>
      </div>

      <h2>Managing Rules</h2>
      <p>
        VPS Panel provides a user-friendly interface for managing UFW firewall rules.
      </p>

      <h3>Firewall Status</h3>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="text-green-400">Active</span></td>
            <td>Firewall is running and filtering traffic</td>
            <td>Click "Disable" to turn off</td>
          </tr>
          <tr>
            <td><span className="text-red-400">Inactive</span></td>
            <td>Firewall is not filtering traffic</td>
            <td>Click "Enable" to turn on</td>
          </tr>
        </tbody>
      </table>

      <h3>Adding Rules</h3>
      <ol>
        <li>Navigate to "Firewall" in the sidebar</li>
        <li>Click "Add Rule"</li>
        <li>Configure the rule:
          <ul>
            <li><strong>Action</strong> - Allow or Deny</li>
            <li><strong>Protocol</strong> - TCP, UDP, or Both</li>
            <li><strong>Port</strong> - Specific port or range</li>
            <li><strong>Source</strong> - IP address or subnet (optional)</li>
            <li><strong>Direction</strong> - Inbound or Outbound</li>
          </ul>
        </li>
        <li>Click "Save"</li>
      </ol>

      <h3>Using the CLI</h3>
      <CodeBlock
        code={`# Allow a port
sudo ufw allow 80/tcp

# Allow a range of ports
sudo ufw allow 8000:9000/tcp

# Allow from specific IP
sudo ufw allow from 192.168.1.100

# Deny a port
sudo ufw deny 3306/tcp

# Delete a rule
sudo ufw delete allow 80/tcp

# Enable firewall
sudo ufw enable

# Disable firewall
sudo ufw disable

# Check status
sudo ufw status verbose`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Port Configuration</h2>
      <p>
        Configure which ports are open for incoming and outgoing traffic.
      </p>

      <h3>Default Policies</h3>
      <table>
        <thead>
          <tr>
            <th>Policy</th>
            <th>Description</th>
            <th>Security Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Allow All</td>
            <td>All traffic is allowed by default</td>
            <td><span className="text-red-400">Low</span></td>
          </tr>
          <tr>
            <td>Deny All</td>
            <td>All traffic is denied by default</td>
            <td><span className="text-green-400">High</span></td>
          </tr>
          <tr>
            <td>Custom</td>
            <td>Specific rules for each port</td>
            <td><span className="text-yellow-400">Medium</span></td>
          </tr>
        </tbody>
      </table>

      <h3>Common Port Rules</h3>
      <CodeBlock
        code={`# SSH (required for remote access)
sudo ufw allow 22/tcp

# HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# VPS Panel
sudo ufw allow 8080/tcp

# MySQL
sudo ufw allow 3306/tcp

# PostgreSQL
sudo ufw allow 5432/tcp

# Redis
sudo ufw allow 6379/tcp

# FTP
sudo ufw allow 21/tcp

# Custom application port
sudo ufw allow 3000/tcp`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>IP Blocking</h2>
      <p>
        Block specific IP addresses or ranges to prevent unauthorized access.
      </p>

      <h3>Blocking an IP</h3>
      <ol>
        <li>Go to "Firewall" → "IP Blocking"</li>
        <li>Enter the IP address to block</li>
        <li>Select block duration (temporary or permanent)</li>
        <li>Add a reason for the block (optional)</li>
        <li>Click "Block IP"</li>
      </ol>

      <h3>Blocking IP Ranges</h3>
      <CodeBlock
        code={`# Block a single IP
sudo ufw deny from 123.456.789.0

# Block a subnet
sudo ufw deny from 192.168.1.0/24

# Block an IP range
sudo ufw deny from 10.0.0.0 to 10.0.0.255

# Block IPv6
sudo ufw deny from 2001:db8::/32`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>IP Block Lists</h3>
      <p>
        VPS Panel integrates with IP block lists for automatic threat protection:
      </p>
      <ul>
        <li><strong>Spamhaus</strong> - Known spam sources</li>
        <li><strong>Emerging Threats</strong> - Known attack sources</li>
        <li><strong>Custom Lists</strong> - Your own block lists</li>
      </ul>

      <h2>Advanced Rules</h2>

      <h3>Rate Limiting</h3>
      <p>
        Protect against brute force attacks with rate limiting:
      </p>
      <CodeBlock
        code={`# Rate limit SSH (6 attempts per minute)
sudo ufw limit 22/tcp

# Rate limit HTTP (20 connections per minute)
sudo ufw limit 80/tcp`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Application Profiles</h3>
      <p>
        Use predefined application profiles for common services:
      </p>
      <CodeBlock
        code={`# List available profiles
sudo ufw app list

# Allow a profile
sudo ufw allow "Nginx Full"

# Allow specific profile
sudo ufw allow "OpenSSH"

# View profile details
sudo ufw app info "Nginx Full"`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Monitoring Firewall Activity</h2>

      <h3>Viewing Logs</h3>
      <ul>
        <li>View blocked connection attempts</li>
        <li>Monitor allowed connections</li>
        <li>Export logs for analysis</li>
        <li>Real-time log streaming</li>
      </ul>

      <h3>Log Commands</h3>
      <CodeBlock
        code={`# View UFW logs
sudo tail -f /var/log/ufw.log

# Search for specific IP
sudo grep "123.456.789.0" /var/log/ufw.log

# Count blocked attempts
sudo grep "BLOCK" /var/log/ufw.log | wc -l

# View recent blocks
sudo grep "BLOCK" /var/log/ufw.log | tail -20`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Firewall Best Practices</h2>

      <ul>
        <li><strong>Default Deny</strong> - Start with a deny-all policy</li>
        <li><strong>Allow Only Necessary</strong> - Open only required ports</li>
        <li><strong>SSH Protection</strong> - Always rate-limit SSH access</li>
        <li><strong>Regular Audits</strong> - Review rules periodically</li>
        <li><strong>Log Enabled</strong> - Keep logging enabled for monitoring</li>
        <li><strong>Test Changes</strong> - Test rules before applying</li>
        <li><strong>Backup Rules</strong> - Export and backup your rules</li>
      </ul>

      <h2>Exporting and Importing Rules</h2>
      <CodeBlock
        code={`# Export rules
sudo ufw export > /etc/ufw/rules.v4

# Import rules
sudo ufw import < /etc/ufw/rules.v4

# Reset to defaults
sudo ufw reset

# Reload firewall
sudo ufw reload`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />
    </div>
  )
}
