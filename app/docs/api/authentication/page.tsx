import { CodeBlock } from '@/components/CodeBlock'

export default function AuthenticationPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Authentication</h1>
        <p className="text-lg text-dark-300">
          JWT token authentication for secure API access.
        </p>
      </div>

      <h2>Overview</h2>
      <p>
        VPS Panel uses JSON Web Tokens (JWT) for API authentication. All API requests
        must include a valid JWT token in the Authorization header.
      </p>

      <h2>Login Endpoint</h2>
      <p>
        Obtain a JWT token by authenticating with your credentials.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "your-password"
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 86400,
    "token_type": "Bearer",
    "user": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "role": "admin"
    }
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h3>Error Response</h3>
      <CodeBlock
        code={`{
  "success": false,
  "error": {
    "code": "AUTH_INVALID_CREDENTIALS",
    "message": "Invalid username or password"
  }
}`}
        language="json"
        filename="Error Response"
      />

      <h2>Using the Token</h2>
      <p>
        Include the JWT token in the Authorization header for all API requests:
      </p>

      <CodeBlock
        code={`GET /api/system/status
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json`}
        language="http"
        filename="Request with Token"
      />

      <h2>Token Refresh</h2>
      <p>
        When your token expires, use the refresh token to obtain a new access token:
      </p>

      <h3>Refresh Request</h3>
      <CodeBlock
        code={`POST /api/auth/refresh
Content-Type: application/json

{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
        language="http"
        filename="Refresh Request"
      />

      <h3>Refresh Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 86400
  }
}`}
        language="json"
        filename="Refresh Response"
      />

      <h2>Token Expiration</h2>
      <table>
        <thead>
          <tr>
            <th>Token Type</th>
            <th>Default Expiry</th>
            <th>Renewable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access Token</td>
            <td>24 hours</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Refresh Token</td>
            <td>7 days</td>
            <td>No (must re-login)</td>
          </tr>
        </tbody>
      </table>

      <h2>Logout</h2>
      <p>
        Invalidate your current token by calling the logout endpoint:
      </p>

      <CodeBlock
        code={`POST /api/auth/logout
Authorization: Bearer YOUR_TOKEN

# Response
{
  "success": true,
  "message": "Logged out successfully"
}`}
        language="http"
        filename="Logout Request"
      />

      <h2>Error Responses</h2>

      <h3>Missing Token</h3>
      <CodeBlock
        code={`{
  "success": false,
  "error": {
    "code": "AUTH_TOKEN_MISSING",
    "message": "Authorization token is required"
  }
}`}
        language="json"
        filename="Error Response"
      />

      <h3>Invalid Token</h3>
      <CodeBlock
        code={`{
  "success": false,
  "error": {
    "code": "AUTH_TOKEN_INVALID",
    "message": "Invalid or expired token"
  }
}`}
        language="json"
        filename="Error Response"
      />

      <h3>Insufficient Permissions</h3>
      <CodeBlock
        code={`{
  "success": false,
  "error": {
    "code": "AUTH_INSUFFICIENT_PERMISSIONS",
    "message": "You do not have permission to perform this action"
  }
}`}
        language="json"
        filename="Error Response"
      />

      <h2>Rate Limiting</h2>
      <p>
        API endpoints are rate-limited to prevent abuse:
      </p>

      <table>
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Limit</th>
            <th>Window</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Login</td>
            <td>5 requests</td>
            <td>1 minute</td>
          </tr>
          <tr>
            <td>Refresh Token</td>
            <td>10 requests</td>
            <td>1 minute</td>
          </tr>
          <tr>
            <td>General API</td>
            <td>100 requests</td>
            <td>1 minute</td>
          </tr>
        </tbody>
      </table>

      <h3>Rate Limit Headers</h3>
      <CodeBlock
        code={`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200`}
        language="text"
        filename="Rate Limit Headers"
      />

      <h2>Security Best Practices</h2>
      <ul>
        <li>Store tokens securely (not in localStorage for production)</li>
        <li>Use HTTPS for all API calls</li>
        <li>Implement token refresh before expiry</li>
        <li>Revoke tokens on logout</li>
        <li>Use short-lived access tokens</li>
        <li>Monitor for suspicious activity</li>
      </ul>

      <h2>Example Usage</h2>

      <h3>cURL</h3>
      <CodeBlock
        code={`# Login
curl -X POST https://panel.example.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"your-password"}'

# Use token
curl https://panel.example.com/api/system/status \\
  -H "Authorization: Bearer YOUR_TOKEN"`}
        language="bash"
        filename="cURL Examples"
        showLineNumbers
      />

      <h3>JavaScript (Fetch)</h3>
      <CodeBlock
        code={`// Login
const loginResponse = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: 'your-password' })
});

const { data } = await loginResponse.json();
const token = data.token;

// Use token
const statusResponse = await fetch('/api/system/status', {
  headers: { 'Authorization': \`Bearer \${token}\` }
});`}
        language="javascript"
        filename="JavaScript Example"
        showLineNumbers
      />
    </div>
  )
}
