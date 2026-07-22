import { CodeBlock } from '@/components/CodeBlock'

export default function UserEndpointsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">User Endpoints</h1>
        <p className="text-lg text-dark-300">
          API endpoints for user management operations.
        </p>
      </div>

      <h2>List Users</h2>
      <p>
        Retrieve a list of all users on the system.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/users
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "users": [
      {
        "id": 1,
        "username": "admin",
        "email": "admin@example.com",
        "role": "admin",
        "sudo": true,
        "created_at": "2024-01-01T00:00:00Z",
        "last_login": "2024-01-15T10:30:00Z",
        "ssh_keys": 2
      },
      {
        "id": 2,
        "username": "john",
        "email": "john@example.com",
        "role": "user",
        "sudo": false,
        "created_at": "2024-01-10T00:00:00Z",
        "last_login": "2024-01-14T15:45:00Z",
        "ssh_keys": 1
      }
    ],
    "total": 2
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h2>Get User</h2>
      <p>
        Retrieve details for a specific user.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/users/:id
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "full_name": "Administrator",
    "role": "admin",
    "sudo": true,
    "shell": "/bin/bash",
    "home_dir": "/home/admin",
    "created_at": "2024-01-01T00:00:00Z",
    "last_login": "2024-01-15T10:30:00Z",
    "ssh_keys": [
      {
        "id": 1,
        "name": "My Laptop",
        "fingerprint": "aa:bb:cc:dd:ee:ff",
        "created_at": "2024-01-01T00:00:00Z"
      }
    ],
    "permissions": {
      "dashboard": "full",
      "users": "full",
      "files": "full",
      "terminal": "full",
      "services": "full",
      "databases": "full",
      "domains": "full",
      "firewall": "full",
      "backups": "full"
    }
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h2>Create User</h2>
      <p>
        Create a new user account.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/users
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "secure-password-123",
  "full_name": "New User",
  "role": "user",
  "sudo": false,
  "shell": "/bin/bash"
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 3,
    "username": "newuser",
    "email": "newuser@example.com",
    "full_name": "New User",
    "role": "user",
    "sudo": false,
    "created_at": "2024-01-15T12:00:00Z"
  },
  "message": "User created successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Update User</h2>
      <p>
        Update an existing user's information.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`PUT /api/users/:id
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "email": "updated@example.com",
  "full_name": "Updated Name",
  "role": "admin",
  "sudo": true
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "id": 2,
    "username": "john",
    "email": "updated@example.com",
    "full_name": "Updated Name",
    "role": "admin",
    "sudo": true,
    "updated_at": "2024-01-15T12:30:00Z"
  },
  "message": "User updated successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Delete User</h2>
      <p>
        Remove a user account from the system.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`DELETE /api/users/:id
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "message": "User deleted successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Change Password</h2>
      <p>
        Change a user's password.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/users/:id/password
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "current_password": "old-password",
  "new_password": "new-password-123"
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "message": "Password changed successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>SSH Key Management</h2>

      <h3>Add SSH Key</h3>
      <CodeBlock
        code={`POST /api/users/:id/ssh-keys
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "name": "My Laptop",
  "key": "ssh-rsa AAAA..."
}

# Response
{
  "success": true,
  "data": {
    "id": 3,
    "name": "My Laptop",
    "fingerprint": "aa:bb:cc:dd:ee:ff",
    "created_at": "2024-01-15T12:00:00Z"
  }
}`}
        language="http"
        filename="Add SSH Key"
      />

      <h3>List SSH Keys</h3>
      <CodeBlock
        code={`GET /api/users/:id/ssh-keys
Authorization: Bearer YOUR_TOKEN

# Response
{
  "success": true,
  "data": {
    "keys": [
      {
        "id": 1,
        "name": "My Laptop",
        "fingerprint": "aa:bb:cc:dd:ee:ff",
        "created_at": "2024-01-01T00:00:00Z"
      }
    ]
  }
}`}
        language="http"
        filename="List SSH Keys"
      />

      <h3>Delete SSH Key</h3>
      <CodeBlock
        code={`DELETE /api/users/:id/ssh-keys/:keyId
Authorization: Bearer YOUR_TOKEN

# Response
{
  "success": true,
  "message": "SSH key deleted successfully"
}`}
        language="http"
        filename="Delete SSH Key"
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
            <td><code>USER_NOT_FOUND</code></td>
            <td>User with specified ID does not exist</td>
          </tr>
          <tr>
            <td><code>USER_EXISTS</code></td>
            <td>Username or email already in use</td>
          </tr>
          <tr>
            <td><code>INVALID_PASSWORD</code></td>
            <td>Password does not meet requirements</td>
          </tr>
          <tr>
            <td><code>PERMISSION_DENIED</code></td>
            <td>Insufficient permissions</td>
          </tr>
          <tr>
            <td><code>CANNOT_DELETE_SELF</code></td>
            <td>Cannot delete your own account</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
