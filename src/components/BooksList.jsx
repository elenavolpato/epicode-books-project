import { Component } from "react"
import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  render() {
    const { books } = this.props

    return (
      <Row className="justify-content-center mt-3 pb-5">
        {books.map((book) => (
          <SingleBook key={book.id} {...book} />
        ))}
      </Row>
    )
  }
}

export default BookList
