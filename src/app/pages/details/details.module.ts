import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from './containers/details/details.page';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './services/details.guard';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DailyWeather } from './components/daily-weather/daily-weather.component/daily-weather.component.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
    // StoreModule.forFeature('details', detailsReducer),
    // EffectsModule.forFeature([DetailsEffects]),
    //ComponentsModule,
  ],
  declarations: [
    DetailsPage,
    DailyWeather.ComponentComponent,
    // DailyWeatherComponent,
  ],
  providers: [
    DetailsGuard,
  ],
})
export class DetailsModule {
}