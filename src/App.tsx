import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from '@tanstack/react-router'

const App = () => {
  const [version, setVersion] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const ver = await window.electronAPI.getAppVersion()
      setVersion(ver)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>App Version: {version}</h1>
      <button
        onClick={() => {
          navigate({ to: "/about" })
        }}
      >
        Go to About
      </button>
    </div>
  )
}

export default App
