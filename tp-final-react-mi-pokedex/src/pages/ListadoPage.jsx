import React, { useState, useEffect } from 'react';

export function ListadoPage() {
    // lista de pokemones
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

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

    // mensaje mientras carga
    if (loading) {
        return (
            <main>
                <h1>Cargando Pokémon...</h1>
                <p>Consultando la PokeAPI, por favor espere.</p>
            </main>
        );
    }
    
    // renderizado
    return (
        <main className="container mt-4">
            <h1>Listado de Pokémons</h1>
            
            
            <p>Se cargaron {pokemons.length} Pokémon desde la PokeApi</p>

            
            <div className="row">
                {/*mapeo*/}
                {pokemons.map((pokemon, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        {/*nombre del pokemon*/}
                        <div className="card p-2 text-center">
                            {pokemon.name}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}