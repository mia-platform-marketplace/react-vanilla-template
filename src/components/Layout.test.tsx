import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Layout } from './Layout'

// Mock Outlet from react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet">Child Content</div>
  }
})

describe('Layout', () => {
  it('renders navigation header', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders Mia Flow Template branding', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByText('Mia Flow Template')).toBeInTheDocument()
  })

  it('renders Home navigation link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders About navigation link', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders Outlet for child routes', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByText(/Built with React/i)).toBeInTheDocument()
  })

  it('highlights Home link when on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    )
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveClass('bg-blue-50')
  })

  it('highlights About link when on about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Layout />
      </MemoryRouter>
    )
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveClass('bg-blue-50')
  })

  it('highlights Home link for preview routes', () => {
    render(
      <MemoryRouter initialEntries={['/preview-3000']}>
        <Layout />
      </MemoryRouter>
    )
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveClass('bg-blue-50')
  })
})
