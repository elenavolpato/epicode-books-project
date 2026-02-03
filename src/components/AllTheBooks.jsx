import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

const categories = [
  { id: 1, label: "Fantasy", data: fantasy, variant: "primary" },
  { id: 2, label: "History", data: history, variant: "secondary" },
  { id: 3, label: "Horror", data: horror, variant: "danger" },
  { id: 4, label: "Romance", data: romance, variant: "info" },
  { id: 5, label: "Sci-fi", data: scifi, variant: "success" },
]

const AllTheBooks = function () {
  const [books, setBooks] = useState(fantasy)

  return (
    <Container bg="dark" data-bs-theme="dark">
      <Row className="gap-2 my-2">
        {categories.map((cat) => (
          <Button key={cat.id} className={`${books === cat.data ? "fw-bold fs-5 border " : ""} col`} variant={cat.variant} onClick={() => setBooks(cat.data)}>
            {cat.label}
          </Button>
        ))}
      </Row>
      <Row className="justify-content-center mt-3 pb-5">
        {books.map((book) => {
          return (
            <Col className="text-center mb-4 " xs={6} xl={3} key={book.id}>
              <Card style={{ width: "18rem", height: "600px" }} className="shadow">
                <Card.Img variant="top" src={book.img} className="book-img" />
                <Card.Body className="d-inline-flex flex-column justify-content-end align-items-center">
                  <Card.Title>{book.title.length > 40 ? book.title.slice(0, 40) + "..." : book.title}</Card.Title>
                  <Card.Text className="fs-4 fw-bold">€ {book.price.toFixed(2)}</Card.Text>
                  <Button variant="info" className="px-5">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks
