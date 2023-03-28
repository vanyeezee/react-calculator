import { useState } from "react";
import "../styles.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Authenticator } from "@aws-amplify/ui-react";

const NavMenu = () => {
  // Define state variable for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define function to render menu items based on authentication status
  const checkAuthAndRenderMenuItems = () => {
    // If not authenticated, return anonymous view
    if (!isAuthenticated) {
      return anonymousView();
    }
  };

  // Define function to render view for guest(unauthenticated) users
  const anonymousView = () => {
    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => setIsAuthenticated(true)}>
            Login or Sign Up
          </Nav.Link>
        </Nav>
      </>
    );
  };

  // Return the JSX for the navigation menu
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navBarText">React Calculator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {checkAuthAndRenderMenuItems()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Render the Authenticator component if authenticated */}
      {isAuthenticated && (
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user?.username}</h1>
              <button
                onClick={() => {
                  if (signOut) {
                    signOut();
                  }
                  setIsAuthenticated(false);
                }}
              >
                Sign out
              </button>
            </main>
          )}
        </Authenticator>
      )}
    </header>
  );
};

export default NavMenu;
