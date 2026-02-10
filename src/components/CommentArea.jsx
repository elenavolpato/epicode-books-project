import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import Loading from "./Loading"
import ErrorAlert from "./ErrorAlert"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

const commentsUrl = "https://striveschool-api.herokuapp.com/api/comments/"
const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OWQyODgwMjA2ODAwMTUwNGRjNjUiLCJpYXQiOjE3NzAyOTg2NjQsImV4cCI6MTc3MTUwODI2NH0._VJ73MJmEcZbxtQjMlmXRAA1xlBhu1QspZwENOPPpko"

const CommentArea = function (props) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getComments = () => {
    fetch(commentsUrl + props.elementId, {
      headers: {
        Authorization: "Bearer " + auth,
      },
    })
      .then((res) => {
        if (res.ok) return res.json()
        else throw new Error("Error in retrieving the comments")
      })
      .then((bookComments) => {
        setComments(bookComments)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setError(true)
      })
  }

  useEffect(() => {
    getComments()
  }, [props.elementId])

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        {loading && <Loading />}
        {error && <ErrorAlert />}
      </div>
      <ListGroup>
        {comments.length === 0 && !loading && !error && (
          <div>No comments yet</div>
        )}
        {comments.length > 0 &&
          !loading &&
          comments.map((comment) => (
            <CommentList
              key={comment._id}
              comment={comment}
              onCommentDeleted={getComments}
            />
          ))}
      </ListGroup>

      <AddComment
        selectedBookId={props.elementId}
        onCommentAdded={getComments}
      />
    </div>
  )
}

export default CommentArea
