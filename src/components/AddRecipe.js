import React from 'react';
import {Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

//TODO: reduce duplication by factoring out the modal stuff in editrecipe
export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleNameChange (e) {
    this.handleEdit('name', e.target.value);
  }

  handleIngredientsChange (e) {
    this.handleEdit('ingredients', e.target.value);
  }

  handleEdit(type, newValue) {
    let newState = this.state;
    newState[type] = newValue;
    this.setState(newState);
  }

  handleSubmit() {
    let newRecipe = {
      name: this.state.name,
      ingredients: this.state.ingredients,
    };

    this.props.addRecipe(newRecipe);
    this.close();
  }
  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
         Add recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="addRecipe"
              >
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange.bind(this)}
                />
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.ingredients}
                  onChange={this.handleIngredientsChange.bind(this)}
                />
              </FormGroup>
            </form>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Add</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
