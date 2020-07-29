import React from 'react';
import Conversor from './components/index';

import './style.css';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Conversor coinA="USD" coinB="BRL"/>
        <Conversor coinA="BRL" coinB="USD"/>
      </div>
      <div className="container">
        <Conversor coinA="PHP" coinB="BRL"/>
        <Conversor coinA="BRL" coinB="PHP"/>
      </div>
      <div className="container">
        <Conversor coinA="SVC" coinB="MXN"/>
        <Conversor coinA="MXN" coinB="SVC"/>
      </div>
    </div>
  );
}

export default App;
