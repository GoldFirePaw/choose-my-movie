import React, { useState } from "react"
import { useMoviesFromApi } from "../apis/api/getMoviesFromApi"
import { Selectors } from "../components/Selectors/Selectors"
import { Movies } from "../components/Movies/Movies"

export const Home = () => {
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
        <Movies movies={movies} />
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
