import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'

describe('NotFoundPage', () => {

  it('renders 404 error code', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders error title', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  it('renders error description', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/page you're looking for/i)).toBeInTheDocument()
  })

  it('renders Go Back Home button', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Go Back Home')).toBeInTheDocument()
  })

  it('navigates to home when button clicked', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    const backButton = screen.getByText('Go Back Home')
    const link = backButton.closest('a')
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders route information', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/catch-all route/)).toBeInTheDocument()
  })
})
