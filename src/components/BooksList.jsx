import { Component } from "react"
import { InputGroup, Row, Form, Button } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    searchVal: "",
  }

  handleSearchChange = (e) => {
    this.setState({ searchVal: e.target.value })
  }
  render() {
    const { books } = this.props
    const { searchVal } = this.state

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
        {filteredBooks.length === 0 ? <div> No titles found. Try another search</div> : filteredBooks.map((book) => <SingleBook key={book.id} {...book} />)}
      </Row>
    )
  }
}

export default BookList
