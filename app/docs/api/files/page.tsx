'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function FileEndpointsPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">File Endpoints</h1>
        <p className="text-lg text-dark-300">
          API endpoints for file operations and management.
        </p>
      </div>

      <h2>List Files</h2>
      <p>
        List files and directories at a specified path.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/files/list?path=/var/www
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www",
    "items": [
      {
        "name": "example.com",
        "type": "directory",
        "size": 4096,
        "permissions": "drwxr-xr-x",
        "owner": "www-data",
        "modified": "2024-01-15T10:30:00Z"
      },
      {
        "name": "index.html",
        "type": "file",
        "size": 1024,
        "permissions": "-rw-r--r--",
        "owner": "www-data",
        "modified": "2024-01-14T15:45:00Z"
      }
    ],
    "total": 2
  }
}`}
        language="json"
        filename="Response"
        showLineNumbers
      />

      <h2>Get File Info</h2>
      <p>
        Get detailed information about a specific file or directory.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/files/info?path=/var/www/index.html
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "name": "index.html",
    "path": "/var/www/index.html",
    "type": "file",
    "size": 1024,
    "permissions": "-rw-r--r--",
    "owner": "www-data",
    "group": "www-data",
    "created": "2024-01-01T00:00:00Z",
    "modified": "2024-01-14T15:45:00Z",
    "accessed": "2024-01-15T10:30:00Z",
    "mime_type": "text/html",
    "encoding": "utf-8"
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Read File</h2>
      <p>
        Read the contents of a text file.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/files/read?path=/var/www/index.html
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/index.html",
    "content": "<!DOCTYPE html>\\n<html>\\n<head>...</head>\\n<body>...</body>\\n</html>",
    "size": 1024,
    "encoding": "utf-8",
    "truncated": false
  }
}`}
        language="json"
        filename="Response"
      />

      <h2>Write File</h2>
      <p>
        Write content to a file (creates or overwrites).
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/write
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "path": "/var/www/index.html",
  "content": "<!DOCTYPE html>\\n<html>\\n<head>...</head>\\n<body>...</body>\\n</html>",
  "permissions": "644",
  "create_dirs": true
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/index.html",
    "size": 1024,
    "permissions": "-rw-r--r--"
  },
  "message": "File written successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Upload File</h2>
      <p>
        Upload a file using multipart form data.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/upload
Authorization: Bearer YOUR_TOKEN
Content-Type: multipart/form-data

# Form fields:
- path: /var/www/uploads/
- file: (binary data)
- permissions: 644`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/uploads/image.png",
    "name": "image.png",
    "size": 1048576,
    "permissions": "-rw-r--r--"
  },
  "message": "File uploaded successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Download File</h2>
      <p>
        Download a file as a binary response.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`GET /api/files/download?path=/var/www/uploads/image.png
Authorization: Bearer YOUR_TOKEN`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`HTTP/1.1 200 OK
Content-Type: image/png
Content-Disposition: attachment; filename="image.png"
Content-Length: 1048576

(binary data)`}
        language="http"
        filename="Response"
      />

      <h2>Delete File</h2>
      <p>
        Delete a file or directory.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`DELETE /api/files/delete
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "path": "/var/www/old-file.txt",
  "recursive": false
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "message": "File deleted successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Create Directory</h2>
      <p>
        Create a new directory.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/mkdir
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "path": "/var/www/new-folder",
  "permissions": "755",
  "recursive": true
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/new-folder",
    "permissions": "drwxr-xr-x"
  },
  "message": "Directory created successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Move/Rename File</h2>
      <p>
        Move or rename a file or directory.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/move
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "source": "/var/www/old-name.txt",
  "destination": "/var/www/new-name.txt",
  "overwrite": false
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/new-name.txt"
  },
  "message": "File moved successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Copy File</h2>
      <p>
        Copy a file or directory.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/copy
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "source": "/var/www/original.txt",
  "destination": "/var/www/backup.txt",
  "recursive": true
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/backup.txt",
    "size": 1024
  },
  "message": "File copied successfully"
}`}
        language="json"
        filename="Response"
      />

      <h2>Change Permissions</h2>
      <p>
        Change file or directory permissions.
      </p>

      <h3>Request</h3>
      <CodeBlock
        code={`POST /api/files/chmod
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

{
  "path": "/var/www/script.sh",
  "permissions": "755",
  "recursive": false
}`}
        language="http"
        filename="Request"
      />

      <h3>Response</h3>
      <CodeBlock
        code={`{
  "success": true,
  "data": {
    "path": "/var/www/script.sh",
    "permissions": "-rwxr-xr-x"
  },
  "message": "Permissions changed successfully"
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
            <td><code>FILE_NOT_FOUND</code></td>
            <td>File or directory does not exist</td>
          </tr>
          <tr>
            <td><code>FILE_EXISTS</code></td>
            <td>File already exists (when overwrite is false)</td>
          </tr>
          <tr>
            <td><code>PERMISSION_DENIED</code></td>
            <td>Insufficient permissions</td>
          </tr>
          <tr>
            <td><code>INVALID_PATH</code></td>
            <td>Path is invalid or contains illegal characters</td>
          </tr>
          <tr>
            <td><code>FILE_TOO_LARGE</code></td>
            <td>File exceeds maximum upload size</td>
          </tr>
          <tr>
            <td><code>IS_DIRECTORY</code></td>
            <td>Expected file but got directory</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
