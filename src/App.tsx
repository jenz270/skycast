import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import WeatherDetails from "./pages/WeatherDetails"

function App() {
  return (
    <div className="app bg-darkGreen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather-details/:locationString' element={<WeatherDetails />} />
      </Routes>
    </div>
  )
}

export default App
