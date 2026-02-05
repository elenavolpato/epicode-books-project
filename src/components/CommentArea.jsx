import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentArea extends Component {
  state = {
    comments: [],
    elementId: this.props.elementId,
  }

  rateStarsRenderer = (rate) => {
    const stars = []
    for (let i = 0; i < rate; i++) {
      stars.push(
        <svg
          key={i}
          className="bi bi-star-fill"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>,
      )
    }
    return stars
  }

  getComments = () => {
    const commentsUrl = `https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`
    console.log(commentsUrl)
    fetch(commentsUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQyODgwMjA2ODAwMTUwNGRjNjUiLCJpYXQiOjE3NzAyOTg2NjQsImV4cCI6MTc3MTUwODI2NH0._VJ73MJmEcZbxtQjMlmXRAA1xlBhu1QspZwENOPPpko",
      },
    })
      .then((res) => {
        if (res.ok) return res.json()
        else throw new Error("Error in retrieving the comments")
      })
      .then((bookComments) => {
        console.log("res", bookComments)
        this.setState({ comments: bookComments })
      })
      .catch((err) => console.error(err))
  }
  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <ListGroup>
        {this.state.comments.map((comment) => (
          <ListGroup.Item
            key={comment._id}
            className="d-flex justify-content-between"
          >
            <div>{this.rateStarsRenderer(comment.rate)}</div>
            <div>{comment.comment}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

export default CommentArea
