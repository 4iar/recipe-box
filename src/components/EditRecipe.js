import React from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';


export default class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients
    }
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
  }

  render() {
    return (
      <Modal
        header='Edit recipe'
        trigger={
    <Button waves='light'>Edit</Button>
  }>
        <Row>
          <Input s={12} label="Name" validate defaultValue={this.props.recipe.name} onChange={this.handleNameChange.bind(this)} />
          <Input s={12} label="Ingredients" validate defaultValue={this.props.recipe.ingredients} onChange={this.handleIngredientsChange.bind(this)} />
        </Row>
        <Button onClick={this.handleSubmit.bind(this)}>Apply</Button>
      </Modal>
    );
  }
}
