import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // este hook obbtiene parametros de la url
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export function DetallePage() {
    // obtener el id a traves de la  url
    const { id } = useParams(); 
    
    const [pokemonData, setPokemonData] = useState(null); 
    const [loading, setLoading] = useState(true);

    // esto se ejecuta cuando ya tiene el id
    useEffect(() => {
        const fetchPokemonDetail = async () => {
            setLoading(true);
            try {
                // trae un solo pokemon con el id
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                
                setPokemonData(data); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Pokémon detail:", error);
                setLoading(false);
                setPokemonData(null); 
            }
        };

        if (id) {
            fetchPokemonDetail();
        }
    }, [id]); // cambia cuando cambia el id

    // renderizado
    if (loading) {
        return <main className="container mt-5"><h1>Cargando detalles de Pokémon...</h1></main>;
    }

    if (!pokemonData) {
        return <main className="container mt-5"><h1>Error 404: Pokémon no encontrado.</h1></main>;
    }

    // imagen
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(3, '0')}.png`;

    // ultimo renderizado
    return (
        <main className="container mt-5">
            <Card style={{ maxWidth: '400px', margin: '0 auto' }} className="shadow-lg">
                <Card.Img 
                    variant="top" 
                    src={imageUrl} 
                    alt={pokemonData.name} 
                    style={{ backgroundColor: '#f0f0f0' }}
                />
                <Card.Body className="text-center">
                    <Card.Title style={{ textTransform: 'capitalize', fontSize: '2em' }}>
                        #{pokemonData.id} - {pokemonData.name}
                    </Card.Title>
                    
                    <hr />

                    {/* Tipos */}
                    <p>
                        {pokemonData.types.map((typeInfo, index) => (
                            <Badge 
                                key={index} 
                                bg="secondary" 
                                className="me-2"
                                style={{ 
                                    textTransform: 'uppercase', 
                                    backgroundColor: (typeInfo.type.name === 'fire' ? '#FD7D24' : '#6A8FBC') // Ejemplo de color básico
                                }}
                            >
                                {typeInfo.type.name}
                            </Badge>
                        ))}
                    </p>
                    
                    <ListGroup variant="flush">
                        <ListGroup.Item>Altura: {pokemonData.height / 10} m</ListGroup.Item>
                        <ListGroup.Item>Peso: {pokemonData.weight / 10} kg</ListGroup.Item>
                        <ListGroup.Item>
                            Habilidades: 
                            {pokemonData.abilities.map(abilityInfo => 
                                <Badge key={abilityInfo.ability.name} bg="info" className="ms-2" style={{ textTransform: 'capitalize' }}>
                                    {abilityInfo.ability.name}
                                </Badge>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </main>
    );
}