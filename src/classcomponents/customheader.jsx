

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function CustomNavbar() {
  let cart_items=useSelector((state)=>state)
  let items_length=cart_items.pullama_recipes.menu_items.length
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container fluid>
        <Navbar.Brand><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lifestyle_Stores_-_New.jpg/500px-Lifestyle_Stores_-_New.jpg" style={{width:"200px" ,height:"50px"}}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/cart">cart{items_length}</Link></Nav.Link>
            <Nav.Link ><Link to="/about">about</Link></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;