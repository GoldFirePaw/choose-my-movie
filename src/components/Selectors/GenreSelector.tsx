import React, { useState, useEffect } from "react"
import { getMovieGenres } from "../../apis/api/getMoviesGenresFromApi"
import s from "./selectors.module.css"

type Genre = {
  id: number
  name: string
}

export type GenreSelectorProps = {
  setGenreId: (id: number) => void
  genreId: number | undefined
  setPage: (value: number) => void
}

export const GenreSelector = ({
  setGenreId,
  genreId,
  setPage,
}: GenreSelectorProps) => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [genreName, setGenreName] = useState("")

  useEffect(() => {
    getMovieGenres()
      .then((data) => {
        setGenres(data.genres)
        if (genreId !== undefined) {
          const selectedGenre = data.genres.find(
            (genre) => genre.id === genreId
          )
          if (selectedGenre) {
            setGenreName(selectedGenre.name)
          }
        }
      })
      .catch((error) => {
        console.error("Impossible de charger les genres", error)
      })
  }, [])

  useEffect(() => {
    if (genreId !== undefined) {
      const selectedGenre = genres.find((genre) => genre.id === genreId)
      if (selectedGenre) {
        setGenreName(selectedGenre.name)
      } else {
        setGenreName("")
      }
    }
  }, [genres, genreId])

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(event.target.value, 10)
    setGenreId(id)
    setPage(1)
  }

  return (
    <>
      <select
        className={s.selectContainer}
        onChange={handleGenreChange}
        value={genreId || ""}
      >
        <option value="" disabled>
          Sélectionnez un genre
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </>
  )
}
