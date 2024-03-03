export const getMovieGenres = (): Promise<{
  genres: { id: number; name: string }[]
}> => {
  const apiKey = "bd2c547ae43ebc0fe27758bcec8e4a11"
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
