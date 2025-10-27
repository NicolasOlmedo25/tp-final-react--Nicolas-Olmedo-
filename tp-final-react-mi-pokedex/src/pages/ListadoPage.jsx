import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'; // centra el contenido
import Form from 'react-bootstrap/Form'; //para el buscador 
import { PokemonCard } from '../components/PokemonCard';

export function ListadoPage() {
    // lista de pokemones
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState(''); //guardar el texo que escribe el usuario
    

    // llamada a la api
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();
                
                // guarda los pokemones en el listado
                setPokemons(data.results); 
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // mensaje mientras carga
    if (loading) {
        return (
            <main>
                <h1>Cargando Pokémon...</h1>
                <p>Consultando la PokeAPI, por favor espere.</p>
            </main>
        );
    }

    const filteredPokemons = pokemons.filter(pokemon => 
        
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) //compara las minusculas  
    );
    
    // renderizado
    return (
        <main className="container mt-4">
            <h1>Listado de Pokemons</h1>
        
            
            
            <p>Se cargaron {pokemons.length} pokemons de la primera generacion desde la PokeApi</p>

            {/* campo de busqueda*/}
            <Form.Group className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Buscar Pokémon..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </Form.Group>

            <div className="row">
                {filteredPokemons.map((pokemon, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                        <PokemonCard pokemon={pokemon} />
                    </div>
                ))}
            </div>
            

            
            
        </main>
    );
}