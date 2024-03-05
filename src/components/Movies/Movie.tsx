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
          width={"150px"}
          src={`${imageUrlBase}${movie.poster_path}`}
          alt={`Affiche du film ${movie.title}`}
        />
        <div className={s.movieTitle}>{movie.title}</div>
      </div>
      <div className={s.movieInfo}>Date de sortie : {movie.release_date}</div>
      <div className={s.movieInfo}>Popularité : {movie.popularity}</div>
    </div>
  )
}
