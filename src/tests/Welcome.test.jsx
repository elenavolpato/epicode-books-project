import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Welcome from "../components/Welcome"

describe("Welcome alert component", () => {
  it("should render the component Welcome correctly", () => {
    render(<Welcome />)

    expect(screen.getByText("Welcome to Epibooks")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Click on the yellow buttons on the top to view different categories",
      ),
    ).toBeInTheDocument()
  })
})
