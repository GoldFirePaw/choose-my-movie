import { Results } from "../../apis/api/getMoviesFromApi"
import { Movie } from "./Movie"
import s from "./movies.module.css"

type MoviesProps = {
  movies: Results[]
}

export const Movies = (props: MoviesProps) => {
  const { movies } = props
  return (
    <div className={s.moviesContainer}>
      {movies && movies.map((movie) => <Movie movie={movie} />)}
    </div>
  )
}
