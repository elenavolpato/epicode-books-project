import { Component } from "react"
import { Spinner } from "react-bootstrap"

class Loading extends Component {
  render() {
    return (
      <Spinner
        className="d-flex justify-content-center"
        variant="warning"
        animation="border"
      />
    )
  }
}
export default Loading
