import React from "react";
import { useSelector } from "react-redux";
import css from "../App.module.css";
import { Nav, Navbar, NavDropdown,Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  const authUser = useSelector((store) => store.authUser);
  

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand  className={css.navTitle}>
          Would You Rather?
        </Navbar.Brand>
        <Nav className="me-auto">
        <Link to="/HomePage "style={{ textDecoration: 'none' }}> <Nav.Link as="div">Home</Nav.Link> </Link>
        <Link to="/AddQuestion "style={{ textDecoration: 'none' }}><Nav.Link as="div">Add Question</Nav.Link> </Link>
        <Link to="/LeaderBoard "style={{ textDecoration: 'none' }}> <Nav.Link as="div">Leader Board</Nav.Link></Link> 
        </Nav>

        <NavDropdown title={authUser.fullname} id={css.navDropdown}>
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/Logout">
            Log out
          </NavDropdown.Item>
        </NavDropdown>
        <Image
          className={css.profile}
          alt="Profile image"
          src={authUser.imgUrl}
          roundedCircle
        ></Image>
        <Navbar.Text></Navbar.Text>
      </Container>
    </Navbar>
  );
}
