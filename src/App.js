import React, {Component} from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import logo from './logo.svg';
import './App.css';
function App() {
      return (
  <div>
   <JumboTronComponent /> 
 <Products />
  </div>
  );
}
export default App;
