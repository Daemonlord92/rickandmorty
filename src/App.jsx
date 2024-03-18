import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Define an async functionw called fecthData
    async function fetchData() {
      //Fetch Data from the API
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const {results} = await result.json()
      //Update the state of the component with the results array
      setData(results);
      setLoading(false);
    }
    //Call the fetchData
    fetchData();
  }, [])

  console.table(data);

  return (
    <>
      <h1 className='app-title'>Rick and Morty</h1>
      {loading ? (<div>Loading...</div>):(
        <List data={data} />
      )}
    </>
  )
}

export default App
