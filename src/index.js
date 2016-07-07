/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';

import RecipeBoxPage from './containers/RecipeBoxPage';
import './styles/index.scss';

render(
  <RecipeBoxPage />,
  document.getElementById('app')
);
