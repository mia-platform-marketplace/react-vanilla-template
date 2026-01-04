/**
 * Application Constants
 * 
 * Central location for all constant values used throughout the application.
 * This helps maintain consistency and makes updates easier.
 * 
 * Usage:
 * import { API_BASE_URL, APP_NAME } from '@/lib/constants'
 */

// Application Metadata
export const APP_NAME = 'Mia Flow Template'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = 'A comprehensive React template for rapid development'

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
export const API_TIMEOUT = 30000 // 30 seconds

// Route Paths
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PREVIEW: '/preview-*',
} as const

// Storage Keys (for localStorage/sessionStorage)
export const STORAGE_KEYS = {
  THEME: 'app-theme',
  USER_PREFERENCES: 'user-preferences',
  AUTH_TOKEN: 'auth-token',
} as const

// Pagination
export const DEFAULT_PAGE_SIZE = 10
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const

// Validation Rules
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MAX_USERNAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 255,
} as const

// Time Constants (in milliseconds)
export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
} as const

// Debounce/Throttle Delays
export const DEBOUNCE_DELAY = 300
export const SEARCH_DEBOUNCE_DELAY = 500

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
] as const

// Date Formats (using date-fns format strings)
export const DATE_FORMATS = {
  SHORT: 'MM/dd/yyyy',
  LONG: 'MMMM dd, yyyy',
  WITH_TIME: 'MM/dd/yyyy HH:mm',
  ISO: "yyyy-MM-dd'T'HH:mm:ss",
} as const

// Status Types
export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const

// Feature Flags (for conditional rendering)
export const FEATURES = {
  DARK_MODE: true,
  ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  DEBUG_MODE: import.meta.env.DEV,
} as const

// External Links
export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com',
  DOCUMENTATION: 'https://docs.example.com',
  SUPPORT: 'https://support.example.com',
} as const
