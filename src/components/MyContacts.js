import React from 'react'
import {Row,Col} from 'react-bootstrap';
import '../assets/_styles/my_contacts.scss'
import gmail from '../assets/icons/gmail.svg'
import vk from '../assets/icons/vk.svg'
import facebook from '../assets/icons/facebook-logo.svg'
import github from '../assets/icons/github-big-logo.svg'

function MyContacts() {
    return (
        <Row className="contacts" noGutters={true}>
            <Col md={6} className="contact-message d-flex justify-content-center">
              <span>My Contacts</span>
            </Col>
            <Col md={6} className="social-sect d-flex justify-content-end">
              <a href="https://mail.google.com/mail/?tab=rm&ogbl#inbox"><img src={gmail} alt="gmail"/>|</a>
              <a href="https://www.facebook.com/profile.php?id=100011073064674"><img src={facebook} alt="facebook"/>|</a>
              <a href="https://vk.com/taroka"><img src={vk} alt="vk"/>|</a>
              <a href="https://github.com/Taron888"><img src={github} alt="github"/></a>
            </Col>
        </Row>
    )
}

export default MyContacts