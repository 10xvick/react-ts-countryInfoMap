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
      <h1 className='text-center text-uppercase'>{countryData.name.common}</h1>
      <img src={countryData.flags.png} alt="Flag" style={{ width: '200px' }} />
      
      <p><span className='fw-bold'>Capital:</span> {countryData.capital}</p>
      <p>
        <span className='fw-bold'>Currency</span> : {countryData.currencies[Object.keys(countryData.currencies)[0]].name}</p>
      <p>
        <span className='fw-bold'>Population</span> : {countryData.population}</p>
      <p>
        <span className='fw-bold'>Latitude</span> : {countryData.latlng[0]}</p>
      <p>
        <span className='fw-bold'>Longitude</span> : {countryData.latlng[1]}</p>
      <p>
        <span className='fw-bold'>Language</span> : {Object.values(countryData.languages).join(', ')}</p>
      <p>
        <span className='fw-bold'>Area:</span> : {countryData.area} km²</p>
    </div>
  );
}

export default Info;
