import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// created components import
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import CategoryButtons from "./components/CategoryButtons"
import BooksList from "./components/BooksList"
// react components import
import { Component } from "react"
import { Container } from "react-bootstrap"
// json imports
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import romance from "./data/romance.json"
import scifi from "./data/scifi.json"

const categories = [
  { id: 1, label: "Fantasy", data: fantasy, variant: "primary" },
  { id: 2, label: "History", data: history, variant: "secondary" },
  { id: 3, label: "Horror", data: horror, variant: "danger" },
  { id: 4, label: "Romance", data: romance, variant: "info" },
  { id: 5, label: "Sci-fi", data: scifi, variant: "success" },
]

class App extends Component {
  state = {
    selectedBooks: fantasy,
  }

  handleCategoryChange = (booksData) => {
    this.setState({ selectedBooks: booksData })
  }
  render() {
    return (
      <>
        <Container bg="dark" data-bs-theme="dark" fluid className="p-0">
          <MyNav />
          <Welcome />
          <Container>
            <CategoryButtons categories={categories} activeData={this.state.selectedBooks} onCategoryChange={this.handleCategoryChange} />

            <BooksList books={this.state.selectedBooks} />
          </Container>
          <MyFooter />
        </Container>
      </>
    )
  }
}

export default App
