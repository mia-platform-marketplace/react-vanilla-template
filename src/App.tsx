import { Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
