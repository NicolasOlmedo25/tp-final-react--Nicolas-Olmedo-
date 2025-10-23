import React from 'react';
import ReactDOM from 'react-dom/client';
// enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// paginas
import { HomePage } from './pages/HomePage';
import { ListadoPage } from './pages/ListadoPage';
import { DetallePage } from './pages/DetallePage';

// definicion de rutas
function App() { 
  return (
    <BrowserRouter> 
        <Routes>  
            <Route path="/" element={<HomePage />} />
            <Route path="/listado" element={<ListadoPage />} />
            <Route path="/pokemon/:id" element={<DetallePage />} />
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> 
        </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
);