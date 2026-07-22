import { CodeBlock } from '@/components/CodeBlock'
import Link from 'next/link'

export default function IntroductionPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Introduction</h1>
        <p className="text-lg text-dark-300">
          Welcome to VPS Panel - a modern, feature-rich control panel for managing your VPS infrastructure.
        </p>
      </div>

      <h2>What is VPS Panel?</h2>
      <p>
        VPS Panel is a lightweight, self-hosted control panel designed for managing Linux VPS servers.
        It provides a beautiful web interface for all common server administration tasks, from monitoring
        system resources to managing databases and user accounts.
      </p>
      <p>
        Built with security and performance in mind, VPS Panel runs on minimal resources while providing
        enterprise-grade features. Whether you're a solo developer managing a single server or a team
        handling multiple VPS instances, VPS Panel scales to meet your needs.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Real-time Monitoring</strong> - CPU, memory, disk, and network usage with beautiful charts</li>
        <li><strong>User Management</strong> - Create users, manage SSH keys, configure sudo access</li>
        <li><strong>File Manager</strong> - Browse, upload, download, and edit files directly in the browser</li>
        <li><strong>Web Terminal</strong> - Full terminal access with split sessions and custom themes</li>
        <li><strong>Database Management</strong> - MySQL and PostgreSQL support with query editor</li>
        <li><strong>Service Control</strong> - Start, stop, and restart system services</li>
        <li><strong>Firewall Management</strong> - UFW-based firewall with IP blocking</li>
        <li><strong>Domain Management</strong> - Virtual hosts, SSL certificates, and DNS</li>
        <li><strong>Backup & Restore</strong> - Automated backups with one-click restore</li>
        <li><strong>REST API</strong> - Full API access for automation and integration</li>
      </ul>

      <h2>Supported Platforms</h2>
      <p>
        VPS Panel is designed for Linux servers and has been tested on the following distributions:
      </p>
      <table>
        <thead>
          <tr>
            <th>Operating System</th>
            <th>Version</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ubuntu</td>
            <td>20.04, 22.04, 24.04</td>
            <td><span className="text-green-400">Fully Supported</span></td>
          </tr>
          <tr>
            <td>Debian</td>
            <td>11, 12</td>
            <td><span className="text-green-400">Fully Supported</span></td>
          </tr>
          <tr>
            <td>CentOS</td>
            <td>7, 8, 9</td>
            <td><span className="text-green-400">Fully Supported</span></td>
          </tr>
          <tr>
            <td>AlmaLinux</td>
            <td>8, 9</td>
            <td><span className="text-green-400">Fully Supported</span></td>
          </tr>
          <tr>
            <td>Rocky Linux</td>
            <td>8, 9</td>
            <td><span className="text-yellow-400">Beta</span></td>
          </tr>
        </tbody>
      </table>

      <h2>Architecture Overview</h2>
      <div className="bg-dark-900 border border-dark-700/50 rounded-xl p-6 my-6 overflow-x-auto">
        <pre className="text-dark-200 font-mono text-sm">
{`┌─────────────────────────────────────────────────────────────┐
│                      Browser (Client)                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Dashboard   │  │  Terminal   │  │    File Manager     │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
└─────────┼────────────────┼─────────────────────┼────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Nginx Reverse Proxy                       │
│                  (SSL Termination)                           │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Node.js Backend                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  REST API   │  │   WebSocket │  │    Authentication   │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
└─────────┼────────────────┼─────────────────────┼────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐
│  System     │  │  Database   │  │    File System      │
│  Monitor    │  │  (SQLite)   │  │    Access           │
└─────────────┘  └─────────────┘  └─────────────────────┘`}
        </pre>
      </div>

      <h2>Technology Stack</h2>
      <p>
        VPS Panel is built with modern, battle-tested technologies:
      </p>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Technology</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontend</td>
            <td>React + Tailwind CSS</td>
            <td>User interface and styling</td>
          </tr>
          <tr>
            <td>Backend</td>
            <td>Node.js + Express</td>
            <td>API server and business logic</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>SQLite</td>
            <td>Configuration and user data</td>
          </tr>
          <tr>
            <td>Terminal</td>
            <td>xterm.js + node-pty</td>
            <td>Web-based terminal emulation</td>
          </tr>
          <tr>
            <td>Web Server</td>
            <td>Nginx</td>
            <td>Reverse proxy and static files</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>JWT + bcrypt</td>
            <td>Authentication and encryption</td>
          </tr>
        </tbody>
      </table>

      <h2>Next Steps</h2>
      <p>Ready to get started? Check out our installation guide:</p>
      <div className="flex gap-4 mt-6">
        <Link
          href="/docs/getting-started/installation"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Installation Guide →
        </Link>
        <Link
          href="/docs/getting-started/quick-start"
          className="inline-flex items-center gap-2 bg-dark-800 hover:bg-dark-700 text-dark-200 px-4 py-2 rounded-lg font-medium transition-colors border border-dark-700"
        >
          Quick Start →
        </Link>
      </div>
    </div>
  )
}
