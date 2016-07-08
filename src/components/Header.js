import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import AddRecipe from './AddRecipe';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <AddRecipe addRecipe={this.props.addRecipe.bind(this)} showModal={this.state.showModal} open={this.open.bind(this)} close={this.close.bind(this)} />
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Recipe Box</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Recipes: {this.props.recipes.length}</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem onClick={this.open.bind(this)} eventKey={1} href="#">Add recipe</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
