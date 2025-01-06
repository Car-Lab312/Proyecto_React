import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Digimon } from './components/CRUD_digimoncomponent';
import { Menu } from './components/Menu_principal';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Menu />
    </PrimeReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
