import { render, screen } from '@testing-library/react'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders the welcome heading', () => {
    render(<HomePage />)
    const heading = screen.getByText(/Welcome to Your React App/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<HomePage />)
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
    expect(screen.getByText('Components')).toBeInTheDocument()
    expect(screen.getByText('React Router')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })
})
