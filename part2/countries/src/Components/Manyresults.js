import React from 'react'

const Manyresults = ({filteredCountries})=> {
   const msg= filteredCountries.length > 10?
    <div>Too many matches, specify another filter</div>
    : null

    return (
        <div>
           {msg} 
        </div>
    )
}

export default Manyresults
