/**
 * Translations / i18n Configuration
 * 
 * Central location for all text strings used in the application.
 * This makes it easier to add internationalization (i18n) support later.
 * 
 * Usage:
 * import { t } from '@/lib/translations'
 * <h1>{t.common.welcome}</h1>
 * 
 * For future i18n implementation, consider libraries like:
 * - react-i18next
 * - react-intl
 * - next-intl (for Next.js)
 */

export const translations = {
  common: {
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success!',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    update: 'Update',
    search: 'Search',
    filter: 'Filter',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
  },

  navigation: {
    home: 'Home',
    about: 'About',
    backToHome: 'Back to Home',
  },

  homePage: {
    title: 'Welcome to Mia Flow React Template',
    subtitle: 'A simple example to guide AI-assisted development',
    counterTitle: 'Counter Example',
    increment: 'Increment',
    decrement: 'Decrement',
    reset: 'Reset',
    incremented: 'Incremented!',
    decremented: 'Decremented!',
    resetMessage: 'Reset!',
    navigationTitle: 'Navigation Example',
    navigationDescription: 'Check out the About page to see another page example with different patterns.',
    goToAbout: 'Go to About Page',
    guidelinesTitle: 'Development Guidelines',
    guidelines: {
      components: 'Components are located in',
      pages: 'Pages are located in',
      typescript: 'Use TypeScript for type safety and better developer experience',
      tailwind: 'Tailwind CSS is configured for utility-first styling',
      router: 'React Router is available for navigation between pages',
      query: 'Tanstack Query (React Query) is set up for data fetching',
    },
  },

  aboutPage: {
    title: 'About This Template',
    subtitle: 'A comprehensive React template designed for rapid development with modern tools and best practices',
    features: {
      typescript: {
        title: 'TypeScript First',
        description: 'Built with TypeScript for type safety and better developer experience.',
      },
      tailwind: {
        title: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development.',
      },
      modern: {
        title: 'Modern Stack',
        description: 'React 18, Vite, React Query, Zustand, and more cutting-edge tools.',
      },
    },
    techStackTitle: 'Technology Stack',
    techStack: [
      'React 18 with TypeScript',
      'Vite for blazing fast builds',
      'Tailwind CSS for styling',
      'React Router for navigation',
      'Tanstack Query for data fetching',
      'Zustand for state management',
      'React Hook Form + Zod for forms',
      'Lucide React for icons',
      'Framer Motion for animations',
      'Vitest for testing',
    ],
    ctaTitle: 'Ready to Build Something Amazing?',
    ctaSubtitle: 'This template provides everything you need to get started quickly.',
    viewDemo: 'View Demo',
    viewDocs: 'View Documentation',
  },

  notFoundPage: {
    title: '404',
    subtitle: 'Page Not Found',
    description: "The page you're looking for doesn't exist or has been moved.",
    backHome: 'Go Back Home',
    routeInfo: 'This is a catch-all route that handles all unmatched paths.',
  },

  errors: {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    notFound: 'Resource not found.',
    unauthorized: 'You are not authorized to perform this action.',
    validation: 'Please check your input and try again.',
  },

  validation: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    minLength: (min: number) => `Must be at least ${min} characters`,
    maxLength: (max: number) => `Must be no more than ${max} characters`,
    passwordMatch: 'Passwords do not match',
  },

  footer: {
    copyright: '© 2026 Mia Flow Template. All rights reserved.',
    builtWith: 'Built with React + TypeScript + Tailwind CSS',
  },
} as const

// Type-safe translation function
export const t = translations

// Helper function for pluralization (simple version)
export function plural(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural
}

// Helper function for formatting with variables
export function format(template: string, ...values: (string | number)[]): string {
  return template.replace(/{(\d+)}/g, (match, index) => {
    return typeof values[index] !== 'undefined' ? String(values[index]) : match
  })
}

// Example usage:
// format('Hello {0}, you have {1} messages', 'John', 5)
// Result: "Hello John, you have 5 messages"
