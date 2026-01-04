import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders title and description', () => {
    render(<Card title="Test Title" description="Test Description" />)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    const { container } = render(
      <Card title="Test" description="Description" />
    )
    
    const cardElement = container.firstChild
    expect(cardElement).toHaveClass('bg-white', 'dark:bg-gray-800')
  })
})
