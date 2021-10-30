import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user,logOut } = useAuth()
    
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
                        { user.email &&
                            <>
                            <NavLink activeStyle={ changeStyle } to="AddPackage">Add Package</NavLink>
                            <NavLink  activeStyle={changeStyle}   to="myOrder">MyOrder</NavLink>
                            <NavLink activeStyle={ changeStyle } to="manageOrder">Manage All Order</NavLink>
                          </>
                        }
                     
                             {user.email ?<NavLink to="" onClick={logOut} >LogOut</NavLink>
                              :
                            <NavLink activeStyle={changeStyle}   to="/login">Login</NavLink>}
                        <NavLink to="">
                            Name: <a href="#login">{user.displayName}</a>
                        </NavLink>
                </Navbar.Collapse>
                        
                    </Container>
        </Navbar>
        </div>
    );
};

export default Header;