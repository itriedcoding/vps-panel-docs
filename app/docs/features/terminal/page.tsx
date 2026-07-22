export default function TerminalPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Web Terminal</h1>
        <p className="text-lg text-dark-300">
          Full terminal access in your browser with split sessions and custom themes.
        </p>
      </div>

      <h2>Accessing the Terminal</h2>
      <p>
        The web terminal provides a fully functional terminal experience directly in your browser,
        powered by xterm.js and node-pty.
      </p>

      <h3>Opening a Terminal</h3>
      <ul>
        <li>Click "Terminal" in the sidebar navigation</li>
        <li>Use the quick action button on the dashboard</li>
        <li>Press <code>T</code> keyboard shortcut (when dashboard is focused)</li>
      </ul>

      <h3>Authentication</h3>
      <p>
        Terminal sessions are authenticated using your VPS Panel session. No additional
        credentials are required when accessing through the panel.
      </p>

      <h2>Features</h2>

      <h3>Terminal Capabilities</h3>
      <ul>
        <li><strong>Full ANSI Support</strong> - Colors, cursor movement, screen clearing</li>
        <li><strong>Tab Completion</strong> - Bash tab completion works as expected</li>
        <li><strong>Command History</strong> - Use up/down arrows for command history</li>
        <li><strong>Copy/Paste</strong> - Standard copy/paste with Ctrl+Shift+C/V</li>
        <li><strong>Resizable</strong> - Terminal adapts to window size</li>
        <li><strong>Scrollback</strong> - 10,000 lines of scrollback buffer</li>
      </ul>

      <h3>Split Sessions</h3>
      <p>
        Work with multiple terminal sessions simultaneously:
      </p>
      <ul>
        <li><strong>Horizontal Split</strong> - Stack terminals vertically</li>
        <li><strong>Vertical Split</strong> - Stack terminals horizontally</li>
        <li><strong>Tab Management</strong> - Multiple terminal tabs</li>
        <li><strong>Session Persistence</strong> - Sessions survive page reloads</li>
      </ul>

      <h3>Theming</h3>
      <p>Customize the terminal appearance:</p>
      <table>
        <thead>
          <tr>
            <th>Theme</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default Dark</td>
            <td>Standard dark theme (default)</td>
          </tr>
          <tr>
            <td>Monokai</td>
            <td>Popular Monokai color scheme</td>
          </tr>
          <tr>
            <td>Solarized</td>
            <td>Solarized Dark theme</td>
          </tr>
          <tr>
            <td>Dracula</td>
            <td>Dracula color theme</td>
          </tr>
          <tr>
            <td>Nord</td>
            <td>Nord color palette</td>
          </tr>
          <tr>
            <td>One Dark</td>
            <td>Atom One Dark theme</td>
          </tr>
        </tbody>
      </table>

      <h2>Session Management</h2>

      <h3>Creating New Sessions</h3>
      <ul>
        <li>Click "+" to create a new terminal tab</li>
        <li>Right-click tab for context menu options</li>
        <li>Duplicate existing sessions</li>
      </ul>

      <h3>Session Options</h3>
      <ul>
        <li><strong>Rename</strong> - Give sessions descriptive names</li>
        <li><strong>Split</strong> - Create split view</li>
        <li><strong>Move</strong> - Rearrange tab order</li>
        <li><strong>Close</strong> - End session and clean up</li>
      </ul>

      <h3>Session Persistence</h3>
      <p>
        Terminal sessions persist across page reloads. If your browser disconnects,
        you can reconnect to your existing session:
      </p>
      <ul>
        <li>Sessions are stored server-side</li>
        <li>Reconnection within 5 minutes preserves session</li>
        <li>Longer disconnections create new sessions</li>
        <li>Session history is preserved</li>
      </ul>

      <h2>Shortcuts</h2>
      <table>
        <thead>
          <tr>
            <th>Shortcut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Ctrl+Shift+T</code></td>
            <td>New terminal tab</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+W</code></td>
            <td>Close current tab</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+Arrow</code></td>
            <td>Switch between tabs</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+Plus</code></td>
            <td>Increase font size</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+Minus</code></td>
            <td>Decrease font size</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+R</code></td>
            <td>Reset font size</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+C</code></td>
            <td>Copy selection</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+V</code></td>
            <td>Paste from clipboard</td>
          </tr>
          <tr>
            <td><code>Ctrl+Shift+F</code></td>
            <td>Search in terminal</td>
          </tr>
        </tbody>
      </table>

      <h2>Security Considerations</h2>
      <ul>
        <li>Terminal access requires authenticated session</li>
        <li>Sessions are encrypted over HTTPS/WSS</li>
        <li>Command audit logging is enabled</li>
        <li>Idle sessions timeout after configurable period</li>
        <li>Rate limiting prevents abuse</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Terminal Not Connecting</h3>
      <ul>
        <li>Check if WebSocket connection is blocked</li>
        <li>Verify SSL certificate is valid</li>
        <li>Check browser console for errors</li>
        <li>Ensure firewall allows WebSocket traffic</li>
      </ul>

      <h3>Display Issues</h3>
      <ul>
        <li>Try refreshing the page</li>
        <li>Clear browser cache</li>
        <li>Check font settings</li>
        <li>Verify terminal theme is compatible</li>
      </ul>

      <h3>Performance Issues</h3>
      <ul>
        <li>Reduce scrollback buffer size</li>
        <li>Close unused terminal tabs</li>
        <li>Check network latency</li>
        <li>Disable visual effects in theme</li>
      </ul>
    </div>
  )
}
