import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

/**
 * Button Component
 * 
 * A reusable button component that demonstrates:
 * - TypeScript props interface
 * - Component composition with children
 * - Tailwind CSS styling with variants
 * - Extending native HTML element props
 * 
 * Usage example:
 * ```tsx
 * <Button variant="primary" onClick={() => alert('Clicked!')}>
 *   Click me
 * </Button>
 * ```
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Button content */
  children: ReactNode
}

export function Button({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    outline: 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100'
  }

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
