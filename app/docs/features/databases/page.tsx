'use client'

import { CodeBlock } from '@/components/CodeBlock'

export default function DatabasesPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Database Management</h1>
        <p className="text-lg text-dark-300">
          MySQL and PostgreSQL support with web-based query editor and backups.
        </p>
      </div>

      <h2>Database Creation</h2>
      <p>
        VPS Panel supports both MySQL and PostgreSQL databases. Create and manage databases
        directly from the web interface.
      </p>

      <h3>Creating a MySQL Database</h3>
      <ol>
        <li>Navigate to "Databases" in the sidebar</li>
        <li>Click "Create Database"</li>
        <li>Select "MySQL" as the database type</li>
        <li>Enter a database name</li>
        <li>Create a database user with a strong password</li>
        <li>Set user privileges</li>
        <li>Click "Create"</li>
      </ol>

      <h3>Creating a PostgreSQL Database</h3>
      <ol>
        <li>Navigate to "Databases" in the sidebar</li>
        <li>Click "Create Database"</li>
        <li>Select "PostgreSQL" as the database type</li>
        <li>Enter a database name</li>
        <li>Create a database user</li>
        <li>Configure permissions</li>
        <li>Click "Create"</li>
      </ol>

      <h3>Using the CLI</h3>
      <CodeBlock
        code={`# Create MySQL database
vps-panel db create myapp --type mysql

# Create PostgreSQL database
vps-panel db create myapp --type postgresql

# List databases
vps-panel db list

# Drop database (with confirmation)
vps-panel db drop myapp`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>MySQL Management</h2>

      <h3>MySQL User Management</h3>
      <CodeBlock
        code={`# Create MySQL user
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'secure_password';

# Grant privileges
GRANT ALL PRIVILEGES ON myapp.* TO 'appuser'@'localhost';

# Flush privileges
FLUSH PRIVILEGES;

# Show grants
SHOW GRANTS FOR 'appuser'@'localhost';

# Drop user
DROP USER 'appuser'@'localhost';`}
        language="sql"
        filename="MySQL Query Editor"
        showLineNumbers
      />

      <h3>MySQL Configuration</h3>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Default</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>max_connections</td>
            <td>151</td>
            <td>200</td>
          </tr>
          <tr>
            <td>innodb_buffer_pool_size</td>
            <td>128M</td>
            <td>512M+</td>
          </tr>
          <tr>
            <td>query_cache_size</td>
            <td>1M</td>
            <td>64M</td>
          </tr>
        </tbody>
      </table>

      <h2>PostgreSQL Management</h2>

      <h3>PostgreSQL User Management</h3>
      <CodeBlock
        code={`-- Create PostgreSQL user
CREATE USER appuser WITH PASSWORD 'secure_password';

-- Create database
CREATE DATABASE myapp OWNER appuser;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE myapp TO appuser;

-- List users
\\du

-- Connect to database
\\c myapp`}
        language="sql"
        filename="PostgreSQL Query Editor"
        showLineNumbers
      />

      <h3>PostgreSQL Configuration</h3>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Default</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>max_connections</td>
            <td>100</td>
            <td>150</td>
          </tr>
          <tr>
            <td>shared_buffers</td>
            <td>128MB</td>
            <td>256MB+</td>
          </tr>
          <tr>
            <td>effective_cache_size</td>
            <td>4GB</td>
            <td>8GB+</td>
          </tr>
        </tbody>
      </table>

      <h2>SQL Query Editor</h2>
      <p>
        Execute SQL queries directly from the web interface:
      </p>

      <h3>Editor Features</h3>
      <ul>
        <li><strong>Syntax Highlighting</strong> - MySQL and PostgreSQL syntax</li>
        <li><strong>Auto-completion</strong> - Table and column suggestions</li>
        <li><strong>Query History</strong> - Access previously executed queries</li>
        <li><strong>Export Results</strong> - Download as CSV or JSON</li>
        <li><strong>Query Validation</strong> - Check syntax before execution</li>
      </ul>

      <h3>Using the Query Editor</h3>
      <ol>
        <li>Select the database from the dropdown</li>
        <li>Type your SQL query in the editor</li>
        <li>Click "Execute" or press Ctrl+Enter</li>
        <li>View results in the table below</li>
        <li>Export results if needed</li>
      </ol>

      <h2>Database Backups</h2>

      <h3>Creating Backups</h3>
      <ul>
        <li>Click "Backup" next to any database</li>
        <li>Choose backup format (SQL dump)</li>
        <li>Download or save to server</li>
        <li>Schedule automatic backups</li>
      </ul>

      <h3>Restoring Backups</h3>
      <ul>
        <li>Click "Restore" on the database</li>
        <li>Upload backup file</li>
        <li>Confirm the restore operation</li>
        <li>Wait for completion</li>
      </ul>

      <h3>Backup Commands</h3>
      <CodeBlock
        code={`# MySQL backup
mysqldump -u root -p myapp > backup.sql

# MySQL backup with compression
mysqldump -u root -p myapp | gzip > backup.sql.gz

# PostgreSQL backup
pg_dump -U postgres myapp > backup.sql

# PostgreSQL backup with compression
pg_dump -U postgres myapp | gzip > backup.sql.gz

# Restore MySQL
mysql -u root -p myapp < backup.sql

# Restore PostgreSQL
psql -U postgres myapp < backup.sql`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <h2>Database Monitoring</h2>
      <p>
        Monitor database performance and health:
      </p>

      <ul>
        <li><strong>Connection Count</strong> - Active connections</li>
        <li><strong>Query Statistics</strong> - Queries per second</li>
        <li><strong>Slow Queries</strong> - Identify slow queries</li>
        <li><strong>Cache Hit Ratio</strong> - Buffer pool efficiency</li>
        <li><strong>Disk Usage</strong> - Database size and growth</li>
      </ul>

      <h2>Security Best Practices</h2>
      <ul>
        <li>Use strong, unique passwords for database users</li>
        <li>Limit user privileges to minimum required</li>
        <li>Bind MySQL to localhost only</li>
        <li>Enable SSL for remote connections</li>
        <li>Regular security updates</li>
        <li>Monitor authentication failures</li>
      </ul>

      <h2>Troubleshooting</h2>

      <h3>Connection Refused</h3>
      <ul>
        <li>Check if database service is running</li>
        <li>Verify bind address configuration</li>
        <li>Check firewall rules</li>
        <li>Verify user credentials</li>
      </ul>

      <h3>Slow Queries</h3>
      <ul>
        <li>Enable slow query log</li>
        <li>Add appropriate indexes</li>
        <li>Optimize query structure</li>
        <li>Increase buffer pool size</li>
      </ul>
    </div>
  )
}
