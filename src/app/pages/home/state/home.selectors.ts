import { HomeState } from './home.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store"

export const selectorHomeState = createFeatureSelector('home');

export const selectorHomeText = createSelector(selectorHomeState,
    (homeState: HomeState) => homeState.text
    );