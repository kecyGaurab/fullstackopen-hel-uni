import React from 'react';


//component that list the details of the country
const ShowCountries = ({filteredCountries}) => {
  const countryCard = filteredCountries.length === 1
    ? <div key={filteredCountries[0].numericCode}>
        <h1>{filteredCountries[0].name}</h1>
        <div>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>population: {filteredCountries[0].population}</p>
        </div>
        <h2>languages</h2>
        <div>
          {filteredCountries[0].languages.map (lan => (
            <li key={lan.name}>{lan.name}</li>
          ))}
        </div>
        <div>
          <img width="100" alt="flag" src={filteredCountries[0].flag} />
        </div>
      </div>
    : null;
  return (
    <div>
      {countryCard}
    </div>
  );
};

export default ShowCountries;
