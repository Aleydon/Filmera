import React, { useEffect, useState } from 'react';
import api from '../../Services/api';




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
                                <li key={data.id}>{data.nome}
                                    <img src={data.foto} alt="ImageApi" />
                                    <br />
                                </li>
                                )
                            })
                    }
                </ul>
        </>
    );
}

export default HomePage;