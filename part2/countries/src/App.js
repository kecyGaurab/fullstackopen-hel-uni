import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import FilteredCountries from './Components/FilteredCountries';
import ShowCountries from './Components/ShowCountries';
import ShowTenCountries from './Components/ShowTenCountries';
import Manyresults from './Components/Manyresults';

const App = () => {
  const [country, setCountry] = useState ([]);
  const [searchTerm, setSearch] = useState ('');

  console.log ('country', country);

  //useEffect gets the data from api as long as the second parameter '[]' is empty
  useEffect (() => {
    axios.get ('https://restcountries.eu/rest/v2/all').then (response => {
      setCountry (response.data);
    });
  }, []);

  //event handle that sets search value that is input 
  const handleOnSearch = e => {
    setSearch (e.target.value);
  };

  //click event handler that takes in the value 
  //of the parent of button element and sets the search state to that name
  const handleClick = e => {
    setSearch (e.currentTarget.value);
  };

  //function that generates an array of countries that matches the user search input 
  const filteredCountries = country.filter (c => {
    if (searchTerm.length === 0) {
      return '';
    }
    return c.name.toLowerCase ().startsWith (searchTerm.toLowerCase ());
  });

  return (
    <div className="App">

      <FilteredCountries country={country} handleOnSearch={handleOnSearch} />
      <Manyresults filteredCountries={filteredCountries} />
      <ShowCountries filteredCountries={filteredCountries} />
      <ShowTenCountries
        filteredCountries={filteredCountries}
        handleClick={handleClick}
        country={country}
      />
    </div>
  );
};

export default App;
