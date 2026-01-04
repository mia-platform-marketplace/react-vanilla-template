import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { HomePage, AboutPage, NotFoundPage, FormPage, APIPage, StorePage } from './pages'
import { Layout } from './components'

/**
 * React Router v7 Configuration
 * 
 * Using createBrowserRouter for enhanced features:
 * - Data loading with loaders
 * - Form actions
 * - Better error handling
 * - Improved TypeScript support
 * 
 * Routes:
 * - "/" - Home page (local development)
 * - "/about" - About page
 * - "/form" - Form example (React Hook Form + Zod)
 * - "/api" - API example (Tanstack Query)
 * - "/store" - Store example (Zustand)
 * 
 * Preview Routes (Mia Flow):
 * All routes above are also available under /preview-<port>/*
 * - "/preview-50001/" - Home page in preview
 * - "/preview-50001/about" - About page in preview
 * - "/preview-50001/form" - Form page in preview
 * - "/preview-50001/api" - API page in preview
 * - "/preview-50001/store" - Store page in preview
 *
 * - "/*" - 404 Not Found (catch-all for unmatched routes)
 *
 * Note: Mia Flow renders previews at /preview-<port-number>
 */

// Shared route configuration for reuse in both root and preview paths
const appRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'form',
    element: <FormPage />,
  },
  {
    path: 'api',
    element: <APIPage />,
  },
  {
    path: 'store',
    element: <StorePage />,
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Root routes (local development)
      ...appRoutes,
      
      // Preview routes (Mia Flow)
      // All application routes are nested under /preview-<port>/
      {
        path: 'preview-:port',
        children: appRoutes,
      },
      
      // Catch-all 404 route (must be last)
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
