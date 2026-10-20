import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function AppNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="app-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">RuangSaldo</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Ringkasan</Nav.Link>
            <Nav.Link as={NavLink} to="/transaksi">Transaksi</Nav.Link>
            <Nav.Link as={NavLink} to="/wallet">Dompet</Nav.Link>
            <Nav.Link as={NavLink} to="/laporan">Laporan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavigation