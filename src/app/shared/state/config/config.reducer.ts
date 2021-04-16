import { createReducer, on, Action } from '@ngrx/store';

import { Units } from '../../models/units.enum';
import * as fromConfigActions from './config.actions';

export interface ConfigState {
  unit: Units;
}

export const configInitialState: ConfigState = {
  unit: Units.Metric,
}

const reducer = createReducer(
  configInitialState,
  on(fromConfigActions.updateUnit, (state, { unit }) => ({
    ...state,
    unit,
  })),
);

export function configReducer(state: ConfigState | undefined, action: Action): ConfigState {
  return reducer(state, action);
}