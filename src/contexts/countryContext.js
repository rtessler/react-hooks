import React, { createContext, useState, useEffect } from 'react';

export const CountryContext = createContext()

const CountryContextProvider = (props) => {
    
    const [countries, setCountries] = useState([])

    
    useEffect(() => {

        const url = 'https://restcountries.eu/rest/v2/all'

        fetch(url)
        .then(response => response.json())
        .then(res => setCountries(res));

    }, [])

    return (
        <CountryContext.Provider value={{countries}}>
            {props.children}
        </CountryContext.Provider>
    )
 }

 export default CountryContextProvider