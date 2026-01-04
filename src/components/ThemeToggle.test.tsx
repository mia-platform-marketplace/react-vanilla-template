import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Clear localStorage and reset DOM
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders toggle button', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('starts in light mode by default', () => {
    render(<ThemeToggle />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('toggles to dark mode when clicked', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('toggles back to light mode when clicked again', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    
    // Toggle to dark
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    
    // Toggle back to light
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('loads dark theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('loads light theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.add('dark')
    
    render(<ThemeToggle />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('respects system dark mode preference when no localStorage', () => {
    const matchMedia = vi.fn().mockReturnValue({ matches: true })
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMedia
    })
    
    render(<ThemeToggle />)
    expect(matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
