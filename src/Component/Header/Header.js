import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    const changeStyle = {
    color:'red'
}

    return (
        <div>
               <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand  href="#home">TG <span className="title">Tour</span> Agency</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end navbar-design">
                         <NavLink activeStyle={changeStyle} to="/home">Home</NavLink>
                        <NavLink  to="">Services</NavLink>
                        <NavLink  to="">Experts</NavLink>
                     
                           <Button  variant="success">LogOut</Button>
                           
                            <NavLink  to="/login">Login</NavLink>
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                </Navbar.Collapse>
                        
                    </Container>
        </Navbar>
        </div>
    );
};

export default Header;