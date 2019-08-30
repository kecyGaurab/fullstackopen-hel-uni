import React from 'react'

const ShowTenCountries = ({filteredCountries}) =>{
    const tenCountries = filteredCountries.length > 1 && filteredCountries.length < 11 ?
    (filteredCountries.map(ten =>(
      
      <div key ={ten.name}>{ten.name}</div>
    ))):null
    return <div>{tenCountries}</div>
  }
  

export default ShowTenCountries
