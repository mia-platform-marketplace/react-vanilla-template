import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders page title', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('Welcome to Mia Flow React Template')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('A simple example to guide AI-assisted development')).toBeInTheDocument()
  })

  it('renders counter starting at 0', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments counter when Increment button clicked', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const incrementButton = screen.getByText('Increment')
    fireEvent.click(incrementButton)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Incremented!')).toBeInTheDocument()
  })

  it('decrements counter when Decrement button clicked', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const decrementButton = screen.getByText('Decrement')
    fireEvent.click(decrementButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
    expect(screen.getByText('Decremented!')).toBeInTheDocument()
  })

  it('resets counter when Reset button clicked', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    
    // Increment first
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('1')).toBeInTheDocument()
    
    // Then reset
    fireEvent.click(screen.getByText('Reset'))
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('Reset!')).toBeInTheDocument()
  })

  it('renders Navigation Example section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('Navigation Example')).toBeInTheDocument()
  })

  it('renders link to About page', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const aboutLink = screen.getByText('Go to About Page').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })

  it('renders Development Guidelines section', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('Development Guidelines')).toBeInTheDocument()
  })

  it('renders component location information', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Components are located in/)).toBeInTheDocument()
    expect(screen.getByText(/Pages are located in/)).toBeInTheDocument()
  })

  it('renders TypeScript information', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Use TypeScript for type safety/)).toBeInTheDocument()
  })

  it('multiple increment clicks work correctly', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const incrementButton = screen.getByText('Increment')
    
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
