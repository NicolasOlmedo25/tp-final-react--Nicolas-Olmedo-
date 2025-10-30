import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'; // centra el contenido
import Form from 'react-bootstrap/Form'; //para el buscador 
import { PokemonCard } from '../components/PokemonCard';
import Spinner from 'react-bootstrap/Spinner'; 
import Alert from 'react-bootstrap/Alert';     

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
            
            <Alert variant="info" className="text-center mt-5 mx-auto" style={{ maxWidth: '400px' }}>
                <div className="d-flex justify-content-center align-items-center">
                    {/* spinner */}
                    <Spinner animation="border" variant="info" role="status" className="me-3" />
                    <div>
                        {/* mensaje */}
                        <h4 className="mb-1">Cargando la PokeDex...</h4>
                        <p className="mb-0">Consultando la PokeAPI, por favor espere.</p>
                    </div>
                </div>
            </Alert>
        );
    }

    const filteredPokemons = pokemons.filter(pokemon => 
        
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) //compara las minusculas  
    );
    
    // renderizado
    return (
        <main className="listado-background">
            <h1 className='text-center'>Listado de Pokemons</h1>
        
            
            
            <h5 className='text-center'>Se cargaron {pokemons.length} pokemons de la primera generacion desde la PokeApi</h5>

           <div style={{ maxWidth: '600px' }} className="mx-auto">
                <Form.Group className="mb-4 w-100">
                    <Form.Control
                        type="text"
                        placeholder="Buscar Pokémon..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Form.Group>
            </div>
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