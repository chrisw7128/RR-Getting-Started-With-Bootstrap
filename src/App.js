import { Form } from "react-bootstrap";
import "./App.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Nav activeKey={"/home"}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We will probably share your email with the CIA.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Submit my data to the NSA too" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Favorite brand of shampoo</Form.Label>
          <Form.Control as="select">
            <option>Pantene</option>
            <option>Old Spice</option>
            <option>Walmart</option>
            <option>Ritzy</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default App;
