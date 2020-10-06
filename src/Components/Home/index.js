import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import { List, ListContainer, AcessButton } from './styles';





const HomePage = () => {
    const [ films, setFilms ] = useState([]);

    useEffect(() => {
        async function getFilms(){
            try {
                const data = await api.get();
                setFilms(data.data);

            } catch (error) {
                console.log(error);
            }
        }
        getFilms();
    }, []);

    return(
        <>
            <h4>HomePage</h4>
                <ul>
                    {  
                        films.map((data) => {
                            return(
                                <ListContainer>
                                    <List key={data.id}>
                                        <h3>
                                            {data.nome}
                                        </h3>
                                        <img src={data.foto} alt="ImageApi" style={{marginTop: 20}} />
                                        <br />
                                        <AcessButton>Acess</AcessButton>
                                    </List>
                                </ListContainer>
                                )
                            })
                    }
                </ul>
        </>
    );
}

export default HomePage;