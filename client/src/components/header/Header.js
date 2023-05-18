import React from "react";
import "./header.css";
import { Container, Navbar } from "react-bootstrap";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#home" className="fw-bold">
              AirNub
            </Navbar.Brand>
          </Link>

          <div className="mr-5">
            <span className="mx-2 marginLeft">Anywhere</span>
            <span className="mx-4">Anyweek</span>
            <span>add guest</span>
            <span className="mx-3">
              <FaSearch className="searchIcon" />
            </span>
          </div>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <FaUserCircle />
              <Link to={"/login"}> mark</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
