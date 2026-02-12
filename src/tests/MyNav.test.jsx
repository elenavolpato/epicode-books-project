import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MyNav from "../components/MyNav"

describe("Navigation bar component", () => {
  it("should render the component MyNav correctly", () => {
    render(<MyNav />)

    expect(screen.getByText("Epibooks")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("Browse")).toBeInTheDocument()
  })
})
