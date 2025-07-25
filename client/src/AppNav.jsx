import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Graficos from './components/Graficos';
import Cartas from './pages/Cartas';
import Configuracoes from './pages/Configuracoes';

function AppNav() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Inicio/>} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/cartas" element={<Cartas />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default AppNav;