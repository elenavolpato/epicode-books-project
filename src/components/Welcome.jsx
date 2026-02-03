import { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

const Welcome = function () {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="success" className="position-absolute top-0 m-5 z-1 shadow-lg">
        <Alert.Heading>Welcome </Alert.Heading>
        <p>This is a list of books available in our shop</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {/*  {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  )
}

export default Welcome
