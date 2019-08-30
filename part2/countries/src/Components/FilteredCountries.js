import React from 'react'

const FilteredCountries = ({handleOnSearch,searchTerm}) => {
    return (
        <div>
        Find countries <input
            value={searchTerm}
            onChange={handleOnSearch}
            />
        </div>
    )
}

export default FilteredCountries;