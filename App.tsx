import * as React from 'react';
import { useState } from 'react';
import Info from './Info';
import './style.css';

export default function App() {
  const [country,setCountry] = useState('india');

  return (
    <div>
      <Info country={country}/>
    </div>
  );
}
