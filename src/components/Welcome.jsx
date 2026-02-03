import { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

const Welcome = function () {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} bg="dark" data-bs-theme="dark" variant="warning" className="position-fixed z-1 shadow-lg welcome-alert">
        <Alert.Heading>Welcome </Alert.Heading>
        <p>This is a list of books available in our shop</p>
        <p>Click on the yellow buttons on the top to view different categories</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-warning">
            Close me
          </Button>
        </div>
      </Alert>

      {/*  {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  )
}

export default Welcome
