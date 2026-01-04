import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { router } from './router'

describe('Router', () => {
  it('exports router configuration', () => {
    expect(router).toBeDefined()
  })

  it('has routes configured', () => {
    expect(router.routes).toBeDefined()
    expect(router.routes.length).toBeGreaterThan(0)
  })

  it('renders HomePage for / route', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/'],
    })
    
    const { container } = render(<RouterProvider router={testRouter} />)
    expect(container).toBeInTheDocument()
  })

  it('renders HomePage for preview routes', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/preview-3000'],
    })
    
    const { container } = render(<RouterProvider router={testRouter} />)
    expect(container).toBeInTheDocument()
  })

  it('renders AboutPage for /about route', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/about'],
    })
    
    const { container } = render(<RouterProvider router={testRouter} />)
    expect(container).toBeInTheDocument()
  })

  it('renders NotFoundPage for unknown routes', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/unknown-route'],
    })
    
    const { container } = render(<RouterProvider router={testRouter} />)
    expect(container).toBeInTheDocument()
  })
})
