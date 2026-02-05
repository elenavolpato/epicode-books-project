import { Component } from "react"
import { Button, Form, Modal } from "react-bootstrap"

class AddCommentModal extends Component {
  state = {
    comment: "",
    rate: "1",
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin,
    }

    this.addComment(newComment)
  }

  addComment = (newComment) => {
    const commentsUrl = `https://striveschool-api.herokuapp.com/api/comments/`

    fetch(commentsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQyODgwMjA2ODAwMTUwNGRjNjUiLCJpYXQiOjE3NzAyOTg2NjQsImV4cCI6MTc3MTUwODI2NH0._VJ73MJmEcZbxtQjMlmXRAA1xlBhu1QspZwENOPPpko",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        if (res.ok) return res.json()
        else throw new Error("Error adding comment")
      })
      .then((addedComment) => {
        console.log("added", addedComment)
      })
      .catch((err) => console.error("error in posting comment", err))
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
      >
        <Modal.Header
          closeButton
          border
        >
          <Modal.Title>Add comment </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.title}</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                value={this.state.rate}
                onChange={(e) => this.setState({ rate: e.target.value })}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
                required
              />
            </Form.Group>
            <Button
              variant="warning"
              type="submit"
            >
              Submit Comment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default AddCommentModal
