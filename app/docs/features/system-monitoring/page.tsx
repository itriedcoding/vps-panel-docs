import { CodeBlock } from '@/components/CodeBlock'

export default function SystemMonitoringPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">System Monitoring</h1>
        <p className="text-lg text-dark-300">
          Comprehensive monitoring for CPU, memory, disk, and network resources.
        </p>
      </div>

      <h2>CPU Monitoring</h2>
      <p>
        Track CPU usage across all cores with real-time graphs and historical data.
      </p>

      <h3>Metrics Available</h3>
      <ul>
        <li>Overall CPU usage percentage</li>
        <li>Per-core utilization</li>
        <li>User vs system time breakdown</li>
        <li>Load averages (1, 5, 15 minutes)</li>
        <li>CPU frequency and temperature</li>
        <li>Context switches per second</li>
      </ul>

      <h3>CPU Usage Levels</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Usage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>0-50%</td>
            <td><span className="text-green-400">Healthy</span></td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>50-70%</td>
            <td><span className="text-yellow-400">Attention</span></td>
          </tr>
          <tr>
            <td>High</td>
            <td>70-90%</td>
            <td><span className="text-orange-400">Warning</span></td>
          </tr>
          <tr>
            <td>Critical</td>
            <td>90-100%</td>
            <td><span className="text-red-400">Critical</span></td>
          </tr>
        </tbody>
      </table>

      <h2>Memory Tracking</h2>
      <p>
        Monitor RAM and swap usage with detailed breakdowns.
      </p>

      <h3>Memory Components</h3>
      <ul>
        <li><strong>Used</strong> - Actively used memory</li>
        <li><strong>Buffers</strong> - Memory used by kernel buffers</li>
        <li><strong>Cached</strong> - Memory used for file system cache</li>
        <li><strong>Free</strong> - Completely unused memory</li>
        <li><strong>Swap</strong> - Virtual memory on disk</li>
      </ul>

      <h3>Memory Usage Formula</h3>
      <CodeBlock
        code={`# Calculate actual memory usage
Actual Usage = Total - (Free + Buffers + Cached)

# View memory details
free -h

# Monitor memory in real-time
watch -n 1 free -h`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Disk Usage</h2>
      <p>
        Track storage utilization across all mounted partitions.
      </p>

      <h3>Disk Metrics</h3>
      <ul>
        <li>Space usage per partition</li>
        <li>Inode usage</li>
        <li>Read/write operations per second</li>
        <li>I/O wait time</li>
        <li>Disk health status (S.M.A.R.T.)</li>
      </ul>

      <h3>Checking Disk Usage</h3>
      <CodeBlock
        code={`# View disk usage
df -h

# Check specific directory
du -sh /var/log/*

# Find large files
find / -type f -size +100M -exec ls -lh {} \\;

# Check inode usage
df -i`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Network Statistics</h2>
      <p>
        Monitor network traffic and connections.
      </p>

      <h3>Network Metrics</h3>
      <ul>
        <li>Incoming/outgoing bandwidth</li>
        <li>Packets sent/received</li>
        <li>Active connections</li>
        <li>Connection states (ESTABLISHED, TIME_WAIT, etc.)</li>
        <li>Network errors and dropped packets</li>
      </ul>

      <h3>Network Monitoring Commands</h3>
      <CodeBlock
        code={`# Monitor network traffic
iftop -i eth0

# View active connections
ss -tuln

# Check network statistics
cat /proc/net/dev

# Monitor bandwidth in real-time
nload eth0`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Alert Configuration</h2>
      <p>
        Set up alerts to be notified when system resources exceed thresholds.
      </p>

      <h3>Alert Thresholds</h3>
      <CodeBlock
        code={`{
  "monitoring": {
    "alerts": {
      "cpu": {
        "warning": 70,
        "critical": 90,
        "duration": 300
      },
      "memory": {
        "warning": 75,
        "critical": 90,
        "duration": 300
      },
      "disk": {
        "warning": 80,
        "critical": 95,
        "duration": 0
      },
      "network": {
        "warning": 100,
        "critical": 500,
        "duration": 60
      }
    }
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
        showLineNumbers
      />

      <h3>Alert Channels</h3>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Description</th>
            <th>Setup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Browser</td>
            <td>Push notifications in browser</td>
            <td>Enable in settings</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Email notifications</td>
            <td>Configure SMTP</td>
          </tr>
          <tr>
            <td>Webhook</td>
            <td>HTTP POST to custom URL</td>
            <td>Set webhook URL</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>Slack channel notifications</td>
            <td>Add Slack webhook</td>
          </tr>
          <tr>
            <td>Discord</td>
            <td>Discord channel notifications</td>
            <td>Add Discord webhook</td>
          </tr>
        </tbody>
      </table>

      <h2>Historical Data</h2>
      <p>
        VPS Panel stores historical monitoring data for trend analysis:
      </p>

      <ul>
        <li>Last 24 hours: 5-minute intervals</li>
        <li>Last 7 days: 15-minute intervals</li>
        <li>Last 30 days: 1-hour intervals</li>
        <li>Last 12 months: 1-day intervals</li>
      </ul>

      <CodeBlock
        code={`# Configure data retention
{
  "monitoring": {
    "retention": {
      "hourly": 24,
      "daily": 7,
      "weekly": 30,
      "monthly": 365
    }
  }
}`}
        language="json"
        filename="/etc/vps-panel/config.json"
      />

      <h2>API Access</h2>
      <p>
        Access monitoring data programmatically via the REST API:
      </p>

      <CodeBlock
        code={`# Get current system status
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://panel.example.com/api/monitoring/status

# Get CPU history
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  "https://panel.example.com/api/monitoring/cpu?period=24h"

# Get memory history
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  "https://panel.example.com/api/monitoring/memory?period=7d"`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />
    </div>
  )
}
