import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    const changeStyle = {
    color:'#e67e22'
}

    return (
        <div>
               <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand  href="#home" ><h4 className="title">TG <span >Tour</span> Agency</h4></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end navbar-design">
                         <NavLink activeStyle={changeStyle} to="/home">Home</NavLink>
                        <NavLink   activeStyle={changeStyle}  to="/feedbacks">FeedBacks</NavLink>
                        <NavLink  activeStyle={changeStyle}   to="">Experts</NavLink>
                     
                             <NavLink to=""><Button  variant="success">LogOut</Button></NavLink>
                           
                            <NavLink  to="/login">Login</NavLink>
                        <NavLink to="">
                            Signed in as: <a href="#login"></a>
                        </NavLink>
                </Navbar.Collapse>
                        
                    </Container>
        </Navbar>
        </div>
    );
};

export default Header;