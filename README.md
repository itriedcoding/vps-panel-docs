# VPS Panel Documentation

A beautiful, modern documentation website for VPS Panel - the ultimate VPS management control panel.

## Features

- 🎨 Beautiful dark theme with Tailwind CSS
- 📱 Fully responsive design
- 🔍 Search functionality
- 📝 Syntax-highlighted code blocks
- 🚀 Fast static site generation
- 🎯 Comprehensive API documentation
- 📚 Step-by-step guides
- 💡 Interactive examples

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Syntax Highlighting:** react-syntax-highlighter
- **Icons:** react-icons
- **Deployment:** Vercel (Static Export)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/vps-panel-docs.git

# Navigate to the directory
cd vps-panel-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
vps-panel-docs/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── docs/
│       ├── getting-started/
│       │   ├── introduction/
│       │   ├── installation/
│       │   ├── quick-start/
│       │   └── system-requirements/
│       ├── configuration/
│       │   ├── initial-setup/
│       │   ├── domain-setup/
│       │   ├── ssl-certificates/
│       │   └── nginx/
│       ├── features/
│       │   ├── dashboard/
│       │   ├── system-monitoring/
│       │   ├── user-management/
│       │   ├── file-manager/
│       │   ├── terminal/
│       │   ├── services/
│       │   ├── firewall/
│       │   ├── databases/
│       │   ├── backups/
│       │   └── domains/
│       ├── api/
│       │   ├── authentication/
│       │   ├── system/
│       │   ├── users/
│       │   ├── files/
│       │   └── monitoring/
│       ├── guides/
│       │   ├── custom-domain/
│       │   ├── security/
│       │   ├── troubleshooting/
│       │   └── updating/
│       └── cli/
│           ├── installation-flags/
│           └── management/
├── components/
│   ├── Header.tsx          # Site header
│   ├── Sidebar.tsx         # Navigation sidebar
│   └── CodeBlock.tsx       # Syntax highlighted code blocks
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom primary colors
        },
        dark: {
          // Your custom dark theme colors
        },
      },
    },
  },
}
```

### Content

Edit the page files in `app/docs/` to update documentation content.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our server](https://discord.gg/example)
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/vps-panel-docs/issues)

---

Built with ❤️ using Next.js, Tailwind CSS, and deployed on Vercel.
