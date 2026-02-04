import { Component } from "react"
import { Col, Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap"

class SingleBook extends Component {
  /*  toggleSelected = () => {
    this.selected = !this.state.selected; 
  } */
  render() {
    const { asin, title, img, price, category, selected, onSelect } = this.props
    return (
      <Col className="text-center mb-4" xs={6} xl={3}>
        <Card style={{ height: "650px" }} className={`shadow book-item ${selected ? "border-danger border-5" : ""}`} onClick={() => onSelect(asin)}>
          <Card.Img variant="top" src={img} className="book-img" />
          <Card.Body className="d-inline-flex flex-column justify-content-end align-items-center">
            <OverlayTrigger overlay={<Tooltip id={asin}>{title}</Tooltip>}>
              <Card.Title>{title.length > 40 ? title.slice(0, 40) + "..." : title}</Card.Title>
            </OverlayTrigger>
            <Card.Text className="fs-4 fw-bold">€ {price.toFixed(2)}</Card.Text>
            <Card.Text>{category}</Card.Text>
            <Button variant="warning" className="px-5 fw-bolder">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
