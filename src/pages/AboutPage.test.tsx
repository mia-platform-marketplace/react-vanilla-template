import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AboutPage } from './AboutPage'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('AboutPage', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renders page title', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('About This Template')).toBeInTheDocument()
  })

  it('renders page description', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText(/comprehensive React template/)).toBeInTheDocument()
  })

  it('renders Back to Home button', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Back to Home')).toBeInTheDocument()
  })

  it('navigates to home when Back button clicked', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    const backButton = screen.getByText('Back to Home')
    fireEvent.click(backButton)
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('renders TypeScript First feature', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('TypeScript First')).toBeInTheDocument()
    expect(screen.getByText(/Built with TypeScript/)).toBeInTheDocument()
  })

  it('renders Tailwind CSS feature', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    expect(screen.getByText(/Utility-first CSS framework/)).toBeInTheDocument()
  })

  it('renders Modern Stack feature', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Modern Stack')).toBeInTheDocument()
    expect(screen.getByText(/React 18, Vite, React Query/)).toBeInTheDocument()
  })

  it('renders Technology Stack section', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Technology Stack')).toBeInTheDocument()
  })

  it('renders all technology items', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('React 18 with TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vite for blazing fast builds')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS for styling')).toBeInTheDocument()
    expect(screen.getByText('React Router for navigation')).toBeInTheDocument()
    expect(screen.getByText('Tanstack Query for data fetching')).toBeInTheDocument()
    expect(screen.getByText('Zustand for state management')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Ready to Build Something Amazing?')).toBeInTheDocument()
  })

  it('renders View Demo button', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('View Demo')).toBeInTheDocument()
  })

  it('navigates to home when View Demo clicked', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    const demoButton = screen.getByText('View Demo')
    fireEvent.click(demoButton)
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('renders View Documentation button', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    expect(screen.getByText('View Documentation')).toBeInTheDocument()
  })

  it('opens documentation in new window when clicked', () => {
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )
    
    const docButton = screen.getByText('View Documentation')
    fireEvent.click(docButton)
    
    expect(windowOpenSpy).toHaveBeenCalledWith('https://github.com', '_blank')
    windowOpenSpy.mockRestore()
  })
})
