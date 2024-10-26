// Importar librerías necesarias
import React, { useState, useEffect } from 'react';
import Movies from './movies';
import data from '../DB';

function Home() {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const moviesPerPage = 10;

    // Simulación de datos de películas
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        setMovies(data);
        setFilteredMovies(data);
    };

    // Filtrar películas por título, descripción, director o fecha
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setPage(1);
        if (term) {
            const filtered = movies.filter(movie => 
                movie.title.toLowerCase().includes(term) ||
                movie.description.toLowerCase().includes(term) ||
                movie.director.toLowerCase().includes(term) ||
                movie.releaseDate.includes(term)
            );

            setFilteredMovies(filtered);
        } else {
            setFilteredMovies(movies);
        }
    };

    // Paginación
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const currentMovies = filteredMovies.slice((page - 1) * moviesPerPage, page * moviesPerPage);


    return (
        <div className='main'>
            <section class="featured-movie">
                <div class="container">
                    <div class="movie-poster">
                        <img src="images/mortal.jpeg" alt="Mortal Kombat (2021)"/>
                    </div>
                    <div class="movie-info">
                        <h2>Mortal Kombat (2021)</h2>
                        <p>MMA fighter Cole Young Cole Young busca a los mejores campeones de la Tierra para enfrentarse a los enemigos de Outworld en una batalla de alto riesgo por el universo.</p>
                        <button class="watch-now"> VER AHORA </button>
                    </div>
                </div>
            </section>
            
            {<Movies/>}

            
        </div>
    );
}

export default Home;