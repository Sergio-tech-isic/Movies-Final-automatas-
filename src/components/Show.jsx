import React from "react";
import { useParams } from "react-router-dom";
import data from "../DB";

function Show (){
    const {movieId} = useParams();
    const currentMovie = data.filter(movie =>
        movie.id == movieId
    );
    
    return(
        <div className="">
                    {currentMovie.map(movie => (
                        <div className="card" key={movie.id}>
                            <img src={movie.image} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            
                            <p>{movie.description}</p>
                            <p>Director: 
                                {movie.director}</p>
                            <p>Fecha de lanzamiento: 
                                {movie.releaseDate}</p>
                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={index < movie.rating ? 'filled' : ''}>★</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
        
    );

}

export default Show;