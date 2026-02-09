import { Component } from "react"
import { ListGroup } from "react-bootstrap"
import Loading from "./Loading"
import ErrorAlert from "./ErrorAlert"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

const commentsUrl = "https://striveschool-api.herokuapp.com/api/comments/"

class CommentArea extends Component {
  state = {
    comments: [],
    elementId: this.props.elementId,
    loading: true,
    error: false,
  }

  getComments = () => {
    fetch(commentsUrl + this.props.elementId, {
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
        this.setState({ comments: bookComments, loading: false })
      })
      .catch((err) => {
        console.error(err)
        this.setState({ error: true, loading: false })
      })
  }
  componentDidMount() {
    this.getComments()
  }
  componentDidUpdate(prevProps /* , prevState */) {
    if (prevProps.elementId !== this.props.elementId) {
      this.getComments()
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          {this.state.loading && <Loading />}
          {this.state.error && <ErrorAlert />}
        </div>
        <ListGroup>
          {this.state.comments.length === 0 &&
            !this.state.loading &&
            !this.state.error && <div>No comments yet</div>}
          {this.state.comments.length > 0 &&
            !this.state.loading &&
            this.state.comments.map((comment) => (
              <CommentList
                key={comment._id}
                comment={comment}
                onCommentDeleted={this.getComments}
              />
            ))}
        </ListGroup>

        <AddComment
          selectedBookId={this.props.elementId}
          onCommentAdded={this.getComments}
        />
      </div>
    )
  }
}

export default CommentArea
