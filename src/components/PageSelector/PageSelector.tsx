import s from "./pageSelector.module.css"

type PageSelectorProps = {
  setPage: (value: number) => void
  page: number
  totalPages: number
}

export const PageSelector = (props: PageSelectorProps) => {
  const { setPage, page, totalPages } = props
  const handlePreviousPage = () => {
    setPage(Math.max(1, page - 1))
  }

  const handleNextPage = () => {
    setPage(Math.min(totalPages, page + 1))
  }
  return (
    <div className={s.buttonsContainer}>
      <button
        className={s.pageButton}
        onClick={handlePreviousPage}
        disabled={page === 1}
      >
        Précédent
      </button>
      <button
        className={s.pageButton}
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Suivant
      </button>
    </div>
  )
}
