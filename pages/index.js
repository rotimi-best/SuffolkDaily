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

export class rentotkil extends Component {
  render() {
    return (
      <div>
        <Head>
          <title key="title">Suffolk Daily - Everything Suffolk</title>
          <meta name="description" content="Correct me" />
        </Head>

        <Nav />
        <br />
        <Row>
          <Container>
            <Col lg={12} style={{ textAlign: "center" }}>
              <h1>Everything Suffolk.</h1>
            </Col>
            <br />

            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col xs={6}>
                    <h3 style={{ textAlign: "center" }}>
                      Suffolk Heritage Explorer
                    </h3>
                    <p>
                      Welcome to the web-based version of the Suffolk Historic
                      Environment Record, the definitive record of the known
                      archaeological sites and historic buildings in the county.
                      Our database contains over 39,000 entries ranging from
                      700,000-year-old flint tools to Cold War military sites.
                      We can truly say that our records span the full range of
                      human history. Find out more{" "}
                      <a
                        href="https://heritage.suffolk.gov.uk/home"
                        target="_blank"
                      >
                        Here!
                      </a>
                    </p>
                  </Col>

                  <Col xs={6}>
                    <img
                      className="d-block w-100"
                      src="https://heritage.suffolk.gov.uk/Data/Sites/1/media/web-images/bse_snow.jpg"
                      alt="Third slide"
                      height="300"
                      width="100"
                    />
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row>
                  <Col xs={6}>
                    <h3 style={{ textAlign: "center" }}>Aspalls Cider</h3>
                    <p>
                      Aspall Cyder Ltd is a manufacturer of cider and other
                      apple derived products. Its cidery is located at Aspall
                      Hall in the village of Aspall, Suffolk, England. It was
                      bought by Molson Coors Brewing Company in 2018 Aspall has
                      been home to the Chevallier family for nine generations. A
                      tiny hamlet north of the small market town of Debenham in
                      mid-Suffolk. It’s a rural and agricultural area
                      characterised by the young river Deben flowing through our
                      orchards.
                    </p>
                  </Col>

                  <Col xs={6}>
                    <img
                      className="d-block w-100"
                      src="https://www.dissexpress.co.uk/_media/img/750x0/J0B8UGT59HVFGG6N6EN7.jpg"
                      alt="Third slide"
                      height="300"
                      width="100"
                    />
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row>
                  <Col xs={6}>
                    <h3 style={{ textAlign: "center" }}>Bury St Edmunds</h3>
                    <p>
                      Proud host of the only cathedral in Suffolk, Bury St
                      Edmunds may well be the most beautiful town in the county.
                      There’s history from all sorts of different periods, and
                      many buildings in the town are even older than they look
                      because the old timber-framing was bricked over in the
                      1700s, as was the Georgian fashion. St Edmundsbury
                      Cathedral should be on your agenda, as should the ruined
                      Bury St Edmunds Abbey, standing in serene gardens that you
                      enter via a stunning Norman gateway. More recent but no
                      less fabulous is the Theatre Royal, the only surviving
                      regency theatre in England, newly restored to its
                      pre-Victorian glory The Greene King brewery is also in
                      Bury St Edmunds, brewing ale for more than 200 years and
                      welcoming you for tours.
                    </p>
                  </Col>

                  <Col xs={6}>
                    <img
                      className="d-block w-100"
                      src="https://cdn.thecrazytourist.com/wp-content/uploads/2016/12/Bury-St-Edmunds-Cathedral.jpg"
                      alt="Third slide"
                      height="300"
                      width="100"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Row>

        <Row>
          <Container style={{textAlign: "center", marginTop: 100}}>
            <h2>Map of Suffolk county.</h2>
            <img src="https://i.pinimg.com/originals/a8/74/66/a87466415679d6542e6644ebfe178a29.png" height="80%" width="70%" alt="Map of suffolk, Bury st Edmunds, Leiston, Sudbury, Shotley, Woodbridge, Haverhill, Felixstowe"/>
          </Container>
        </Row>
      </div>
    );
  }
}

export default rentotkil;
