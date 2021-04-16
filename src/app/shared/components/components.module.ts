import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTiypeaheadComponent } from './cities-tiypeahead/cities-tiypeahead.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTiypeaheadComponent,
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTiypeaheadComponent
  ]

})
export class ComponentsModule {
}
