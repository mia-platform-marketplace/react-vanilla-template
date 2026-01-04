import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ArrowLeft, Code, Palette, Zap } from 'lucide-react'

/**
 * AboutPage Component
 * 
 * An example page that demonstrates:
 * - useNavigate hook for programmatic navigation
 * - Using Lucide React icons
 * - Grid layouts with Tailwind CSS
 * - Multiple button variants
 * - Card-based layouts
 * 
 * This serves as another template example for building pages.
 */
export function AboutPage() {
  const navigate = useNavigate()

  const features = [
    {
      icon: Code,
      title: 'TypeScript First',
      description: 'Built with TypeScript for type safety and better developer experience.',
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Modern Stack',
      description: 'React 18, Vite, React Query, Zustand, and more cutting-edge tools.',
      color: 'yellow'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header with Navigation */}
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About This Template
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive React template designed for rapid development with modern tools and best practices.
          </p>
        </header>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
            yellow: 'bg-yellow-100 text-yellow-600'
          }
          
          return (
            <div 
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-200"
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Technology Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            'React 18 with TypeScript',
            'Vite for blazing fast builds',
            'Tailwind CSS for styling',
            'React Router for navigation',
            'Tanstack Query for data fetching',
            'Zustand for state management',
            'React Hook Form + Zod for forms',
            'Lucide React for icons',
            'Framer Motion for animations',
            'Vitest for testing'
          ].map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
              <span className="text-gray-700 dark:text-gray-200">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          This template provides everything you need to get started quickly.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            variant="secondary" 
            onClick={() => navigate('/')}
            className="bg-white text-purple-600 hover:bg-gray-100 min-w-[160px]"
          >
            View Demo
          </Button>
          <Button 
            variant="outline" 
            className="!bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[160px]"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  )
}
