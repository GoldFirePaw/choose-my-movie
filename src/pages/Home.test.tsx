import { render, screen } from "@testing-library/react"
import { Home } from "./Home"

describe("Home page", () => {
  it("should display the Home page", () => {
    render(<Home />)
    expect(screen.getByText("Chargement des films...")).toBeInTheDocument()
  })
})
