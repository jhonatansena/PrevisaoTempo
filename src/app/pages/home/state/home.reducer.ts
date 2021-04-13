import { createReducer, Action, on } from "@ngrx/store";
import * as fromHomeActions from './home.actions';

export interface HomeState{
    
text: string;
text2: string;
   
}

export const homeInicialState:  HomeState = {
    text: 'Belém',
    text2: 'Norte'
}

const reducer = createReducer(
    homeInicialState,
    on(fromHomeActions.changeText, (state, { text }) => ({
        ...state,
        text
    }))

);



export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
   
    return reducer(state, action);
  }