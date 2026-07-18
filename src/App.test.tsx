import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

const mockWeather = [
  { current_weather: { temperature: 21.4, weathercode: 0 } },
  { current_weather: { temperature: 15.2, weathercode: 3 } },
  { current_weather: { temperature: 27.8, weathercode: 1 } },
  { current_weather: { temperature: 19.6, weathercode: 61 } },
  { current_weather: { temperature: 23.1, weathercode: 2 } },
]

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockWeather),
      })
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

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

  it('fetches and displays weather for world cities', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/New York/)).toBeInTheDocument()
    })
    expect(screen.getByText('21°C')).toBeInTheDocument()
    expect(screen.getByText(/Tokyo/)).toBeInTheDocument()
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.open-meteo.com/v1/forecast')
    )
  })
})
