import { Button, Row } from "react-bootstrap"

const CategoryButtons = ({ categories, activeData, onCategoryChange }) => {
  return (
    <Row className="gap-2 my-2 px-3">
      {categories.map((cat) => (
        <Button
          key={cat.id}
          className={`${activeData === cat.data ? " fw-bold fs-5 opacity-100" : ""} col fw-bolder opacity-50`}
          variant="warning"
          onClick={() => onCategoryChange(cat.data)}
        >
          {cat.label}
        </Button>
      ))}
    </Row>
  )
}

export default CategoryButtons
