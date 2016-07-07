import React from 'react';
import reactMixin from 'react-mixin';
import LocalStorageMixin from 'react-localstorage';

import Recipes from '../components/Recipes';


class RecipeBoxPage extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {name: 'pizza', ingredients: 'pepperoni, cheese'},
        {name: 'hotdog', ingredients: 'bun, sausage'}
      ]
    };
  }

  editRecipe(index, newRecipe) {
    let newRecipes = this.state.recipes.slice();
    newRecipes[index] = newRecipe;
    this.setState({
      recipes: newRecipes
    });
  }

  deleteRecipe(index) {
    let newRecipes = this.state.recipes.slice();
    newRecipes.splice(index, 1);
    this.setState({
      recipes: newRecipes
    });
  }

  render() {
    return (
      <div>
        <Recipes
          recipes={this.state.recipes}
          editRecipe={this.editRecipe.bind(this)}
          deleteRecipe={this.deleteRecipe.bind(this)}
        />
      </div>
    );
  }
}

reactMixin(RecipeBoxPage.prototype, LocalStorageMixin);
export default RecipeBoxPage;
