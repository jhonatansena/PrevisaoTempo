import { HomePage } from './container/home/home.page';
import { ComponentsModule } from './../../shared/components/components.module';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { UnitSelectorComponent } from './container/unit-selector/unit-selector.component';



@NgModule({
  declarations: [HomePage, CurrentWeatherComponent, UnitSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { 



}
