'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function TroubleshootingPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Troubleshooting</h1>
        <p className="text-lg text-dark-300">
          Common issues and solutions for VPS Panel.
        </p>
      </div>

      <h2>Installation Issues</h2>

      <h3>Installation Script Fails</h3>
      <p><strong>Symptoms:</strong> The installation script stops with an error.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Ensure you're running as root: <code>sudo su</code></li>
        <li>Check internet connectivity: <code>ping google.com</code></li>
        <li>Verify disk space: <code>df -h</code></li>
        <li>Check available memory: <code>free -h</code></li>
        <li>Review installation logs: <code>cat /var/log/vps-panel-install.log</code></li>
      </ul>

      <h3>Port Already in Use</h3>
      <p><strong>Symptoms:</strong> Error about port 8080 being in use.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Find what's using the port
sudo lsof -i :8080
sudo netstat -tlnp | grep 8080

# Stop the conflicting service
sudo systemctl stop <service-name>

# Or use a different port
bash install.sh --port 3000`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Access Issues</h2>

      <h3>Cannot Access Panel</h3>
      <p><strong>Symptoms:</strong> Browser shows "This site can't be reached".</p>
      <p><strong>Solutions:</strong></p>
      <ol>
        <li>Check if the service is running: <code>systemctl status vps-panel</code></li>
        <li>Verify firewall allows the port: <code>ufw status</code></li>
        <li>Check Nginx configuration: <code>nginx -t</code></li>
        <li>Review Nginx error logs: <code>tail -f /var/log/nginx/error.log</code></li>
        <li>Verify DNS is pointing to your server</li>
      </ol>

      <h3>502 Bad Gateway</h3>
      <p><strong>Symptoms:</strong> Nginx shows 502 Bad Gateway error.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Verify VPS Panel service is running: <code>systemctl status vps-panel</code></li>
        <li>Check if the backend port is correct in Nginx config</li>
        <li>Review panel logs: <code>journalctl -u vps-panel -n 50</code></li>
        <li>Restart the panel service: <code>systemctl restart vps-panel</code></li>
      </ul>

      <h3>SSL Certificate Errors</h3>
      <p><strong>Symptoms:</strong> Browser shows SSL/TLS errors.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Verify DNS is pointing to your server</li>
        <li>Check port 80 is accessible from the internet</li>
        <li>Ensure Let's Encrypt isn't rate-limited</li>
        <li>Renew certificates: <code>vps-panel ssl renew</code></li>
        <li>Check certificate expiry: <code>openssl x509 -in /etc/letsencrypt/live/domain.com/cert.pem -noout -dates</code></li>
      </ul>

      <h2>Service Issues</h2>

      <h3>Panel Service Won't Start</h3>
      <p><strong>Symptoms:</strong> <code>systemctl status vps-panel</code> shows failed state.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Check service logs
journalctl -u vps-panel -n 100

# Check for configuration errors
vps-panel config --validate

# Verify Node.js is installed
node --version

# Check file permissions
ls -la /etc/vps-panel/

# Restart the service
systemctl restart vps-panel`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Nginx Won't Start</h3>
      <p><strong>Symptoms:</strong> Nginx fails to start or reload.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Test Nginx configuration
nginx -t

# Check for syntax errors
cat /var/log/nginx/error.log

# Verify configuration files
ls -la /etc/nginx/sites-enabled/

# Check if port 80 is in use
sudo lsof -i :80

# Restart Nginx
systemctl restart nginx`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Database Issues</h2>

      <h3>MySQL Connection Refused</h3>
      <p><strong>Symptoms:</strong> Cannot connect to MySQL database.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Check MySQL status
systemctl status mysql

# Verify MySQL is listening
netstat -tlnp | grep 3306

# Check MySQL error log
tail -f /var/log/mysql/error.log

# Restart MySQL
systemctl restart mysql

# Test connection
mysql -u root -p`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>PostgreSQL Connection Refused</h3>
      <p><strong>Symptoms:</strong> Cannot connect to PostgreSQL database.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Check PostgreSQL status
systemctl status postgresql

# Verify PostgreSQL is listening
netstat -tlnp | grep 5432

# Check PostgreSQL logs
tail -f /var/log/postgresql/postgresql-14-main.log

# Restart PostgreSQL
systemctl restart postgresql`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Performance Issues</h2>

      <h3>Panel is Slow</h3>
      <p><strong>Symptoms:</strong> Panel loads slowly or times out.</p>
      <p><strong>Solutions:</strong></p>
      <ul>
        <li>Check server resources: <code>htop</code></li>
        <li>Verify no resource-intensive processes are running</li>
        <li>Check disk I/O: <code>iostat</code></li>
        <li>Review panel logs for errors</li>
        <li>Consider increasing server resources</li>
      </ul>

      <h3>High CPU Usage</h3>
      <p><strong>Symptoms:</strong> CPU usage consistently above 80%.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Find processes using CPU
top -o %CPU
htop

# Check for runaway processes
ps aux --sort=-%cpu | head -10

# Monitor CPU in real-time
mpstat 1`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>High Memory Usage</h3>
      <p><strong>Symptoms:</strong> Memory usage consistently above 80%.</p>
      <p><strong>Solutions:</strong></p>
      <CodeBlock
        code={`# Find processes using memory
top -o %MEM
ps aux --sort=-%mem | head -10

# Check memory details
free -h
cat /proc/meminfo

# Clear system cache
sync; echo 3 > /proc/sys/vm/drop_caches`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Log File Locations</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Log Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VPS Panel</td>
            <td><code>/var/log/vps-panel/panel.log</code></td>
          </tr>
          <tr>
            <td>Nginx Access</td>
            <td><code>/var/log/nginx/access.log</code></td>
          </tr>
          <tr>
            <td>Nginx Error</td>
            <td><code>/var/log/nginx/error.log</code></td>
          </tr>
          <tr>
            <td>MySQL</td>
            <td><code>/var/log/mysql/error.log</code></td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td><code>/var/log/postgresql/</code></td>
          </tr>
          <tr>
            <td>SSH</td>
            <td><code>/var/log/auth.log</code></td>
          </tr>
          <tr>
            <td>System</td>
            <td><code>/var/log/syslog</code></td>
          </tr>
          <tr>
            <td>UFW</td>
            <td><code>/var/log/ufw.log</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Getting Help</h2>

      <h3>Check Documentation</h3>
      <p>
        Review this documentation for solutions to common issues.
      </p>

      <h3>GitHub Issues</h3>
      <p>
        Search existing issues or create a new one:
      </p>
      <ul>
        <li>Search for similar issues</li>
        <li>Include error messages and logs</li>
        <li>Provide system information</li>
        <li>Describe steps to reproduce</li>
      </ul>

      <h3>Community Support</h3>
      <p>
        Join our community for help:
      </p>
      <ul>
        <li>GitHub Discussions</li>
        <li>Discord server</li>
        <li>Stack Overflow (tag: vps-panel)</li>
      </ul>

      <h3>System Information for Support</h3>
      <CodeBlock
        code={`# Gather system information
echo "=== OS ==="
cat /etc/os-release

echo "=== Kernel ==="
uname -a

echo "=== Memory ==="
free -h

echo "=== Disk ==="
df -h

echo "=== Panel Version ==="
vps-panel --version

echo "=== Service Status ==="
systemctl status vps-panel`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />
    </div>
  )
}
