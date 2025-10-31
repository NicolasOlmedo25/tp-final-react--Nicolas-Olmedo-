import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // este hook obbtiene parametros de la url
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
        case 'fire': return '#FD7D24';
        case 'grass': return '#9BCC50';
        case 'water': return '#4592C4';
        case 'bug': return '#729F36';
        case 'normal': return '#A4ACAF';
        case 'poison': return '#B97FC9';
        case 'electric': return '#eed535';
        case 'ground': return '#F7DE3F';
        case 'fairy': return '#FDB9E9';
        case 'fighting': return '#D56723';
        case 'psychic': return '#F366B9';
        case 'rock': return '#A38C21';
        case 'steel': return '#9EB7B8';
        case 'ice': return '#51C4E7';
        case 'ghost': return '#7B62A3';
        case 'dragon': return '#38a8e3';
        default: return '#6D6D6D'; 
    }
};

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
        <div className="detalle-background"> 
            
            
            <Card 
                style={{ maxWidth: '400px' }} 
                // Añadimos una sombra más pronunciada y un borde redondeado
                className="shadow-xl rounded-4 mx-auto mt-5 mb-5" 
            >
                <Card.Img 
                    variant="top" 
                    src={imageUrl} 
                    alt={pokemonData.name} 
                    // Color de fondo más neutro y borde superior redondeado
                    style={{ backgroundColor: '#e9ecef', borderTopLeftRadius: '0.3rem', borderTopRightRadius: '0.3rem', padding: '15px' }}
                />
                <Card.Body className="text-center">
                    <Card.Title style={{ 
                        textTransform: 'capitalize', 
                        fontSize: '2.5em', // Hacemos el título más grande
                        fontWeight: 'bold', // Y más audaz
                        color: '#343a40' // Color oscuro
                    }}>
                        #{pokemonData.id} - {pokemonData.name}
                    </Card.Title>
                    
                    <hr />

                    {/* Tipos */}
                    <p>
                        {pokemonData.types.map((typeInfo, index) => (
                            <Badge 
                                key={index} 
                                
                                className="me-2 text-uppercase fw-bold"
                                style={{ 
                            
                                    backgroundColor: getTypeColor(typeInfo.type.name),
                                    color: 'white',
                                    padding: '0.5em 0.8em' 
                                }}
                            >
                                {typeInfo.type.name}
                            </Badge>
                        ))}
                    </p>
                    
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-muted">Altura:</span> 
                            <span className="text-primary">{pokemonData.height / 10} m</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span className="fw-bold text-muted">Peso:</span> 
                            <span className="text-primary">{pokemonData.weight / 10} kg</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fw-bold d-block mb-2 text-muted">Habilidades:</span> 
                            {pokemonData.abilities.map(abilityInfo => 
                                <Badge 
                                    key={abilityInfo.ability.name} 
                                    bg="success" 
                                    className="ms-2 mt-1" 
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {abilityInfo.ability.name}
                                </Badge>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            
        </div> 
    );
}
    
