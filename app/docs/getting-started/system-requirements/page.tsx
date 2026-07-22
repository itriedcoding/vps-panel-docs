import { CodeBlock } from '@/components/CodeBlock'

export default function SystemRequirementsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">System Requirements</h1>
        <p className="text-lg text-dark-300">
          Ensure your server meets the minimum requirements before installing VPS Panel.
        </p>
      </div>

      <h2>Minimum Hardware Specifications</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CPU</td>
            <td>1 vCPU</td>
            <td>2+ vCPU</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>512 MB</td>
            <td>2 GB+</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>10 GB</td>
            <td>25 GB+</td>
          </tr>
          <tr>
            <td>Network</td>
            <td>100 Mbps</td>
            <td>1 Gbps</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
        <p className="text-yellow-200">
          ⚠️ While VPS Panel can run on 512 MB RAM, we recommend at least 2 GB for optimal
          performance, especially with multiple users and services.
        </p>
      </div>

      <h2>Supported Operating Systems</h2>
      <p>VPS Panel has been tested and verified on the following Linux distributions:</p>
      
      <table>
        <thead>
          <tr>
            <th>Distribution</th>
            <th>Version</th>
            <th>Architecture</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ubuntu</td>
            <td>20.04 LTS</td>
            <td>x86_64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>Ubuntu</td>
            <td>22.04 LTS</td>
            <td>x86_64, ARM64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>Ubuntu</td>
            <td>24.04 LTS</td>
            <td>x86_64, ARM64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>Debian</td>
            <td>11 (Bullseye)</td>
            <td>x86_64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>Debian</td>
            <td>12 (Bookworm)</td>
            <td>x86_64, ARM64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>CentOS</td>
            <td>7</td>
            <td>x86_64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>CentOS Stream</td>
            <td>8, 9</td>
            <td>x86_64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>AlmaLinux</td>
            <td>8, 9</td>
            <td>x86_64, ARM64</td>
            <td><span className="text-green-400">✓ Fully Supported</span></td>
          </tr>
          <tr>
            <td>Rocky Linux</td>
            <td>8, 9</td>
            <td>x86_64</td>
            <td><span className="text-yellow-400">⚡ Beta</span></td>
          </tr>
        </tbody>
      </table>

      <h2>Required Ports</h2>
      <p>The following ports must be accessible for VPS Panel to function properly:</p>
      
      <table>
        <thead>
          <tr>
            <th>Port</th>
            <th>Protocol</th>
            <th>Purpose</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>22</code></td>
            <td>TCP</td>
            <td>SSH access</td>
            <td><span className="text-green-400">Yes</span></td>
          </tr>
          <tr>
            <td><code>80</code></td>
            <td>TCP</td>
            <td>HTTP (redirects to HTTPS)</td>
            <td><span className="text-green-400">Yes</span></td>
          </tr>
          <tr>
            <td><code>443</code></td>
            <td>TCP</td>
            <td>HTTPS (panel access)</td>
            <td><span className="text-green-400">Yes</span></td>
          </tr>
          <tr>
            <td><code>8080</code></td>
            <td>TCP</td>
            <td>Panel direct access (if no domain)</td>
            <td><span className="text-yellow-400">Optional</span></td>
          </tr>
          <tr>
            <td><code>3306</code></td>
            <td>TCP</td>
            <td>MySQL (if using database feature)</td>
            <td><span className="text-yellow-400">Optional</span></td>
          </tr>
          <tr>
            <td><code>5432</code></td>
            <td>TCP</td>
            <td>PostgreSQL (if using database feature)</td>
            <td><span className="text-yellow-400">Optional</span></td>
          </tr>
        </tbody>
      </table>

      <h2>Network Requirements</h2>
      <ul>
        <li><strong>Inbound:</strong> Ports 22, 80, 443 (and optionally 8080)</li>
        <li><strong>Outbound:</strong> Standard HTTP/HTTPS for package updates</li>
        <li><strong>DNS:</strong> Reliable DNS resolution for domain features</li>
        <li><strong>Bandwidth:</strong> At least 1 TB monthly transfer recommended</li>
      </ul>

      <h2>Disk Space Recommendations</h2>
      <table>
        <thead>
          <tr>
            <th>Usage</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Panel Only</td>
            <td>500 MB</td>
            <td>2 GB</td>
          </tr>
          <tr>
            <td>Panel + 1 Website</td>
            <td>5 GB</td>
            <td>20 GB</td>
          </tr>
          <tr>
            <td>Panel + Multiple Sites</td>
            <td>20 GB</td>
            <td>50 GB+</td>
          </tr>
          <tr>
            <td>With Backups</td>
            <td>Double your data</td>
            <td>3x your data</td>
          </tr>
        </tbody>
      </table>

      <h2>Checking Your System</h2>
      <p>
        Use these commands to verify your system meets the requirements:
      </p>

      <CodeBlock
        code={`# Check CPU
lscpu | grep "CPU(s):"

# Check RAM
free -h

# Check disk space
df -h

# Check OS
cat /etc/os-release

# Check kernel version
uname -r

# Check available ports
ss -tuln | grep -E ':(80|443|8080) '`}
        language="bash"
        filename="System Check Commands"
        showLineNumbers
      />

      <h2>Unsupported Environments</h2>
      <p>
        VPS Panel is designed for Linux servers and is <strong>not compatible</strong> with:
      </p>
      <ul>
        <li>Windows Server</li>
        <li>macOS (except for development)</li>
        <li>Container-only environments (Docker, LXC without systemd)</li>
        <li>Shared hosting environments</li>
        <li>FreeBSD or other BSD variants</li>
      </ul>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Need help?</strong> If you're unsure whether your server is compatible,
          check our <a href="/docs/guides/troubleshooting" className="underline">troubleshooting guide</a> or
          open an issue on GitHub.
        </p>
      </div>
    </div>
  )
}
