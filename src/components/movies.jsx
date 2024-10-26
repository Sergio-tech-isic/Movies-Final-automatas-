// Importar librerías necesarias
import React, { useState, useEffect } from 'react';
import data from '../DB';
import "./movies.css"
import "./card.css"

function Movies() {
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
            const filtered = movies.filter(
                movie => 
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

    const filtrarFechasPorRango = (e) => {
        e.preventDefault();
        
        const fechaInicio = new Date(document.getElementById("start-date").value);
        const fechaFin = new Date(document.getElementById("end-date").value);

        if (fechaInicio && fechaFin) {
            const filtrados = movies.filter(movie => {
                const fechaActual = new Date(movie.releaseDate);
                return fechaActual >= fechaInicio && fechaActual <= fechaFin;
            });

            setFilteredMovies(filtrados);
            setPage(1); // Reiniciar a la primera página de resultados
        }
    };

    // Paginación
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    const currentMovies = filteredMovies.slice((page - 1) * moviesPerPage, page * moviesPerPage);


    return (
        <div className='main'>
            <div className="App">
                <h1>Películas</h1>
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <br />
                <div className="tarjeta">
                    <div className="fechas">
                        <strong>Peliculas entre fechas</strong>
                        <form onSubmit={filtrarFechasPorRango}>
                            <label htmlFor="start-date">Fecha inicio:</label>
                            <input type="date" id="start-date"/>
                            <label htmlFor="end-date">Fecha final:</label>
                            <input type="date" id="end-date"/>
                            <button type="submit" className='watch-now'>Buscar por fecha</button>
                        </form>
                    </div>
                </div>
                


                <div className="grid">
                    {currentMovies.map(movie => (
                        <a  href={`/show/${movie.id}`} target="_self" key={movie.id} >
                            <div className="card" key={movie.id}>
                            <img src={movie.image} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            </div>
                        </a>
                        
                    ))}
                </div>


                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => setPage(index + 1)}>
                            {index + 1}
                        </button>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movies;