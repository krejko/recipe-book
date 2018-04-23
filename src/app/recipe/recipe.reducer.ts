import * as RecipeActions from './recipe.action';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export interface AppState {
    recipeList: State
}

export interface State {
    recipes: Recipe[];
    selectedRecipe: Recipe;
    selectedRecipeIndex: number;
    editMode: boolean;
}

const initialState: State = {
    recipes: [
        new Recipe(
        'Cruncy Bacon', 
        'It\'s delicious!', 
        'https://assets.epicurious.com/photos/57714624e43289453ac28e41/master/pass/diner-bacon-hero-22062016.jpg', 
        [
          new Ingredient('Package Bacon', 1),
          new Ingredient('Brown Sugar', 3)
        ]
      ),
      new Recipe(
        'Salmon', 
        'Nice and fishy.', 
        'https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg', 
        [
          new Ingredient('Fresh Salmon', 1),
          new Ingredient('Lemon', 2)
        ]
      )
    ],
    selectedRecipe: undefined,
    selectedRecipeIndex: undefined,
    editMode: false
}
export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions){
    switch(action.type){
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipeActions.UPDATED_RECIPE:
            //create new array with original items
            const recipes = [...state.recipes];  
            const index = action.payload.index;
            const originalRecipe = recipes[index];

            // project new object over old and overwrite in original list
            const updatedRecipe = {...originalRecipe, ...action.payload.recipe};
            recipes[index] = updatedRecipe
            return {
                ...state,
                recipes: recipes
            }
        case RecipeActions.SELECTED_RECIPE:        
            return {
                ...state,
                editMode: false,
                selectedRecipe: state.recipes[action.payload],
                selectedRecipeIndex: action.payload
            }

        case RecipeActions.START_EDIT_RECIPE:
            const editedRecipeIndex = action.payload; 
            const editedRecipe = state.recipes[editedRecipeIndex]
            return {
                ...state,
                editedRecipeIndex: editedRecipeIndex,
                editedRecipe: editedRecipe
            }
        case RecipeActions.END_EDIT_RECIPE:
            return {
                ...state,
                editedRecipeIndex: undefined,
                editedRecipe: undefined
            }
        case RecipeActions.DELETE_RECIPE:
            const newRecipes = state.recipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: newRecipes
            }
        default:
            return state;
    }

} 