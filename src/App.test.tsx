import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Hello from Mia Flow!/i)
  })

  it('displays welcome message', () => {
    render(<App />)
    expect(screen.getByText(/Just start to chat for create the application/i)).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
})
