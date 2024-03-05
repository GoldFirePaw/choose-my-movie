import React, { useState } from "react"
import { useMoviesFromApi } from "../apis/api/getMoviesFromApi"
import { SelectorsContainer } from "../components/Selectors/SelectorsContainer"
import { Movies } from "../components/Movies/Movies"
import s from "./home.module.css"
import { PageSelector } from "../components/PageSelector/PageSelector"
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle"

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

  if (loading) {
    return <div>Chargement des films...</div>
  }

  return (
    <div className={s.container}>
      <SelectorsContainer
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
      <PageSelector totalPages={totalPages} setPage={setPage} page={page} />
      <ThemeToggle />
    </div>
  )
}
