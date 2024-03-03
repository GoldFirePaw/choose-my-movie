import React, { useState } from "react"
import { useMoviesFromApi } from "../apis/api/getMoviesFromApi"
import { Selectors } from "../components/Selectors"

export const Home = () => {
  const imageUrlBase = "https://image.tmdb.org/t/p/w500"
  const [page, setPage] = useState(1)
  const [genreId, setGenreId] = useState<number | undefined>(undefined)
  const currentYear = new Date().getFullYear().toString()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const { movies, loading, totalPages } = useMoviesFromApi(
    page,
    genreId,
    selectedYear
  )

  const handlePreviousPage = () => {
    setPage(Math.max(1, page - 1))
  }

  const handleNextPage = () => {
    setPage(Math.min(totalPages, page + 1))
  }

  console.log("HOMEEEE")

  if (loading) {
    console.log("Loading")
    return <div>Chargement des films...</div>
  }

  return (
    <>
      <Selectors
        setGenreId={setGenreId}
        setPage={setPage}
        genreId={genreId}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        currentYear={currentYear}
      />
      <div>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img
                width={"100px"}
                src={`${imageUrlBase}${movie.poster_path}`}
                alt={`Affiche du film ${movie.title}`}
              />
              <p>Date de sortie : {movie.release_date}</p>
              <p>Popularité : {movie.popularity}</p>
            </div>
          ))}
      </div>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Précédent
      </button>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Suivant
      </button>
    </>
  )
}
