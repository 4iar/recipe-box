import React from 'react';
import {Grid, Row, Accordion, Panel, Well} from 'react-bootstrap';

import Recipe from './Recipe';


export default class Recipes extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
            <Well>
              <Accordion>
                {this.props.recipes.map(function(recipe, i){
                  return (
                    <Panel header={recipe.name} eventKey={i}>
                      <Recipe
                        recipe={recipe}
                        index={i}
                        key={i}
                        editRecipe={this.props.editRecipe.bind(this)}
                        deleteRecipe={this.props.deleteRecipe.bind(this)}
                      />
                    </Panel>
                  );
                }.bind(this))}
              </Accordion>
            </Well>
        </Row>
      </Grid>
    );
  }
}
