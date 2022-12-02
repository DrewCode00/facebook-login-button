import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookLoginComponent from './facebooklogin.component';


function App() {
  return (
    <div className="App">
      <h1>Facebook Login in React App</h1>
      <FacebookLoginComponent />

    </div>
  );
}

export default App;
