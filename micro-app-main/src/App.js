import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from './pages/layout'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  )
};

export default App;