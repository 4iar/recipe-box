import React from 'react';


export default class Recipe extends React.Component {
  render() {
    return (
      <p>
        {this.props.index}: {this.props.recipe.name}
        <button onClick={this.props.editRecipe.bind(this, this.props.index)}>edit recipe</button>
        <button onClick={this.props.deleteRecipe.bind(this, this.props.index)}>delete recipe</button>
      </p>
    );
  }
}
