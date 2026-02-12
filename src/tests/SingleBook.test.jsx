import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import SingleBook from "../components/SingleBook"

describe("SingleBook Component", () => {
  const mockProps = {
    asin: "B001",
    title: "Test Book Title",
    img: "https://example.com/book.jpg",
    price: 19.99,
    category: "Fantasy",
    selected: false,
  }

  it("should render book information correctly", () => {
    render(<SingleBook {...mockProps} />)

    expect(screen.getByText("Test Book Title")).toBeInTheDocument()
    expect(screen.getByText("€ 19.99")).toBeInTheDocument()
    expect(screen.getByText("Fantasy")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://example.com/book.jpg",
    )
  })

  it("should truncate long titles with ellipsis", () => {
    const longTitleProps = {
      ...mockProps,
      title: "This is a very long book title that exceeds forty characters",
    }
    render(<SingleBook {...longTitleProps} />)

    expect(
      screen.getByText("This is a very long book title that exce..."),
    ).toBeInTheDocument()
  })

  it("should apply border-danger class when selected", () => {
    const selectedProps = { ...mockProps, selected: true }
    render(<SingleBook {...selectedProps} />)

    const card = screen.getByText("Test Book Title").closest(".card")
    expect(card).toHaveClass("border-danger", "border-5")
  })

  it("should not apply border-danger class when not selected", () => {
    render(<SingleBook {...mockProps} />)

    const card = screen.getByText("Test Book Title").closest(".card")
    expect(card).not.toHaveClass("border-danger")
  })

  it("should render Buy button", () => {
    render(<SingleBook {...mockProps} />)

    const buyButton = screen.getByRole("button", { name: /buy/i })
    expect(buyButton).toBeInTheDocument()
    expect(buyButton).toHaveClass("btn-warning")
  })

  it("should format price to 2 decimal places", () => {
    const priceProps = { ...mockProps, price: 25.5 }
    render(<SingleBook {...priceProps} />)

    expect(screen.getByText("€ 25.50")).toBeInTheDocument()
  })
})
