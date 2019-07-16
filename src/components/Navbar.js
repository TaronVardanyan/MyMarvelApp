import React from 'react'
import '../assets/_styles/navbar.scss'
import logo from '../assets/icons/marvel.svg';
import {Container,Row,Col} from 'react-bootstrap';
import MyContacts from './MyContacts'


function Navbar() {
    return (
       <Container className="navbar p-0" fluid={true}>
            <Row  noGutters={true} className="fullWidth-sect d-flex justify-content-between pl-5 pr-5">
              <Col md={3} className="logo-sect d-flex justify-content-start align-items-center">
                <span className="d-flex justify-content-center align-items-center">my<img src={logo} alt=""/>app</span>
              </Col>
              <Col md={3} className="d-flex align-items-center">
                 <MyContacts/>
              </Col>
        </Row>
       </Container>
    )
}

export default Navbar