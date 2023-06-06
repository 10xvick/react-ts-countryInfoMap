import * as React from 'react';
import { useState } from 'react';
import Info from './Info';
import './style.css';

export default function App() {
  const [country, setCountry] = useState('india');
  const [val, setval] = useState('india');

  return (
    <div className="">
      <div className="w-100 bg-light p-2 d-flex">
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setval(e.target.value);
          }}
          className="form-control"
        />
        <button onClick={() => setCountry(val)} className="btn">
          🔍
        </button>
      </div>
      {country && (
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <Info country={country} />
          </div>
        </div>
      )}
    </div>
  );
}
