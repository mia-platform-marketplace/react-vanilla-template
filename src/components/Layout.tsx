import { Link, Outlet, useLocation } from 'react-router-dom'
import { Home, Info, FileText, Database, Package } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import miaFlowIcon from '../assets/mia-flow-icon.svg'

/**
 * Layout Component (React Router v7)
 * 
 * A consistent layout wrapper that demonstrates:
 * - Centered content with max-width containers
 * - Navigation header with active link styling
 * - Responsive design
 * - useLocation hook for active route detection
 * - Outlet for nested routes (v7 pattern)
 * 
 * Used as a parent route with nested children routes.
 */

export function Layout() {
  const location = useLocation()
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname.startsWith('/preview-')
    }
    return location.pathname === path
  }

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/form', label: 'Form', icon: FileText },
    { path: '/api', label: 'API', icon: Database },
    { path: '/store', label: 'Store', icon: Package },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Navigation Header */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img src={miaFlowIcon} alt="Mia Flow" className="w-9 h-9 transition-transform group-hover:scale-110" />
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Mia Flow Template
              </h1>
            </Link>

            {/* Navigation Links and Theme Toggle */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {navLinks.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                      ${isActive(path)
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Centered */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto transition-colors">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Built with React + TypeScript + Tailwind CSS • Mia Flow Template
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
