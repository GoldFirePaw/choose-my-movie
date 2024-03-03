import React from "react"

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
      <label htmlFor="year-selector">Sélectionnez une année : </label>
      <select
        id="year-selector"
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
