import * as React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const WorldMap = () => {
  const countriesData = [
    // Country data containing name, population, and area
    { name: 'Country 1', population: 1000000, area: 500000 },
    { name: 'Country 2', population: 2000000, area: 800000 },
    // Add more country data as needed
  ];

  const onCountryHover = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
    layer.bindTooltip(`${layer.feature.properties.name}`);
  };

  const onCountryClick = (e) => {
    const countryData = countriesData.find(
      (country) => country.name === e.target.feature.properties.name
    );
    if (countryData) {
      alert(`Population: ${countryData.population}\nArea: ${countryData.area}`);
    }
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <GeoJSON
        data="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
        style={() => ({
          color: '#333',
          weight: 1,
          fillOpacity: 0.3
        })}
        onEachFeature={(feature, layer) => {
          layer.on({
            mouseover: onCountryHover,
            mouseout: (e) => {
              e.target.setStyle({
                color: '#333',
                weight: 1,
                fillOpacity: 0.3
              });
            },
            click: onCountryClick
          });
        }}
      />
    </MapContainer>
  );
};

export default WorldMap;
