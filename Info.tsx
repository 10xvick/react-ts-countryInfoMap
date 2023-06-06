import * as React from 'react';
import { useEffect, useState } from 'react';

function Info({country}) {
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountryData(country);
  }, []);

  const fetchCountryData = (countryName) => {
    setIsLoading(true);
    setError(null);

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch country data.');
        }
      })
      .then(data => {
        setCountryData(data[0]);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!countryData) {
    return null;
  }

  return (
    <div>
      <h1>{countryData.name.common}</h1>
      <p>Capital: {countryData.capital}</p>
      <p>Currency: {countryData.currencies[Object.keys(countryData.currencies)[0]].name}</p>
      <p>Population: {countryData.population}</p>
      <p>Latitude: {countryData.latlng[0]}</p>
      <p>Longitude: {countryData.latlng[1]}</p>
      <p>Language: {Object.values(countryData.languages)[0]}</p>
      <p>Area: {countryData.area} km²</p>
      <img src={countryData.flags.png} alt="Flag" style={{ width: '200px' }} />
    </div>
  );
}

export default Info;
