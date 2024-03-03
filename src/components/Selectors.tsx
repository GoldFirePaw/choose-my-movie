import { DateSelector, DateSelectorProps } from "./DateSelector"
import { GenreSelector, GenreSelectorProps } from "./GenreSelector"

type SelectorsProps = GenreSelectorProps &
  DateSelectorProps & { currentYear: string }

export const Selectors = (props: SelectorsProps) => {
  const {
    setGenreId,
    genreId,
    selectedYear,
    setSelectedYear,
    setPage,
    currentYear,
  } = props

  const handleclick = () => {
    setGenreId(0)
    setSelectedYear(currentYear)
    setPage(1)
  }

  return (
    <>
      <GenreSelector
        setGenreId={setGenreId}
        genreId={genreId}
        setPage={setPage}
      />
      <DateSelector
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setPage={setPage}
      />
      <button onClick={handleclick}>Reset filters</button>
    </>
  )
}
