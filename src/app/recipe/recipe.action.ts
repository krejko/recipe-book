import { Action } from "@ngrx/store";
import { Recipe } from "./recipe.model";

export const UPDATED_RECIPE = 'UPDATED_RECIPE'
export const SET_RECIPES = 'SET_RECIPES'
export const ADD_RECIPE = 'ADD_RECIPE'
export const SELECTED_RECIPE = "SELECTED_RECIPE"
export const START_EDIT_RECIPE = "START_EDIT_RECIPE"
export const END_EDIT_RECIPE = "END_EDIT_RECIPE"
export const DELETE_RECIPE = "DELETE_RECIPE"


export class UpdateRecipe implements Action {
    readonly type = UPDATED_RECIPE;
    constructor(
        public payload: {
            recipe: Recipe, 
            index: number
        }){};
    }
    
export class AddRecipe implements Action {
    readonly type = ADD_RECIPE;
    constructor(public payload: Recipe){};
}

export class SelectedRecipe implements Action {
    readonly type = SELECTED_RECIPE;
    constructor(
        public payload: number){};
}
        
export class StartEditRecipe implements Action {
    readonly type = START_EDIT_RECIPE;
    constructor(
        public payload: number){};
}

export class EndEditRecipe implements Action {
    readonly type = END_EDIT_RECIPE;
    constructor(public payload: number){};
}

export class DeleteRecipe implements Action {
    readonly type = DELETE_RECIPE;
    constructor(public payload: number){};
}


export type RecipeActions = 
    UpdateRecipe | 
    AddRecipe | 
    SelectedRecipe |
    StartEditRecipe | 
    EndEditRecipe |
    DeleteRecipe; 