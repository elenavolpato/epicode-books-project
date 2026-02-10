import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddComment = (props) => {
  const [comment, setComment] = useState([])
  const [rate, setRate] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      comment: comment,
      rate: rate,
      elementId: props.selectedBookId,
    }

    addComment(newComment)
  }

  const addComment = (newComment) => {
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
        // updates page with new comments
        props.onCommentAdded()
        // clears form
        setComment("")
        setRate("1")
      })
      .catch((err) => console.error("error in posting comment", err))
  }

  return (
    <div className="add-comment-section mt-3">
      <h3>Add comment</h3>
      <p>{props.title}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={rate}
            onChange={(e) => setRate(e.target.value)}
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
    </div>
  )
}

export default AddComment
