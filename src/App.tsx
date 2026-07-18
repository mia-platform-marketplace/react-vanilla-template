import { useEffect, useState } from 'react'
import { fetchExternal, isPreviewSandbox } from './lib/externalProxy'

interface City {
  name: string
  latitude: number
  longitude: number
}

interface CityWeather extends City {
  temperature: number
  weathercode: number
}

interface OpenMeteoResponse {
  current_weather: {
    temperature: number
    weathercode: number
  }
}

const CITIES: City[] = [
  { name: 'New York', latitude: 40.71, longitude: -74.01 },
  { name: 'London', latitude: 51.51, longitude: -0.13 },
  { name: 'Rome', latitude: 41.9, longitude: 12.5 },
  { name: 'Tokyo', latitude: 35.68, longitude: 139.65 },
  { name: 'Sydney', latitude: -33.87, longitude: 151.21 },
]

// https://open-meteo.com/en/docs#weathervariables
const WEATHER_ICONS: Record<number, string> = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌦️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  71: '🌨️',
  73: '🌨️',
  75: '🌨️',
  80: '🌦️',
  81: '🌧️',
  82: '⛈️',
  95: '⛈️',
}

function App() {
  const [cities, setCities] = useState<CityWeather[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true)
      setError(null)
      try {
        const latitude = CITIES.map((city) => city.latitude).join(',')
        const longitude = CITIES.map((city) => city.longitude).join(',')
        const path = `v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`

        // Inside a Mia Flow preview session, route through the proxy to avoid
        // CORS. Outside the sandbox (plain `yarn dev`, production build),
        // call the API directly - Open-Meteo allows any origin.
        const response = isPreviewSandbox()
          ? await fetchExternal('https://api.open-meteo.com', path)
          : await fetch(`https://api.open-meteo.com/${path}`)

        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

        const data: OpenMeteoResponse[] = await response.json()
        setCities(
          data.map((entry, index) => ({
            ...CITIES[index],
            temperature: entry.current_weather.temperature,
            weathercode: entry.current_weather.weathercode,
          }))
        )
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch weather')
      } finally {
        setLoading(false)
      }
    }

    loadWeather()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900">Hello from Mia Flow!</h1>
        <p className="mt-2 text-gray-600">Just start to chat for create the application :-)</p>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Weather around the world
          </h2>

          {loading && <p className="mt-2 text-gray-500">Loading weather...</p>}
          {error && <p className="mt-2 text-red-600">Error: {error}</p>}

          {!loading && !error && (
            <ul className="mt-2 divide-y divide-gray-100">
              {cities.map((city) => (
                <li key={city.name} className="py-2 flex items-center justify-between">
                  <span className="text-gray-800">
                    {WEATHER_ICONS[city.weathercode] ?? '🌡️'} {city.name}
                  </span>
                  <span className="text-gray-600">{Math.round(city.temperature)}°C</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
