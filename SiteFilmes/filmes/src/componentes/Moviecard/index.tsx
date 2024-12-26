import { Movie } from "@/types/movie"
import Rating from "../Rating"
import'./index.scss'

export interface props {
    movie: Movie
}


export default function Moviecard(props: props) {
    const movie = props.movie;
    return (
        <li className="movie-card">
            <div className="movie-poster">
                <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                     alt={movie.title}
                />
              </div>

            <div className="movie-info">
                    <p className="movie-title">
                        {movie.title}
                    </p>

                    {movie.vote_average > 0 && 
                        <Rating 
                        rating={movie.vote_average}
                   /> 
                    }
                        
            <div className="content">
                     {movie.overview &&
                    <p className="description">
                     {movie.overview.length > 100 
                        ? `${movie.overview.substring(0, 100)}...`
                        : movie.overview
                     } 
                    </p> 
                     }

                    <button className="but-default">
                        ver mais
                    </button>
            </div>  
        </div>  
        </li>
    )
}