import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// componentes de la pagina
import { HomePage } from './pages/HomePage';
import { ListadoPage } from './pages/ListadoPage';
import { DetallePage } from './pages/DetallePage';

// 2. componente reutilizable
import { Header } from './components/header'; 

// app
function App() { 
  return (
    <BrowserRouter> 
    
        <Header /> 
        
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/listado" element={<ListadoPage />} />
            <Route path="/pokemon/:id" element={<DetallePage />} />
            <Route path="*" element={<h1>404 - ¡Pokémon no encontrado!</h1>} /> 
        </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);