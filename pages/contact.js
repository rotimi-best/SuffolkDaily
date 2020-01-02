import React, { Component } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const row = {
  width: `90%`,
  margin: "auto"
};

export class contactPage extends Component {
  render() {
    return (
      <div>

      <Head>
       <title key="title">Suffolk Daily - Contact page</title>
      </Head>

        <Nav />
        <br />
        <Row>
           <Container>
                <Paper elevation={4} style={{height: 500, textAlign: "center"}}>
                        <h1>Contact Details</h1>
                        <hr/>
                        <h2>Want your buisness listed  or have a request? Contact us <a href="mailto:cobwebsteruk@gmail.com">HERE</a></h2>
                        <img src="https://i.pinimg.com/originals/a8/74/66/a87466415679d6542e6644ebfe178a29.png"
                         alt="Suffolk Daily contact Page"
                         width="50%"
                         height="50%"
                         
                         />
                </Paper>
           </Container>
        </Row>

      </div>
    );
  }
}

export default contactPage;
