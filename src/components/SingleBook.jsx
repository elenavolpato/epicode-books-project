import { Component } from "react"
import { Col, Card, Button } from "react-bootstrap"

class SingleBook extends Component {
  render() {
    const { id, title, img, price, category } = this.props
    return (
      <Col className="text-center mb-4" xs={6} xl={3} key={id}>
        <Card style={{ height: "650px" }} className="shadow book-item">
          <Card.Img variant="top" src={img} className="book-img" />
          <Card.Body className="d-inline-flex flex-column justify-content-end align-items-center">
            <Card.Title>{title.length > 40 ? title.slice(0, 40) + "..." : title}</Card.Title>
            <Card.Text className="fs-4 fw-bold">€ {price.toFixed(2)}</Card.Text>
            <Card.Text>{category}</Card.Text>
            <Button variant="warning" className="px-5">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
