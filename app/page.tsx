import Link from 'next/link'
import {
  FiServer,
  FiShield,
  FiActivity,
  FiUsers,
  FiDatabase,
  FiGlobe,
  FiArrowRight,
  FiTerminal,
  FiDownload,
  FiStar,
  FiGithub,
} from 'react-icons/fi'
import { CodeBlock } from '@/components/CodeBlock'

const features = [
  {
    icon: FiActivity,
    title: 'System Monitoring',
    description: 'Real-time CPU, memory, disk, and network monitoring with beautiful visualizations.',
  },
  {
    icon: FiUsers,
    title: 'User Management',
    description: 'Create and manage users with sudo access, SSH keys, and granular permissions.',
  },
  {
    icon: FiDatabase,
    title: 'Database Management',
    description: 'MySQL and PostgreSQL support with web-based query editor and backups.',
  },
  {
    icon: FiGlobe,
    title: 'Domain Management',
    description: 'Manage domains, virtual hosts, and SSL certificates with Let\'s Encrypt.',
  },
  {
    icon: FiShield,
    title: 'Firewall Control',
    description: 'UFW-based firewall management with IP blocking and port configuration.',
  },
  {
    icon: FiTerminal,
    title: 'Web Terminal',
    description: 'Full terminal access in your browser with split sessions and custom themes.',
  },
]

const installScript = `bash <(curl -s https://your-domain.com/install.sh) --domain panel.example.com`

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-950 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-8">
            <FiStar className="text-primary-400" size={14} />
            <span className="text-sm text-primary-300">Version 1.0.0</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Modern VPS
            <span className="gradient-text"> Management</span>
          </h1>
          
          <p className="text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            A beautiful, feature-rich control panel for managing your VPS.
            Monitor resources, manage users, databases, and domains from one interface.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/docs/getting-started/installation"
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started <FiArrowRight size={18} />
            </Link>
            <Link
              href="/docs/getting-started/introduction"
              className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 text-dark-200 px-6 py-3 rounded-lg font-medium transition-colors border border-dark-700"
            >
              Read Documentation
            </Link>
          </div>
          
          <CodeBlock code={installScript} language="bash" filename="Terminal" />
          
          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-400 mb-1">
                <FiDownload size={18} />
                <span className="text-2xl font-bold text-white">10K+</span>
              </div>
              <span className="text-sm text-dark-400">Downloads</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-400 mb-1">
                <FiStar size={18} />
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <span className="text-sm text-dark-400">GitHub Stars</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary-400 mb-1">
                <FiGithub size={18} />
                <span className="text-2xl font-bold text-white">100+</span>
              </div>
              <span className="text-sm text-dark-400">Contributors</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Everything you need</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              A comprehensive suite of tools to manage every aspect of your VPS infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center mb-4 group-hover:bg-primary-600/30 transition-colors">
                  <feature.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-dark-300 mb-8">
            Deploy VPS Panel on your server in minutes with our simple installation process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/getting-started/installation"
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FiServer size={18} /> Install Now
            </Link>
            <Link
              href="/docs/features/dashboard"
              className="flex items-center gap-2 bg-dark-800 hover:bg-dark-700 text-dark-200 px-6 py-3 rounded-lg font-medium transition-colors border border-dark-700"
            >
              Explore Features <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-dark-500 text-sm">
            Built with Next.js, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  )
}
