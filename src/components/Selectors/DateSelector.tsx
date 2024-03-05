import React from "react"
import s from "./selectors.module.css"

export type DateSelectorProps = {
  setSelectedYear: (id: string) => void
  selectedYear: string | undefined
  setPage: (value: number) => void
}

export const DateSelector = ({
  selectedYear,
  setSelectedYear,
  setPage,
}: DateSelectorProps) => {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value)
    setPage(1)
  }

  const years = []
  for (let year = 2026; year >= 1930; year--) {
    years.push(year.toString())
  }

  return (
    <div>
      <select
        className={s.selectContainer}
        value={selectedYear}
        onChange={handleYearChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}
