import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'; // <--- Importar Button
import { Link } from 'react-router-dom';


export function HomePage() {
    return (
        <main className="home-background">
            <div className="home-text-container">
                <h1>Bienvenido a la PokeDex Lite</h1>
                <h2>Creada con React y Vite</h2>
                <p>Esta aplicacion es sobre el mundo de los pokemon, aqui se encuentra la informacion sobre todos los pokemons de la primera generacion (por ahora), que lo disfrutes.</p>
            </div>
            <Button 
                        as={Link}          
                        to="/listado"      
                        size="lg"          
                        className="mt-4 shadow-lg fw-bold shine-on-hover boton-home"
                    >
                       ¡ Tu aventura comienza aqui !
                    </Button>
        </main>
    );

    
}        
