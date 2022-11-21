import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Stack,
  TextField,
  IconButton,
  styled,
  Badge,
} from "@mui/material";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
function Header() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ABC E-commerce website{" "}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/view-all-products">View All Products</Nav.Link>
                <NavDropdown title="Account Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/view-profile">
                    View Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/change-password">
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
