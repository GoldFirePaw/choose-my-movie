import { DateSelector, DateSelectorProps } from "./DateSelector"
import { GenreSelector, GenreSelectorProps } from "./GenreSelector"
import s from "./Selectors.module.css"

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
    <div className={s.selectorsContainer}>
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
      <button className={s.resetSelectorsButton} onClick={handleclick}>
        Reset filters
      </button>
    </div>
  )
}
