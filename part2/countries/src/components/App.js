import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'


//Input field where countries can be searched
const FilterCountries = (props) => {
  return (<div>Find countries <input value={props.filteredValue} onChange={props.handleFilter}></input></div>)
}


//Component that gets value from input and renders the matching value against countries
const ShowCountry = (props) => {
  // console.log('props.country', props.country)
 //
  const filteredCountries = props.country.filter(c => {
    if (props.filteredValue.length === 0) {
      return ''
    }
    
    return c.name.toLowerCase().startsWith(props.filteredValue.toLowerCase());
  }).map(coun => (
    <div key={coun.numericCode}>
      <h1>{coun.name}</h1>
      <p>Area: {coun.area}</p>
      <p>Capital: {coun.capital}</p>
      <div>Currencies: {coun.currencies[0].name}</div>


    </div>
  ))
 
  //console.log('filteredCountries', filteredCountries)
  return <div>{filteredCountries}</div>

}

const App = () => {
  const [country, setCountry] = useState([]);
  const [filteredValue, setFilter] = useState('');

  //useEffect gets the data from api as long as the second parameter '[]' is empty
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountry(response.data)
      })
  }, [])

  console.log('countries after state updated', country)

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  console.log('filteredValue', filteredValue)







  return (
    <div className="App">
      <FilterCountries country={country} handleFilter={handleFilter} />
      <ShowCountry country={country} filteredValue={filteredValue} />

    </div>
  );
}

export default App;
