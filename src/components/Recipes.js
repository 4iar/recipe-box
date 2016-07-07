import React from 'react';

import Recipe from './Recipe';


export default class Recipes extends React.Component {
  render() {
    return (
      <div>
        There are {this.props.recipes.length} recipes
        {this.props.recipes.map(function(recipe, i){
          return <Recipe
            recipe={recipe}
            index={i}
            key={i}
            editRecipe={this.props.editRecipe.bind(this)}
            deleteRecipe={this.props.deleteRecipe.bind(this)}
          />;
        }.bind(this))}
      </div>
    );
  }
}
