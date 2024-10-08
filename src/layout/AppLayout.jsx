import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import './AppLayout.style.css';

function AppLayout() {

    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();

    const searchByKeyword =(event)=>{
        event.preventDefault();
        navigate(`/movies?q=${keyword}`);
        setKeyword(''); // Empty setKeyword 
    }

    const goToMovies =()=> {
        navigate('/movies');
    }

    const goToHome=()=> {
        navigate('/');
    }

  return (
    <div>
        <Navbar expand="lg" className="nav-section">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" className='nav-logo' onClick={goToHome}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Nav.Link  className='nav-linkbtn' onClick={goToHome}>Home</Nav.Link>
                    <Nav.Link className='nav-linkbtn' onClick={goToMovies}>Movies</Nav.Link>
                    </Nav>
                    <Form className="nav-searchSection" onSubmit={searchByKeyword}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="nav-searchBar"
                            aria-label="Search"
                            value={keyword} onChange={(event)=> setKeyword(event.target.value)}
                        />
                        <Button variant="outline-danger" className='nav-searchBtn' type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    <Outlet/>
    </div>
  )
}

export default AppLayout
