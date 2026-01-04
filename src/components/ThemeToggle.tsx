import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * ThemeToggle Component
 * 
 * A toggle button for switching between light and dark mode.
 * Demonstrates:
 * - Using localStorage to persist theme preference
 * - Toggling dark mode class on document element
 * - Conditional icon rendering
 * - useEffect for side effects
 */

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) {
        return stored === 'dark'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
