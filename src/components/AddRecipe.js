import React from 'react';
import {Button, Modal, Row, Input} from 'react-materialize';

//TODO: reduce duplication by factoring out the modal stuff in editrecipe
export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: ''
    };
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
  }
  render() {
    return (
      <Modal
        header='Add recipe'
        trigger={
        <Button floating large className='red' waves='light' icon='add' />
  }>
        <Row>
          <Input s={12} label="Name" validate onChange={this.handleNameChange.bind(this)} />
          <Input s={12} label="Ingredients" validate onChange={this.handleIngredientsChange.bind(this)} />
        </Row>
        <Button onClick={this.handleSubmit.bind(this)}>Add</Button>
      </Modal>
    );
  }
}
