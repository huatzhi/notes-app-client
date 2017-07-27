import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
import './App.css';
import Routes from './Routes';

// todo::it will probably be better that navbar should have one component of its
// own
class App extends Component {
  handleNavLink = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.handleNavLink} href="/signup">Signup</NavItem>
              <NavItem onClick={this.handleNavLink} href="/login">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);