import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ArrowLeft } from 'lucide-react'
import { useUserPreferencesStore } from '../store/userPreferencesStore'

/**
 * StorePage Component
 * 
 * Demonstrates Zustand global state management:
 * - Global state accessible from any component
 * - Persistence to localStorage
 * - Actions for updating state
 * - TypeScript type safety
 * 
 * The store persists across page refreshes.
 */

export function StorePage() {
  const navigate = useNavigate()
  const { preferences, setUsername, setEmailNotifications, setLanguage, resetPreferences } = 
    useUserPreferencesStore()

  return (
    <div className="max-w-2xl mx-auto">
      <Button 
        variant="outline" 
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Zustand Store Example
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Demonstrates global state management with persistence
        </p>

        <div className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={preferences.username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Language */}
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Language
            </label>
            <select
              id="language"
              value={preferences.language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Email Notifications
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Receive updates via email
              </p>
            </div>
            <button
              onClick={() => setEmailNotifications(!preferences.emailNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                preferences.emailNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Current State Display */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Current State (Persisted)
            </h3>
            <pre className="text-sm text-blue-700 dark:text-blue-400 overflow-auto">
              {JSON.stringify(preferences, null, 2)}
            </pre>
          </div>

          {/* Reset Button */}
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={resetPreferences}
              className="flex-1"
            >
              Reset to Defaults
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Preferences saved! (They are already persisted to localStorage)')
              }}
              className="flex-1"
            >
              Save Preferences
            </Button>
          </div>

          {/* Info */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              💡 <strong>Tip:</strong> These preferences are automatically saved to localStorage.
              Try refreshing the page - your settings will persist!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
