import React from 'react';
import {Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

import EditRecipe from './EditRecipe';


export default class Recipe extends React.Component {
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
        <EditRecipe showModal={this.state.showModal} close={this.close.bind(this)} recipe={this.props.recipe} editRecipe={this.props.editRecipe.bind(this)} index={this.props.index} />
        <h5>{this.props.recipe.ingredients}</h5>
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsStyle="primary" onClick={this.open.bind(this)}>Edit</Button>
            <Button bsStyle="danger" onClick={this.props.deleteRecipe.bind(this, this.props.index)}>Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}
