export const getMovieGenres = (): Promise<{
  genres: { id: number; name: string }[]
}> => {
  const apiKey = process.env.API_KEY
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur réseau")
      }
      return response.json()
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des genres", error)
      throw error
    })
}
