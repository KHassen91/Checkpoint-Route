import React, { useRef } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const tit = useRef("")
    const choose = () => {
        props.searchTitle(tit.current.value)
    }

    const rat = useRef("")
    const pick = () => {
        props.searchRate(rat.current.value)
    }

    const movies = () => {
        let title = prompt('Movie Name');
        let description = prompt('Movie Description');
        let posterURL = prompt('Movie Poster');
        let rate = prompt('Movie Rate');
        props.add(title, description, posterURL, rate)
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link to='/Checkpoint-Route' style={{height:"2.5%" , width:"2.5%"}}><img style={{ height: "100%", width: "100%", marginRight: 10 }} src="https://i.pinimg.com/736x/54/51/75/54517514b7e9c8c21cb1526176c30732.jpg" /> </Link>
                <Link to='/Checkpoint-Route'><Navbar.Brand href="#home" style={{ marginRight: 40 }}>Movies Best</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/Checkpoint-Route' >Home</Nav.Link>
                        <Nav.Link onClick={() => movies()} href="#addmovie">Add Movie</Nav.Link>
                        <NavDropdown title="Choose By Rate" id="basic-nav-dropdown">
                            {[1, 2, 3, 4, 5].map(el => <NavDropdown.Item onClick={(e) => props.searchRate(e.target.innerHTML)}>{el}</NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl ref={tit} type="text" placeholder="Choose By Title" className="mr-sm-2" />
                        <Button onClick={choose} variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
