import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPage } from '../details/containers/details/details.page';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './services/details.guard';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DailyWeatherComponent } from '../details/components/daily-weather/daily-weather/daily-weather.component';


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
     DailyWeatherComponent,
  ],
  providers: [
    DetailsGuard,
  ],
})
export class DetailsModule {
}