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
  
  editRecipe(index) {
    console.log("called edit recipe on: " + this.state.recipes[index].name);
  }
  
  deleteRecipe(index) {
    console.log("called delete recipe on: " + this.state.recipes[index].name);
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
