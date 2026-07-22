'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function UserManagementPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">User Management</h1>
        <p className="text-lg text-dark-300">
          Create and manage users with sudo access, SSH keys, and granular permissions.
        </p>
      </div>

      <h2>Creating Users</h2>
      <p>
        VPS Panel allows you to create system users with various access levels.
      </p>

      <h3>Using the Web Interface</h3>
      <ol>
        <li>Navigate to "Users" in the sidebar</li>
        <li>Click "Add User"</li>
        <li>Fill in the required information:
          <ul>
            <li><strong>Username</strong> - System username (alphanumeric, no spaces)</li>
            <li><strong>Email</strong> - Email address for notifications</li>
            <li><strong>Password</strong> - Strong password (min 12 characters)</li>
            <li><strong>Full Name</strong> - User's display name</li>
          </ul>
        </li>
        <li>Configure permissions and access level</li>
        <li>Click "Create User"</li>
      </ol>

      <h3>Using the CLI</h3>
      <CodeBlock
        code={`# Create a new user
vps-panel user create john --email john@example.com

# Create with sudo access
vps-panel user create john --email john@example.com --sudo

# Create with SSH key
vps-panel user create john --email john@example.com \\
  --ssh-key "ssh-rsa AAAA..."`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Sudo Access</h2>
      <p>
        Grant users administrative privileges with sudo access:
      </p>

      <h3>Access Levels</h3>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Permissions</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>admin</code></td>
            <td>Full access</td>
            <td>Complete system administration</td>
          </tr>
          <tr>
            <td><code>sudo</code></td>
            <td>Root access</td>
            <td>Can run commands as root</td>
          </tr>
          <tr>
            <td><code>user</code></td>
            <td>Limited</td>
            <td>Standard user permissions</td>
          </tr>
          <tr>
            <td><code>viewer</code></td>
            <td>Read-only</td>
            <td>Can view but not modify</td>
          </tr>
        </tbody>
      </table>

      <h3>Managing Sudo Access</h3>
      <CodeBlock
        code={`# Grant sudo access
vps-panel user sudo john enable

# Revoke sudo access
vps-panel user sudo john disable

# Check sudo status
vps-panel user info john --sudo`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>SSH Key Management</h2>
      <p>
        Manage SSH keys for secure passwordless authentication:
      </p>

      <h3>Adding SSH Keys</h3>
      <CodeBlock
        code={`# Add SSH key via CLI
vps-panel user ssh-key add john \\
  --key "ssh-rsa AAAA..." \\
  --name "My Laptop"

# List user's SSH keys
vps-panel user ssh-key list john

# Remove SSH key
vps-panel user ssh-key remove john --key-id 123`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h3>Web Interface</h3>
      <ol>
        <li>Go to "Users" → Select user</li>
        <li>Click "SSH Keys" tab</li>
        <li>Click "Add Key"</li>
        <li>Paste your public key</li>
        <li>Give it a descriptive name</li>
        <li>Click "Save"</li>
      </ol>

      <h2>User Permissions</h2>
      <p>
        Configure granular permissions for each user:
      </p>

      <h3>Permission Categories</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dashboard</td>
            <td>View system stats, view alerts</td>
          </tr>
          <tr>
            <td>Users</td>
            <td>Create, edit, delete users</td>
          </tr>
          <tr>
            <td>Files</td>
            <td>Browse, upload, download, edit, delete</td>
          </tr>
          <tr>
            <td>Terminal</td>
            <td>Access web terminal</td>
          </tr>
          <tr>
            <td>Services</td>
            <td>Start, stop, restart services</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>Create, manage databases</td>
          </tr>
          <tr>
            <td>Domains</td>
            <td>Add, configure domains</td>
          </tr>
          <tr>
            <td>Firewall</td>
            <td>Manage firewall rules</td>
          </tr>
          <tr>
            <td>Backups</td>
            <td>Create, restore backups</td>
          </tr>
          <tr>
            <td>Settings</td>
            <td>Modify panel settings</td>
          </tr>
        </tbody>
      </table>

      <h3>Setting Permissions</h3>
      <CodeBlock
        code={`# Set user permissions
vps-panel user permissions set john \\
  --dashboard view \\
  --files full \\
  --terminal view \\
  --services none \\
  --database view

# View current permissions
vps-panel user permissions get john`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>User Sessions</h2>
      <p>
        Monitor and manage active user sessions:
      </p>

      <ul>
        <li>View all active sessions</li>
        <li>See login time and IP address</li>
        <li>Terminate specific sessions</li>
        <li>Force logout all sessions</li>
      </ul>

      <CodeBlock
        code={`# List active sessions
vps-panel user sessions list

# Terminate a specific session
vps-panel user sessions kill --session-id abc123

# Force logout all sessions for a user
vps-panel user sessions kill-all john`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>API User Management</h2>
      <CodeBlock
        code={`# Create user via API
curl -X POST https://panel.example.com/api/users \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "john",
    "email": "john@example.com",
    "password": "secure-password",
    "sudo": true
  }'

# List users
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://panel.example.com/api/users`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />
    </div>
  )
}
