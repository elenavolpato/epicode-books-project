import { Component } from "react"
import { InputGroup, Row, Form, Button } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    searchVal: "",
    selectedBookId: null,
  }

  handleSearchChange = (e) => {
    this.setState({ searchVal: e.target.value })
  }

  handleBookSelect = (bookId) => {
    console.log("Book clicked, ID:", bookId)
    console.log("Current selectedBookId:", this.state.selectedBookId)
    this.setState({ selectedBookId: bookId })
  }
  render() {
    const { books } = this.props
    const { searchVal, selectedBookId } = this.state

    const filteredBooks = searchVal === "" ? books : books.filter((book) => book.title.toLowerCase().includes(searchVal.toLowerCase()))

    return (
      <Row className="justify-content-center mt-3 pb-5">
        {/* search part */}
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by book title"
            aria-label="search"
            aria-describedby="basic-addon1"
            value={this.state.searchVal}
            onChange={this.handleSearchChange}
          />
          <Button variant="outline-secondary" id="button-addon2" onChange={this.handleSearchClick}>
            Search
          </Button>
        </InputGroup>

        {/* render books part */}
        {filteredBooks.length === 0 ? (
          <div> No titles found. Try another search</div>
        ) : (
          filteredBooks.map((book) => <SingleBook key={book.asin} {...book} selected={selectedBookId === book.asin} onSelect={this.handleBookSelect} />)
        )}
      </Row>
    )
  }
}

export default BookList
