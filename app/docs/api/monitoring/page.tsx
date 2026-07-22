'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function MonitoringEndpointsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Monitoring Endpoints</h1>
        <p className="text-lg text-dark-300">
          API endpoints for system monitoring and real-time data.
        </p>
      </div>

      <h2>Get Current Status</h2>
      <p>
        Get the current system status snapshot.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/status
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "timestamp": "2024-01-15T12:00:00Z",
    "cpu": {
      "usage": 35.2,
      "cores": 4,
      "temperature": 45
    },
    "memory": {
      "used": 4294967296,
      "total": 8589934592,
      "percentage": 50
    },
    "disk": {
      "used": 32212254720,
      "total": 107374182400,
      "percentage": 30
    },
    "network": {
      "rx_speed": 1048576,
      "tx_speed": 524288
    },
    "uptime": 864000,
    "load_average": [0.52, 0.48, 0.45]
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h2>Get CPU History</h2>
      <p>
        Get historical CPU usage data.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/cpu?period=24h&interval=5m
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Parameters</h3>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>period</code></td>
            <td>string</td>
            <td>24h</td>
            <td>Time period (1h, 24h, 7d, 30d)</td>
          </tr>
          <tr>
            <td><code>interval</code></td>
            <td>string</td>
            <td>5m</td>
            <td>Data interval (1m, 5m, 15m, 1h)</td>
          </tr>
        </tbody>
      </table>

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "period": "24h",
    "interval": "5m",
    "points": [
      { "timestamp": "2024-01-15T00:00:00Z", "usage": 25.3 },
      { "timestamp": "2024-01-15T00:05:00Z", "usage": 28.1 },
      { "timestamp": "2024-01-15T00:10:00Z", "usage": 32.5 },
      { "timestamp": "2024-01-15T00:15:00Z", "usage": 29.8 }
    ],
    "statistics": {
      "min": 15.2,
      "max": 85.3,
      "avg": 35.2,
      "current": 35.2
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Memory History</h2>
      <p>
        Get historical memory usage data.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/memory?period=24h
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "period": "24h",
    "points": [
      { "timestamp": "2024-01-15T00:00:00Z", "used": 3221225472, "cached": 1073741824 },
      { "timestamp": "2024-01-15T00:05:00Z", "used": 3355443200, "cached": 1140850688 },
      { "timestamp": "2024-01-15T00:10:00Z", "used": 3489660928, "cached": 1207959552 }
    ],
    "statistics": {
      "used_min": 2147483648,
      "used_max": 6442450944,
      "used_avg": 4294967296,
      "cached_avg": 1610612736
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Disk History</h2>
      <p>
        Get historical disk usage data.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/disk?period=7d
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "period": "7d",
    "partitions": [
      {
        "device": "/dev/sda1",
        "mount": "/",
        "points": [
          { "timestamp": "2024-01-09T00:00:00Z", "used": 30064771072 },
          { "timestamp": "2024-01-10T00:00:00Z", "used": 30534539264 },
          { "timestamp": "2024-01-11T00:00:00Z", "used": 31004307456 }
        ]
      }
    ],
    "io_history": [
      { "timestamp": "2024-01-15T00:00:00Z", "read_bytes": 104857600, "write_bytes": 52428800 },
      { "timestamp": "2024-01-15T00:05:00Z", "read_bytes": 209715200, "write_bytes": 104857600 }
    ]
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Network History</h2>
      <p>
        Get historical network traffic data.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/network?period=24h
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "period": "24h",
    "interfaces": [
      {
        "name": "eth0",
        "points": [
          { "timestamp": "2024-01-15T00:00:00Z", "rx_bytes": 104857600, "tx_bytes": 52428800 },
          { "timestamp": "2024-01-15T00:05:00Z", "rx_bytes": 209715200, "tx_bytes": 104857600 }
        ]
      }
    ],
    "statistics": {
      "total_rx": 10737418240,
      "total_tx": 5368709120,
      "rx_speed_avg": 1048576,
      "tx_speed_avg": 524288
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>WebSocket Streaming</h2>
      <p>
        Get real-time monitoring data via WebSocket connection.
      </p>

      <h3>Connection</h3>
      <CodeBlock
        code={`ws://panel.example.com/ws/monitoring
Authorization: Bearer YOUR_TOKEN`}
        language="text"
        filename="WebSocket URL"
      />

      <h3>Subscribe to Updates</h3>
      <CodeBlock
        code={`{
  "action": "subscribe",
  "channels": ["cpu", "memory", "disk", "network"],
  "interval": 5000
}`}
        language="json"
        filename="Subscribe Message"
      />

      <h3>Receive Updates</h3>
      <CodeBlock
        code={`{
  "channel": "cpu",
  "data": {
    "usage": 35.2,
    "cores": [42.1, 28.3, 38.7, 31.5],
    "timestamp": "2024-01-15T12:00:00Z"
  }
}`}
        language="json"
        filename="Update Message"
      />

      <h3>Unsubscribe</h3>
      <CodeBlock
        code={`{
  "action": "unsubscribe",
  "channels": ["cpu"]
}`}
        language="json"
        filename="Unsubscribe Message"
      />

      <h2>Get Alerts</h2>
      <p>
        Get active system alerts.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/monitoring/alerts
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "alerts": [
      {
        "id": 1,
        "type": "warning",
        "category": "cpu",
        "message": "CPU usage exceeded 80%",
        "value": 85.3,
        "threshold": 80,
        "timestamp": "2024-01-15T11:30:00Z",
        "acknowledged": false
      },
      {
        "id": 2,
        "type": "critical",
        "category": "disk",
        "message": "Disk usage exceeded 95%",
        "value": 96.2,
        "threshold": 95,
        "timestamp": "2024-01-15T10:00:00Z",
        "acknowledged": true
      }
    ],
    "total": 2
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Acknowledge Alert</h2>
      <p>
        Mark an alert as acknowledged.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/monitoring/alerts/:id/acknowledge
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "message": "Alert acknowledged"
}`}
        language="json"
        filename="Response"
      />

      <h2>Error Codes</h2>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>INVALID_PERIOD</code></td>
            <td>Invalid time period specified</td>
          </tr>
          <tr>
            <td><code>DATA_UNAVAILABLE</code></td>
            <td>Monitoring data not available for requested period</td>
          </tr>
          <tr>
            <td><code>ALERT_NOT_FOUND</code></td>
            <td>Specified alert does not exist</td>
          </tr>
          <tr>
            <td><code>WEBSOCKET_ERROR</code></td>
            <td>WebSocket connection error</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
