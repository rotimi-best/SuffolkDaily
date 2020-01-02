import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropDown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

// import "materialize-css/dist/css/materialize.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fontSize } from '@material-ui/system'


const navStyle = {
  height: 120,
  backgroundColor: "red",
  fontSize: 20,
  color: "white"
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const nav = () => {

  return (
    <div>

      <Navbar bg="primary" variant="dark" style={navStyle} >

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Arms_of_Suffolk.svg/1200px-Arms_of_Suffolk.svg.png" width="70" height="70" className="d-inline-block align-top" alt="" />
        <Navbar.Brand href="/"><h2>Suffolk Daily</h2></Navbar.Brand>
        <Nav className="ml-auto">
          <Link href="/services" passHref><Nav.Link >Services</Nav.Link></Link>
          <Nav.Link href="/">Blogs</Nav.Link>
          <Nav.Link href="/">Events</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>

          {/* <Link href="/login" passHref><Nav.Link >Jobs</Nav.Link></Link>
          <Link href="/login" passHref><Nav.Link >Explore</Nav.Link></Link>
          <Link href="/login" passHref><Nav.Link >Councils</Nav.Link></Link>
          <Link href="/login" passHref><Nav.Link >Events</Nav.Link></Link>
          <Link href="/login" passHref><Nav.Link >Discounts</Nav.Link></Link>
          <Link href="/login" passHref><Nav.Link >News</Nav.Link></Link> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>

      {/* <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container> */}

      {/* <Row>
        <Container style={navStyle}>
            test
        </Container>
      </Row> */}

    </div>


  )


}

export default nav