import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Importamos las herramientas de enrutamiento
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importamos los componentes de página que acabamos de crear
import { HomePage } from './pages/HomePage';
import { ListadoPage } from './pages/ListadoPage';
import { DetallePage } from './pages/DetallePage';

// Componente principal que define las rutas (App.jsx)
function App() { 
  return (
    <BrowserRouter> 
        {/* Aquí iría el componente reutilizable (ej. un Navbar) */}
        <Routes> 
            {/* Ruta principal (Home) */}
            <Route path="/" element={<HomePage />} />
            
            {/* Ruta de Listado */}
            <Route path="/listado" element={<ListadoPage />} />
            
            {/* Ruta de Detalle (Ruta Dinámica con el parámetro :id) */}
            <Route path="/pokemon/:id" element={<DetallePage />} />

            {/* Manejo de errores 404 */}
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