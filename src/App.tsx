import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [version, setVersion] = useState('')

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
    </div>
  )
}

export default App
