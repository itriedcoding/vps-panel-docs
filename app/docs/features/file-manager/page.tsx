export default function FileManagerPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">File Manager</h1>
        <p className="text-lg text-dark-300">
          Browse, upload, download, and edit files directly in your browser.
        </p>
      </div>

      <h2>Browsing Files</h2>
      <p>
        The file manager provides a familiar tree-based interface for navigating your server's
        file system.
      </p>

      <h3>Navigation Features</h3>
      <ul>
        <li>Click folders to expand/collapse</li>
        <li>Use breadcrumb navigation for quick access</li>
        <li>Keyboard navigation (arrow keys)</li>
        <li>Search files and folders</li>
        <li>Sort by name, size, date, or type</li>
      </ul>

      <h3>Path Bar</h3>
      <p>
        Click on the path bar to type a direct path. This is useful for quickly navigating
        to specific directories:
      </p>
      <ul>
        <li><code>/var/www</code> - Web files</li>
        <li><code>/etc/nginx</code> - Nginx configuration</li>
        <li><code>/var/log</code> - System logs</li>
        <li><code>/home</code> - User home directories</li>
      </ul>

      <h2>Upload and Download</h2>

      <h3>Uploading Files</h3>
      <ul>
        <li><strong>Drag and Drop</strong> - Drag files from your computer</li>
        <li><strong>Click Upload</strong> - Use the upload button</li>
        <li><strong>Paste</strong> - Paste files from clipboard</li>
        <li><strong>Multiple Files</strong> - Upload multiple files at once</li>
        <li><strong>Folder Upload</strong> - Upload entire folders</li>
      </ul>

      <h3>Downloading Files</h3>
      <ul>
        <li>Click the download icon next to any file</li>
        <li>Right-click for context menu options</li>
        <li>Select multiple files for bulk download</li>
        <li>Download as ZIP archive</li>
      </ul>

      <h2>File Editing</h2>
      <p>
        Built-in text editor for quick file modifications:
      </p>

      <h3>Editor Features</h3>
      <ul>
        <li><strong>Syntax Highlighting</strong> - Support for 50+ languages</li>
        <li><strong>Line Numbers</strong> - Easy code navigation</li>
        <li><strong>Find and Replace</strong> - Quick text search</li>
        <li><strong>Auto Save</strong> - Automatic saving every 30 seconds</li>
        <li><strong>Word Wrap</strong> - Toggle word wrapping</li>
        <li><strong>Tab Size</strong> - Configurable indentation</li>
      </ul>

      <h3>Supported File Types</h3>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Extensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web</td>
            <td><code>.html</code>, <code>.css</code>, <code>.js</code>, <code>.jsx</code>, <code>.tsx</code>, <code>.vue</code></td>
          </tr>
          <tr>
            <td>Backend</td>
            <td><code>.php</code>, <code>.py</code>, <code>.rb</code>, <code>.go</code>, <code>.java</code></td>
          </tr>
          <tr>
            <td>Config</td>
            <td><code>.json</code>, <code>.yaml</code>, <code>.yml</code>, <code>.toml</code>, <code>.env</code></td>
          </tr>
          <tr>
            <td>Shell</td>
            <td><code>.sh</code>, <code>.bash</code>, <code>.zsh</code></td>
          </tr>
          <tr>
            <td>Database</td>
            <td><code>.sql</code>, <code>.csv</code></td>
          </tr>
          <tr>
            <td>Documentation</td>
            <td><code>.md</code>, <code>.txt</code>, <code>.log</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Permissions Management</h2>
      <p>
        View and modify file/directories permissions:
      </p>

      <h3>Permission Display</h3>
      <p>
        Files display permissions in standard Unix format:
      </p>
      <ul>
        <li><code>rwxr-xr-x</code> = 755 (directories)</li>
        <li><code>rw-r--r--</code> = 644 (files)</li>
        <li><code>rw-------</code> = 600 (sensitive files)</li>
      </ul>

      <h3>Changing Permissions</h3>
      <ul>
        <li>Right-click a file → "Permissions"</li>
        <li>Use the permission editor dialog</li>
        <li>Set owner, group, and other permissions</li>
        <li>Apply recursively to folders</li>
      </ul>

      <h2>Context Menu Options</h2>
      <p>Right-click on files and folders for additional options:</p>

      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Open</td>
            <td>Open file in editor (text) or download (binary)</td>
          </tr>
          <tr>
            <td>Download</td>
            <td>Download file to your computer</td>
          </tr>
          <tr>
            <td>Rename</td>
            <td>Rename the file or folder</td>
          </tr>
          <tr>
            <td>Copy</td>
            <td>Copy to clipboard</td>
          </tr>
          <tr>
            <td>Move</td>
            <td>Move to different location</td>
          </tr>
          <tr>
            <td>Permissions</td>
            <td>Change file permissions</td>
          </tr>
          <tr>
            <td>Owner</td>
            <td>Change file owner</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>Delete file (with confirmation)</td>
          </tr>
        </tbody>
      </table>

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
            <td><code>Ctrl+C</code></td>
            <td>Copy selected files</td>
          </tr>
          <tr>
            <td><code>Ctrl+V</code></td>
            <td>Paste files</td>
          </tr>
          <tr>
            <td><code>Ctrl+X</code></td>
            <td>Cut selected files</td>
          </tr>
          <tr>
            <td><code>Ctrl+D</code></td>
            <td>Download selected</td>
          </tr>
          <tr>
            <td><code>Delete</code></td>
            <td>Delete selected</td>
          </tr>
          <tr>
            <td><code>F2</code></td>
            <td>Rename selected</td>
          </tr>
          <tr>
            <td><code>Ctrl+F</code></td>
            <td>Search files</td>
          </tr>
          <tr>
            <td><code>Ctrl+A</code></td>
            <td>Select all</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
