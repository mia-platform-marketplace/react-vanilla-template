import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

/**
 * NotFoundPage Component
 * 
 * A 404 error page that demonstrates:
 * - React Router navigation with Link component
 * - User-friendly error handling
 * - Consistent styling with the rest of the application
 */
export function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center mx-4">
        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Button */}
        <Link to="/">
          <Button variant="primary" className="text-lg px-8 py-3 min-w-[180px]">
            Go Back Home
          </Button>
        </Link>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            This is a catch-all route (<code className="bg-gray-100 px-2 py-1 rounded">/*</code>) 
            that handles all unmatched paths.
          </p>
        </div>
      </div>
    </div>
  )
}
