'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiGithub, FiSearch, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">VP</span>
              </div>
              <span className="font-semibold text-lg text-white hidden sm:block">VPS Panel</span>
            </Link>
            <span className="hidden sm:block text-dark-600">|</span>
            <span className="hidden sm:block text-dark-400 text-sm">Documentation</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500" size={16} />
              <input
                type="text"
                placeholder="Search docs..."
                className="bg-dark-800/50 border border-dark-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500/50 w-64"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-600 text-xs font-mono">⌘K</kbd>
            </div>

            <Link
              href="https://github.com/your-repo/vps-panel"
              target="_blank"
              className="p-2 text-dark-400 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-dark-400 hover:text-white transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <Link
              href="/docs/getting-started/installation"
              className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark-400 hover:text-white"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-dark-800/50 bg-dark-900/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500" size={16} />
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full bg-dark-800/50 border border-dark-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500/50"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/your-repo/vps-panel"
                target="_blank"
                className="p-2 text-dark-400 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-dark-400 hover:text-white transition-colors"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
            <Link
              href="/docs/getting-started/installation"
              className="block w-full text-center bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
