'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiHome,
  FiSettings,
  FiGrid,
  FiCode,
  FiBook,
  FiTerminal,
  FiExternalLink,
} from 'react-icons/fi'

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    children: [
      { title: 'Introduction', href: '/docs/getting-started/introduction' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'System Requirements', href: '/docs/getting-started/system-requirements' },
    ],
  },
  {
    title: 'Configuration',
    children: [
      { title: 'Initial Setup', href: '/docs/configuration/initial-setup' },
      { title: 'Domain Configuration', href: '/docs/configuration/domain-setup' },
      { title: 'SSL Certificates', href: '/docs/configuration/ssl-certificates' },
      { title: 'Nginx Configuration', href: '/docs/configuration/nginx' },
    ],
  },
  {
    title: 'Features',
    children: [
      { title: 'Dashboard', href: '/docs/features/dashboard' },
      { title: 'System Monitoring', href: '/docs/features/system-monitoring' },
      { title: 'User Management', href: '/docs/features/user-management' },
      { title: 'File Manager', href: '/docs/features/file-manager' },
      { title: 'Web Terminal', href: '/docs/features/terminal' },
      { title: 'Service Management', href: '/docs/features/services' },
      { title: 'Firewall Management', href: '/docs/features/firewall' },
      { title: 'Database Management', href: '/docs/features/databases' },
      { title: 'Backup & Restore', href: '/docs/features/backups' },
      { title: 'Domain Management', href: '/docs/features/domains' },
    ],
  },
  {
    title: 'API Reference',
    children: [
      { title: 'Authentication', href: '/docs/api/authentication' },
      { title: 'System Endpoints', href: '/docs/api/system' },
      { title: 'User Endpoints', href: '/docs/api/users' },
      { title: 'File Endpoints', href: '/docs/api/files' },
      { title: 'Monitoring Endpoints', href: '/docs/api/monitoring' },
    ],
  },
  {
    title: 'Guides',
    children: [
      { title: 'Custom Domain Setup', href: '/docs/guides/custom-domain' },
      { title: 'Security Hardening', href: '/docs/guides/security' },
      { title: 'Troubleshooting', href: '/docs/guides/troubleshooting' },
      { title: 'Updating the Panel', href: '/docs/guides/updating' },
    ],
  },
  {
    title: 'CLI Reference',
    children: [
      { title: 'Installation Flags', href: '/docs/cli/installation-flags' },
      { title: 'Management Commands', href: '/docs/cli/management' },
    ],
  },
]

function NavSection({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)
  const isActive = item.href === pathname
  const hasChildren = item.children && item.children.length > 0

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        className={`nav-link ${isActive ? 'active' : ''}`}
        style={{ paddingLeft: `${(depth * 12) + 12}px` }}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between nav-link"
        style={{ paddingLeft: `${(depth * 12) + 12}px` }}
      >
        <span className="text-dark-200 font-medium">{item.title}</span>
        {expanded ? (
          <FiChevronDown className="text-dark-500" size={14} />
        ) : (
          <FiChevronRight className="text-dark-500" size={14} />
        )}
      </button>
      {expanded && hasChildren && (
        <div className="mt-1">
          {item.children!.map((child, index) => (
            <NavSection key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-500 transition-colors"
      >
        <FiMenu size={24} />
      </button>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-dark-950/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 left-0 w-72 bg-dark-900 border-r border-dark-800/50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-dark-800/50">
              <span className="font-semibold text-white">Navigation</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 text-dark-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navigation.map((item, index) => (
                <NavSection key={index} item={item} />
              ))}
            </nav>
          </div>
        </div>
      )}

      <aside className="hidden lg:block fixed inset-y-0 left-0 w-72 bg-dark-900/50 border-r border-dark-800/50 overflow-y-auto pt-16">
        <nav className="p-4 space-y-1">
          {navigation.map((item, index) => (
            <NavSection key={index} item={item} />
          ))}
        </nav>

        <div className="p-4 mt-8 border-t border-dark-800/50">
          <div className="glass-card p-4">
            <h4 className="text-sm font-semibold text-white mb-2">Need help?</h4>
            <p className="text-xs text-dark-400 mb-3">
              Check our troubleshooting guide or open an issue on GitHub.
            </p>
            <Link
              href="/docs/guides/troubleshooting"
              className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1"
            >
              View Troubleshooting <FiExternalLink size={12} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
