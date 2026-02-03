import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import AllTheBooks from "./components/AllTheBooks"
import Welcome from "./components/Welcome"
import { Button } from "react-bootstrap"

function App() {
  return (
    <>
      <div className="bg-dark-subtle">
        <MyNav />
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </div>
    </>
  )
}

export default App
