import React from 'react'
import './country.css'

const Country = (props) => {
    const { country } = props
  const { name, flags, area, population, capital } = country
  const handleRemove = (name) => {
    props.onRemoveCty(name)
  }
  return (
      <article className='country'>
          <div>
              <img src={flags.png} alt={name.common} className='flag' />
              <h3>Name:{name.common}</h3>
              <h3>Capital:{capital}</h3>
              <h3>Population:{population}</h3>
        <h3>Area:{area}</h3>
        <button className="btn" onClick={() => {
          handleRemove(name.common)
        }}>Remove Country</button>
          </div>
    </article>
  )
}

export default Country