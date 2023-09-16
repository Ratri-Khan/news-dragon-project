import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container,Navbar,Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
 const {user} = useContext(AuthContext)
  console.log(user)
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>
                Journalism Without Fear or Favor</small></p>
               <p> {moment().format("MMM Do YY")}</p>            
            </div>
               <div className='d-flex'>
               <Button variant="danger">Danger</Button>
               <Marquee>
                   I can be a React component, multiple React components, or just some text.
               </Marquee>
               </div>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <Nav.Link href="#deets">
                                {user.displayName}
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary">Logout</Button>:
                                    <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                    </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </Container>
    );
};

export default Header;