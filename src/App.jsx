import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App