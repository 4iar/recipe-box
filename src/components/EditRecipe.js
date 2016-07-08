import React from 'react';
import {Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


export default class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients,
      showModal: this.props.showModal 
    }
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.showModal !== this.state.showModal) {
      this.setState({ showModal: newProps.showModal});
    }
  }
 
  close() {
    this.setState({ showModal: false });
    this.props.close();
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

    this.props.editRecipe(this.props.index, newRecipe);
    this.close();
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="editRecipe"
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
              <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save</Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
