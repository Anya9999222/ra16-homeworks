import { useState } from 'react'
import useJsonFetch from './components/hooks/useJsonFetch'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataComponent from './components/DataComponent'
import { useEffect } from 'react'
function App() {
  // const [data, setData] = useState()
  // // const [data, loading, error] = useJsonFetch(url, opts)
  // useEffect(() => {
  //   fetch('http://localhost:7070/data', {
  //     method: 'GET'
  //   })
  //   .then((res) => res.json())
  //   .then((result) => setData(result))
  //   console.log(data)
  // }, []);
  // console.log(data)
  return (
    <>

      <DataComponent/>
    </>
  )
}

export default App
