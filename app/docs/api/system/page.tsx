import { CodeBlock } from '@/components/CodeBlock'

export default function SystemEndpointsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">System Endpoints</h1>
        <p className="text-lg text-dark-300">
          API endpoints for system information, status, and configuration.
        </p>
      </div>

      <h2>Get System Status</h2>
      <p>
        Retrieve current system status including uptime, load, and resource usage.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/status
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "hostname": "vps-server",
    "os": "Ubuntu 22.04 LTS",
    "kernel": "5.15.0-91-generic",
    "uptime": 864000,
    "load_average": {
      "1min": 0.52,
      "5min": 0.48,
      "15min": 0.45
    },
    "cpu": {
      "model": "Intel Xeon E5-2680 v4",
      "cores": 4,
      "usage": 35.2,
      "temperature": 45
    },
    "memory": {
      "total": 8589934592,
      "used": 4294967296,
      "free": 4294967296,
      "cached": 2147483648,
      "swap_total": 2147483648,
      "swap_used": 0
    },
    "disk": {
      "total": 107374182400,
      "used": 32212254720,
      "available": 75161927680,
      "percentage": 30
    },
    "network": {
      "interfaces": [
        {
          "name": "eth0",
          "ip": "192.168.1.100",
          "rx_bytes": 1073741824,
          "tx_bytes": 536870912
        }
      ]
    }
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h2>Get System Info</h2>
      <p>
        Retrieve static system information.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/info
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "hostname": "vps-server",
    "domain": "panel.example.com",
    "ip_addresses": ["192.168.1.100", "10.0.0.1"],
    "os": {
      "name": "Ubuntu",
      "version": "22.04 LTS",
      "codename": "jammy"
    },
    "kernel": "5.15.0-91-generic",
    "architecture": "x86_64",
    "timezone": "UTC",
    "panel_version": "1.0.0"
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get CPU Usage</h2>
      <p>
        Get detailed CPU usage information.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/cpu
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "overall": 35.2,
    "cores": [
      { "core": 0, "usage": 42.1 },
      { "core": 1, "usage": 28.3 },
      { "core": 2, "usage": 38.7 },
      { "core": 3, "usage": 31.5 }
    ],
    "frequency": {
      "current": 2400,
      "min": 1200,
      "max": 3200
    },
    "temperature": 45,
    "processes": {
      "total": 156,
      "running": 2,
      "sleeping": 154
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Memory Usage</h2>
      <p>
        Get detailed memory usage information.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/memory
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "ram": {
      "total": 8589934592,
      "used": 4294967296,
      "free": 4294967296,
      "cached": 2147483648,
      "buffers": 536870912,
      "percentage": 50
    },
    "swap": {
      "total": 2147483648,
      "used": 0,
      "free": 2147483648,
      "percentage": 0
    },
    "top_processes": [
      { "name": "node", "pid": 1234, "memory": 256000000 },
      { "name": "nginx", "pid": 567, "memory": 50000000 },
      { "name": "mysql", "pid": 890, "memory": 128000000 }
    ]
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Disk Usage</h2>
      <p>
        Get disk usage information for all mounted partitions.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/disk
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "partitions": [
      {
        "device": "/dev/sda1",
        "mount": "/",
        "total": 107374182400,
        "used": 32212254720,
        "available": 75161927680,
        "percentage": 30,
        "filesystem": "ext4"
      },
      {
        "device": "/dev/sda2",
        "mount": "/boot",
        "total": 1073741824,
        "used": 107374182,
        "available": 966367642,
        "percentage": 10,
        "filesystem": "ext4"
      }
    ],
    "io": {
      "read_bytes": 1073741824,
      "write_bytes": 536870912,
      "read_ops": 50000,
      "write_ops": 25000
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Network Usage</h2>
      <p>
        Get network interface statistics.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/network
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "interfaces": [
      {
        "name": "eth0",
        "mac": "00:1a:2b:3c:4d:5e",
        "ip": "192.168.1.100",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "speed": 1000,
        "rx_bytes": 1073741824,
        "tx_bytes": 536870912,
        "rx_packets": 1500000,
        "tx_packets": 750000,
        "rx_errors": 0,
        "tx_errors": 0,
        "rx_dropped": 0,
        "tx_dropped": 0
      }
    ],
    "connections": {
      "established": 125,
      "time_wait": 45,
      "close_wait": 12
    }
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Get Services Status</h2>
      <p>
        Get status of all managed services.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/system/services
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "services": [
      {
        "name": "nginx",
        "status": "active",
        "description": "A high performance web server",
        "uptime": 864000,
        "pid": 1234,
        "memory": 50000000
      },
      {
        "name": "mysql",
        "status": "active",
        "description": "MySQL database server",
        "uptime": 864000,
        "pid": 567,
        "memory": 256000000
      },
      {
        "name": "ssh",
        "status": "active",
        "description": "OpenBSD Secure Shell server",
        "uptime": 864000,
        "pid": 890,
        "memory": 8000000
      }
    ]
  }
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
            <td><code>SYSTEM_ERROR</code></td>
            <td>Failed to retrieve system information</td>
          </tr>
          <tr>
            <td><code>SYSTEM_UNAVAILABLE</code></td>
            <td>System information temporarily unavailable</td>
          </tr>
          <tr>
            <td><code>PERMISSION_DENIED</code></td>
            <td>Insufficient permissions to view system info</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
