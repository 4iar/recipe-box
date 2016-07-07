import React from 'react';

import EditRecipe from './EditRecipe';


export default class Recipe extends React.Component {
  render() {
    return (
      <p>
        {this.props.index}: {this.props.recipe.name}
        <EditRecipe recipe={this.props.recipe} editRecipe={this.props.editRecipe.bind(this)} index={this.props.index} />
        <button onClick={this.props.deleteRecipe.bind(this, this.props.index)}>delete recipe</button>
      </p>
    );
  }
}
