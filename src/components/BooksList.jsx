import { Component } from "react"
import { InputGroup, Row, Form, Button, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    searchVal: "",
    selectedBookId: null,
  }

  handleSearchChange = (e) => {
    this.setState({ searchVal: e.target.value })
  }

  handleBookSelect = (bookId) => {
    this.setState({ selectedBookId: bookId })
  }
  render() {
    const { books } = this.props
    const { searchVal, selectedBookId } = this.state

    const filteredBooks =
      searchVal === ""
        ? books
        : books.filter((book) =>
            book.title.toLowerCase().includes(searchVal.toLowerCase()),
          )

    return (
      <Row>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by book title"
            aria-label="search"
            aria-describedby="basic-addon1"
            value={this.state.searchVal}
            onChange={this.handleSearchChange}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onChange={this.handleSearchClick}
          >
            Search
          </Button>
        </InputGroup>
        <Col xs={8}>
          <Row className="justify-content-center mt-3 pb-5 overflow-scroll vh-100">
            {/* search part */}

            {/* render books part */}
            {filteredBooks.length === 0 ? (
              <div> No titles found. Try another search</div>
            ) : (
              filteredBooks.map((book) => (
                <SingleBook
                  key={book.asin}
                  {...book}
                  selected={selectedBookId === book.asin}
                  onSelect={this.handleBookSelect}
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
}

export default BookList
