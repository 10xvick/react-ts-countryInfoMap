import * as React from 'react';
import { useState } from 'react';
import Info from './Info';
import './style.css';

export default function App() {
  const [country, setCountry] = useState('india');

  return (
    <div className="container">
      <div className="w-100 bg-light">abc</div>
      <div className="row">
        <div className="col-8">abc</div>
        <div className="col-4">
          <Info country={country} />
        </div>
      </div>
    </div>
  );
}
