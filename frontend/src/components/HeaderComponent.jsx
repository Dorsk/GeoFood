import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <a href="/geofood">
              <img
                src={require("../img/home-icon.png")}
                alt=""
                width="50"
                height="40"
              ></img>
            </a>
            <Navbar.Brand href="/geofood">GeoFood</Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
        <div className="geofood-line"></div>
      </header>
    );
  }
}

export default HeaderComponent;
