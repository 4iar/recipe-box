import React from 'react';
import reactMixin from 'react-mixin';
import LocalStorageMixin from 'react-localstorage';

import Recipes from '../components/Recipes';
import AddRecipe from '../components/AddRecipe';


class RecipeBoxPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
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

  addRecipe(newRecipe) {
    this.setState({
      recipes: this.state.recipes.concat(newRecipe)
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
        <AddRecipe addRecipe={this.addRecipe.bind(this)} />
      </div>
    );
  }
}

reactMixin(RecipeBoxPage.prototype, LocalStorageMixin);
export default RecipeBoxPage;
