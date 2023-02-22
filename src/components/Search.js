import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchData, setSearchData] = useState("")
    
    const handleChange = (e) => {
        setSearchData(e.target.value)
    }
    useEffect(() => {
        props.onSearch(searchData)
    },[searchData])
  return (
      <div style={{textAlign:'center'}}>
          <input type="text" placeholder='Search' value={searchData} onChange={handleChange} />
    </div>
  )
}

export default Search