import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/CardContext";
import { AddonsProvider } from "./context/AddonsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <CardProvider>
  <AddonsProvider>
    <App />
  </AddonsProvider>
  </CardProvider>
  </BrowserRouter>
  </React.StrictMode>
);

