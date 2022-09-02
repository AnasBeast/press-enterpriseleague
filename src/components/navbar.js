import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    
    return (
        <div className="header">
            <Navbar>
                <Navbar.Brand href="#"><img src={require('../assests/logo-header.png')} id="logo-header" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                    <NavDropdown title="Products" renderMenuOnMount={true}>
                        <NavDropdown.Item href="#" >Action</NavDropdown.Item>
                        <NavDropdown.Item href="#a">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources" renderMenuOnMount={true}>
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#a">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Company" renderMenuOnMount={true}>
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#a">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="d-flex align-items-center">
                    <Nav.Link href="#">Log in</Nav.Link>
                    <Nav.Link href="#" className="get-instant-access">Get instant access</Nav.Link>
                    <Nav.Link href="#" className="get-started">Get started</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      
    );
  }
  
  export default NavBar;