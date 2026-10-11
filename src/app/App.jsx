import { useState, useCallback } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './app.routes'
import SiteLoader from '../components/SiteLoader'

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <SiteLoader onComplete={handleLoaderComplete} />}
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
