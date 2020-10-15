import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import { Container, Card, Title, Image } from './style';






const FilmView = ({ match }) => {

    const [ getFilmId, setFilmId ] = useState([]);

    useEffect(() => {
        async function getFilm(){
            try{
                const dataFilm = await api.get(`${match.params.id}`);
                setFilmId(dataFilm.data);
            }catch(error){
                console.log(error);
            }
            
        }
        getFilm();
    }, [])

    return(
        <Container>
            <Card>
                <Title>{getFilmId.nome}</Title>
                <Image className="image-zoom" src={getFilmId.foto} alt={`${getFilmId}`} />
            </Card>
        </Container>
    );
}

export default FilmView;