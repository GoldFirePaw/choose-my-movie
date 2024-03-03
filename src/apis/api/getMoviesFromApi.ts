import { useEffect, useState } from "react"

type Results = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type MovieList = {
  page: number
  results: Results[]
  total_pages: number
  total_results: number
}

export function getMoviesFromApi(
  updatedPage: number,
  genreId?: number,
  releaseDate?: string
): Promise<MovieList> {
  const apiKey = "bd2c547ae43ebc0fe27758bcec8e4a11"
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${updatedPage}`

  if (genreId || releaseDate) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${updatedPage}`

    if (genreId) {
      url += `&with_genres=${genreId}`
    }

    if (releaseDate) {
      url += `&primary_release_year=${releaseDate}`
    }
  }

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) =>
      console.error("Erreur lors de la récupération des données", error)
    )
}

export const useMoviesFromApi = (
  page: number,
  genreId?: number,
  releaseDate?: string
) => {
  const [movies, setMovies] = useState<Results[]>([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const data = await getMoviesFromApi(page, genreId, releaseDate)
        setMovies(data.results)
        setTotalPages(data.total_pages)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [page, genreId, releaseDate])

  return { movies, loading, totalPages }
}
