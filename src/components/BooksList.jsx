import { useState } from "react"
import { InputGroup, Row, Form, Button, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

const BookList = (props) => {
  const [searchVal, setSearchVal] = useState("")
  const [selectedBookId, setSelectedBookId] = useState(null)

  const { books } = props

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value)
  }

  const handleBookSelect = (bookId) => {
    setSelectedBookId(bookId)
  }

  const filteredBooks =
    searchVal === ""
      ? books
      : books.filter((book) =>
          book.title.toLowerCase().includes(searchVal.toLowerCase()),
        )

  return (
    <Row>
      {/* search part */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by book title"
          aria-label="search"
          aria-describedby="basic-addon1"
          value={searchVal}
          onChange={handleSearchChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onChange={props.handleSearchClick}
        >
          Search
        </Button>
      </InputGroup>
      <Col xs={8}>
        <Row className="justify-content-center mt-3 pb-5 overflow-scroll vh-100">
          {/* render books part */}
          {filteredBooks.length === 0 ? (
            <div> No titles found. Try another search</div>
          ) : (
            filteredBooks.map((book) => (
              <SingleBook
                key={book.asin}
                {...book}
                selected={selectedBookId === book.asin}
                onSelect={handleBookSelect}
              />
            ))
          )}
        </Row>
      </Col>
      <Col
        className="mt-3"
        xs={4}
      >
        {!selectedBookId && <div>Select a book to see its comments</div>}
        {selectedBookId && <CommentArea elementId={selectedBookId} />}
      </Col>
    </Row>
  )
}

export default BookList
