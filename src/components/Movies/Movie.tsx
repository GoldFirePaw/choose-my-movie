import { Results } from "../../apis/api/getMoviesFromApi"
import s from "./movies.module.css"

type MovieProps = {
  movie: Results
}

export const Movie = (props: MovieProps) => {
  const { movie } = props
  const imageUrlBase = "https://image.tmdb.org/t/p/w500"

  return (
    <div key={movie.id} className={s.movieContainer}>
      <div className={s.movieHeader}>
        <img
          width={"100px"}
          src={`${imageUrlBase}${movie.poster_path}`}
          alt={`Affiche du film ${movie.title}`}
        />
        <h2>{movie.title}</h2>
      </div>
      <p>Date de sortie : {movie.release_date}</p>
      <p>Popularité : {movie.popularity}</p>
    </div>
  )
}
