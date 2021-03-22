import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Container, Card, Title, Image, SubTitle, ViewSubTitle } from './style';

const FilmView = ({ match }) => {
  const [getFilmId, setFilmId] = useState([]);

  useEffect(() => {
    async function getFilm() {
      try {
        const dataFilm = await api.get(`${match.params.id}`);
        setFilmId(dataFilm.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [match.params.id]);

  return (
    <Container>
      <Card>
        <Title>{getFilmId.nome}</Title>
        <Image
          className="image-zoom"
          src={getFilmId.foto}
          alt={`${getFilmId}`}
        />
        <h3 style={{ alignText: 'center', marginTop: 45, color: '#f00' }}>
          Sinopse
        </h3>
        <ViewSubTitle>
          <SubTitle>{getFilmId.sinopse}</SubTitle>
        </ViewSubTitle>
      </Card>
    </Container>
  );
};

export default FilmView;
