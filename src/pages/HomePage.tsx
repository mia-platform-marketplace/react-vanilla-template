import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { COUNTER_INCREMENT_STEP, COUNTER_DECREMENT_STEP } from '../constants/counter'

/**
 * HomePage Component
 * 
 * A simple example page that demonstrates:
 * - Using state with useState hook
 * - Component composition and importing custom components
 * - Event handling
 * - Conditional rendering
 * - Tailwind CSS for layouts and styling
 * 
 * This serves as a template for creating new pages in the application.
 */
export function HomePage() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const handleIncrement = () => {
    setCount(prev => prev + COUNTER_INCREMENT_STEP)
    setMessage('Incremented!')
  }

  const handleDecrement = () => {
    setCount(prev => prev - COUNTER_DECREMENT_STEP)
    setMessage('Decremented!')
  }

  const handleReset = () => {
    setCount(0)
    setMessage('Reset!')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to Mia Flow React Template
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A simple example to guide AI-assisted development
        </p>
      </header>

      {/* Main Content Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Counter Example
        </h2>

        {/* Counter Display */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-32 h-32 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-6xl font-bold">{count}</span>
          </div>
          
          {/* Feedback Message */}
          {message && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 animate-fade-in">
              {message}
            </p>
          )}
        </div>

        {/* Button Controls */}
        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="primary" onClick={handleIncrement} className="min-w-[120px]">
            Increment
          </Button>
          <Button variant="secondary" onClick={handleDecrement} className="min-w-[120px]">
            Decrement
          </Button>
          <Button variant="outline" onClick={handleReset} className="min-w-[120px]">
            Reset
          </Button>
        </div>
      </div>

      {/* Navigation Example */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Navigation Example
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Check out the example pages to see different patterns and best practices.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/about">
            <Button variant="primary" className="min-w-[140px]">
              About Page
            </Button>
          </Link>
          <Link to="/form">
            <Button variant="secondary" className="min-w-[140px]">
              Form Example
            </Button>
          </Link>
          <Link to="/api">
            <Button variant="secondary" className="min-w-[140px]">
              API Example
            </Button>
          </Link>
          <Link to="/store">
            <Button variant="secondary" className="min-w-[140px]">
              Store Example
            </Button>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Development Guidelines
          </h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-200">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Components are located in <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded text-sm">src/components/</code></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Pages are located in <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded text-sm">src/pages/</code></span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Use TypeScript for type safety and better developer experience</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Tailwind CSS is configured for utility-first styling</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>React Router is available for navigation between pages</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
            <span>Tanstack Query (React Query) is set up for data fetching</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
