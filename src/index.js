import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';

function App() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Hello, world!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

