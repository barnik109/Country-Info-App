import React, { useEffect, useState } from 'react'
import Countries from './components/Countries';
import './App.css'
import Search from './components/Search';
const url = "https://restcountries.com/v3.1/all";


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])
  const [filteredCts,setFilteredCts]=useState(countries)

  

  const fetchData = async(url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setIsLoading(false)
      setCountries(data)
      setFilteredCts(data)
      setError(null)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  const handleRemoveCty = (name) => {
    const filter = filteredCts.filter((country) => country.name.common !== name)
    setFilteredCts(filter)
  }

  const handleSearch = (searchVal) => {
    const value = searchVal.toLowerCase()
    const newCts = countries.filter((country) => {
      const cty = country.name.common.toLowerCase()
      return cty.startsWith(value)
    })
    setFilteredCts(newCts)
  }
  
  useEffect(() => {
    fetchData(url)
  }, [])
  

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading ....</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCts} onRemove={handleRemoveCty} />}
    </>
  );
}

export default App;
