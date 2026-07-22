export default function DashboardPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-lg text-dark-300">
          The dashboard provides a comprehensive overview of your server's health and performance.
        </p>
      </div>

      <h2>Overview</h2>
      <p>
        The VPS Panel dashboard is your central hub for monitoring and managing your server.
        It displays real-time information about system resources, running services, and recent activity.
      </p>

      <h2>Dashboard Widgets</h2>

      <h3>System Information</h3>
      <ul>
        <li><strong>Hostname</strong> - Your server's hostname</li>
        <li><strong>Operating System</strong> - Linux distribution and version</li>
        <li><strong>Kernel</strong> - Running kernel version</li>
        <li><strong>Uptime</strong> - How long the server has been running</li>
        <li><strong>Load Average</strong> - 1, 5, and 15 minute load averages</li>
      </ul>

      <h3>CPU Usage</h3>
      <ul>
        <li>Real-time CPU utilization percentage</li>
        <li>Per-core usage breakdown</li>
        <li>CPU model and core count</li>
        <li>Temperature monitoring (if supported)</li>
      </ul>

      <h3>Memory Usage</h3>
      <ul>
        <li>RAM usage with used/available/free breakdown</li>
        <li>Swap usage</li>
        <li>Cached and buffered memory</li>
        <li>Memory usage history chart</li>
      </ul>

      <h3>Disk Usage</h3>
      <ul>
        <li>Usage by partition (/dev/sda1, etc.)</li>
        <li>Total, used, and available space</li>
        <li>Inode usage</li>
        <li>Read/write operations per second</li>
      </ul>

      <h3>Network Traffic</h3>
      <ul>
        <li>Incoming and outgoing bandwidth</li>
        <li>Real-time network activity graph</li>
        <li>Active connections count</li>
        <li>Network interface details</li>
      </ul>

      <h2>Real-time Monitoring</h2>
      <p>
        The dashboard updates in real-time using WebSocket connections. All metrics refresh
        every 5 seconds by default, with configurable intervals:
      </p>

      <ul>
        <li>Live CPU and memory graphs</li>
        <li>Network traffic visualization</li>
        <li>Service status indicators</li>
        <li>Active user sessions</li>
      </ul>

      <h2>Quick Actions</h2>
      <p>The dashboard provides quick access to common tasks:</p>
      <ul>
        <li><strong>Restart Services</strong> - One-click restart for common services</li>
        <li><strong>Clear Cache</strong> - Free up memory and disk space</li>
        <li><strong>Create Backup</strong> - Quick backup of critical data</li>
        <li><strong>View Logs</strong> - Access system and application logs</li>
        <li><strong>Terminal</strong> - Open web terminal session</li>
      </ul>

      <h2>Customization Options</h2>
      <p>Customize your dashboard view:</p>

      <h3>Widget Layout</h3>
      <ul>
        <li>Drag and drop widgets to rearrange</li>
        <li>Resize widgets to fit your needs</li>
        <li>Show or hide specific widgets</li>
        <li>Reset to default layout</li>
      </ul>

      <h3>Theme Settings</h3>
      <ul>
        <li>Dark mode (default)</li>
        <li>Light mode</li>
        <li>System preference detection</li>
        <li>Custom accent colors</li>
      </ul>

      <h3>Refresh Interval</h3>
      <ul>
        <li>1 second (real-time)</li>
        <li>5 seconds (default)</li>
        <li>15 seconds</li>
        <li>30 seconds</li>
        <li>Manual refresh only</li>
      </ul>

      <h2>Alert System</h2>
      <p>
        Configure alerts to notify you when system resources exceed thresholds:
      </p>

      <ul>
        <li><strong>CPU Alert</strong> - When CPU usage exceeds threshold</li>
        <li><strong>Memory Alert</strong> - When RAM usage is high</li>
        <li><strong>Disk Alert</strong> - When disk space is low</li>
        <li><strong>Service Alert</strong> - When a service goes down</li>
      </ul>

      <p>Alerts can be sent via:</p>
      <ul>
        <li>Browser notifications</li>
        <li>Email (if configured)</li>
        <li>Webhook (Slack, Discord, etc.)</li>
      </ul>

      <h2>Keyboard Shortcuts</h2>
      <table>
        <thead>
          <tr>
            <th>Shortcut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>R</code></td>
            <td>Refresh dashboard</td>
          </tr>
          <tr>
            <td><code>T</code></td>
            <td>Open terminal</td>
          </tr>
          <tr>
            <td><code>F</code></td>
            <td>Toggle fullscreen</td>
          </tr>
          <tr>
            <td><code>?</code></td>
            <td>Show keyboard shortcuts</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
