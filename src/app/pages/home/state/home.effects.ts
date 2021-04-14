import { WeatherService } from './../../../shared/services/weather.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as fromHomeActions from './home.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class HomeEffects{

    loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
        ofType(fromHomeActions.loadCurrentWeather),
        mergeMap(({query}) => this.weatherService.getCityWeatherByQuery(query)),
        catchError((err, caught$) => {
            this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed());
            return caught$;
        }),
        map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess({entity})),

    ),

    );

    constructor(private actions$: Actions, private weatherService: WeatherService, private store: Store){}
}