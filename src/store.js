import { createStore } from 'redux'

let initialState = {
  recipeName: '',
  recipeCategory: '',
  authorFirst: '',
  authorLast: '',
  ingredientList: [],
  instructions: []
}

export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const AUTHOR_FIRST = 'AUTHOR_FIRST'
export const AUTHOR_LAST = 'AUTHOR_LAST'
export const INGREDIENT_LIST = 'INGREDIENT_LIST'
export const INSTRUCTIONS = 'INSTRUCTIONS'

function reducer(state = initialState, action) {
  let { type, payload } = action
  switch (type) {
    case RECIPE_NAME:
      return ({ ...state, recipeName: payload })
    case RECIPE_CATEGORY:
      return ({ ...state, recipeCategory: payload })
    case AUTHOR_FIRST:
      return ({ ...state, authorFirst: payload })
    case AUTHOR_LAST:
      return ({ ...state, authorLast: payload })
    case INGREDIENT_LIST:
      return ({ ...state, ingredientList: payload })
    case INSTRUCTIONS:
      return ({ ...state, instructions: payload })
    default:
      return state;
  }
}

export default createStore(reducer)