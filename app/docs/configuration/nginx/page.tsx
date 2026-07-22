import { CodeBlock } from '@/components/CodeBlock'

export default function NginxPage() {
  return (
    <div className="doc-content">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Nginx Configuration</h1>
        <p className="text-lg text-dark-300">
          Configure Nginx as a reverse proxy, serve static files, and optimize performance.
        </p>
      </div>

      <h2>Reverse Proxy Setup</h2>
      <p>
        VPS Panel uses Nginx as a reverse proxy to forward requests to the backend Node.js server.
        This provides SSL termination, load balancing, and static file caching.
      </p>

      <h3>Default Configuration</h3>
      <CodeBlock
        code={`server {
    listen 80;
    server_name panel.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name panel.example.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/panel.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/panel.example.com/privkey.pem;

    # Proxy Configuration
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket Support
    location /ws {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 86400;
    }
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>Static File Serving</h2>
      <p>
        Configure Nginx to serve static files directly for better performance:
      </p>

      <CodeBlock
        code={`# Serve static assets directly
location /static/ {
    alias /var/www/vps-panel/static/;
    expires 30d;
    add_header Cache-Control "public, no-transform";
    access_log off;
}

# Serve uploaded files
location /uploads/ {
    alias /var/lib/vps-panel/uploads/;
    expires 7d;
    add_header Cache-Control "public, no-transform";
}

# Deny access to sensitive directories
location ~ /\\.(git|env) {
    deny all;
}

location ~* /node_modules/ {
    deny all;
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>WebSocket Configuration</h2>
      <p>
        VPS Panel uses WebSocket connections for real-time features like the web terminal
        and live monitoring. Configure Nginx to properly handle WebSocket upgrades:
      </p>

      <CodeBlock
        code={`# WebSocket configuration for terminal
location /ws/terminal {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_read_timeout 86400;
    proxy_send_timeout 86400;
}

# WebSocket configuration for monitoring
location /ws/monitoring {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 86400;
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>Security Headers</h2>
      <p>
        Add these security headers to protect against common web vulnerabilities:
      </p>

      <CodeBlock
        code={`# Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;

# Hide Nginx version
server_tokens off;

# Disable server signature
more_set_headers "Server: ";`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>Performance Tuning</h2>

      <h3>Enable Gzip Compression</h3>
      <CodeBlock
        code={`# Gzip Compression
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml
    application/rss+xml
    application/atom+xml
    image/svg+xml;`}
        language="nginx"
        filename="/etc/nginx/nginx.conf"
        showLineNumbers
      />

      <h3>Connection Optimization</h3>
      <CodeBlock
        code={`# Connection Optimization
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}

http {
    # Buffer Settings
    client_body_buffer_size 10K;
    client_header_buffer_size 1k;
    client_max_body_size 100M;
    large_client_header_buffers 4 8k;

    # Timeouts
    client_body_timeout 12;
    client_header_timeout 12;
    keepalive_timeout 15;
    send_timeout 10;

    # Enable Sendfile
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
}`}
        language="nginx"
        filename="/etc/nginx/nginx.conf"
        showLineNumbers
      />

      <h3>Static File Caching</h3>
      <CodeBlock
        code={`# Cache static files
location ~* \\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
    expires 30d;
    add_header Cache-Control "public, no-transform";
    access_log off;
    log_not_found off;
}

# Cache fonts
location ~* \\.(woff|woff2|ttf|eot|otf)$ {
    expires 365d;
    add_header Cache-Control "public, no-transform";
    add_header Access-Control-Allow-Origin "*";
    access_log off;
}`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>Rate Limiting</h2>
      <p>
        Protect your server from abuse with rate limiting:
      </p>

      <CodeBlock
        code={`# Define rate limiting zones
limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
limit_req_zone $binary_remote_addr zone=api:10m rate=30r/s;

# Apply rate limiting to login
location /api/auth/login {
    limit_req zone=login burst=3 nodelay;
    proxy_pass http://127.0.0.1:8080;
}

# Apply rate limiting to API
location /api/ {
    limit_req zone=api burst=10 nodelay;
    proxy_pass http://127.0.0.1:8080;
}

# Block too many requests
limit_req_status 429;`}
        language="nginx"
        filename="/etc/nginx/sites-available/vps-panel.conf"
        showLineNumbers
      />

      <h2>Testing and Reloading</h2>
      <CodeBlock
        code={`# Test Nginx configuration
nginx -t

# Reload Nginx without downtime
systemctl reload nginx

# Restart Nginx
systemctl restart nginx

# Check Nginx status
systemctl status nginx

# View Nginx error logs
tail -f /var/log/nginx/error.log`}
        language="bash"
        filename="Terminal"
        showLineNumbers
      />

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
        <p className="text-blue-200">
          💡 <strong>Tip:</strong> Always test your Nginx configuration before reloading.
          Use <code>nginx -t</code> to validate the configuration syntax.
        </p>
      </div>
    </div>
  )
}
