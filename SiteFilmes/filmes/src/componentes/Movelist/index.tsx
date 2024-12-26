'use client';

import { useState, useEffect } from "react";
import "./index.scss";
import axios from "axios";
import { Movie } from "@/types/movie";
import Moviecard from "../Moviecard";

export default function Movelist() {
  const [movies, setmovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const [pontos, setpontos] = useState<string>("");

  useEffect(() => {
    getmovies();

    
    const interval = setInterval(() => {
      setpontos((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval); 
  }, []);

  const getmovies = async () => {
    try {
      setIsLoading(true);  
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: '43f311699c01dc42bf41804dfd531fc6',
          language: 'pt-BR',
        },
      });
      setmovies(response.data.results || []); 
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setmovies([]); 
    } finally {
      setIsLoading(false); 
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <p>Carregando{pontos}</p>
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
