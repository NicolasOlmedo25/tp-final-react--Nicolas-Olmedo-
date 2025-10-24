
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export function PokemonCard({ pokemon }) {
    
    const urlParts = pokemon.url.split('/');
    const id = urlParts[urlParts.length - 2]; 

    // fotos originales de pokemon
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.padStart(3, '0')}.png`;

    return (
        <Card className="text-center shadow-sm">
            <Card.Img 
                variant="top" 
                src={imageUrl} 
                alt={`Imagen de ${pokemon.name}`} 
                style={{ width: '96px', margin: '10px auto' }}
            />
            <Card.Body>
                {/* mayuscula a la primer letra */}
                <Card.Title style={{ textTransform: 'capitalize' }}>
                    {pokemon.name}
                </Card.Title>
                
                {/* boton que te lleva a la pagina de detalle */}
                <Button 
                    as={Link} 
                    to={`/pokemon/${id}`} 
                    variant="danger" 
                    style={{ backgroundColor: '#ef5350', border: 'none' }}
                >
                    Ver Detalle
                </Button>
            </Card.Body>
        </Card>
    );
}