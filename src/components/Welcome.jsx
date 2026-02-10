import Alert from "react-bootstrap/Alert"

const Welcome = function () {
  return (
    <>
      <Alert
        bg="light"
        data-bs-theme="light"
        variant="success"
        className="shadow-lg  m-3 text-center welcome-alert"
      >
        <Alert.Heading>Welcome to Epibooks </Alert.Heading>

        <p>
          Click on the yellow buttons on the top to view different categories
        </p>

        <div className="d-flex justify-content-end"></div>
      </Alert>
    </>
  )
}

export default Welcome
