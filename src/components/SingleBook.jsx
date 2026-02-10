import { Col, Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap"

const SingleBook = (props) => {
  const handleClick = () => {
    props.onSelect(props.asin)
  }

  const { asin, title, img, price, category, selected } = props

  return (
    <Col
      className="text-center mb-4"
      xs={6}
      xl={6}
    >
      <Card
        onClick={handleClick}
        style={{ height: "650px" }}
        className={`shadow book-item ${selected ? "border-danger border-5" : ""}`}
      >
        <Card.Img
          variant="top"
          src={img}
          className="book-img "
        />

        <Card.Body className="d-inline-flex flex-column justify-content-end align-items-center">
          <OverlayTrigger overlay={<Tooltip id={asin}>{title}</Tooltip>}>
            <Card.Title>
              {title.length > 40 ? title.slice(0, 40) + "..." : title}
            </Card.Title>
          </OverlayTrigger>
          <Card.Text className="fs-4 fw-bold">€ {price.toFixed(2)}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <div className="d-flex justify-content-between w-100">
            <Button
              variant="warning"
              className=" fw-bolder"
            >
              Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
