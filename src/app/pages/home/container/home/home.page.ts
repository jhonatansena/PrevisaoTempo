


import { City, CityWeather, Weather } from './../../../../shared/models/weather.model';
import { Observable, Subject, combineLatest } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select} from '@ngrx/store';
import { takeUntil, map } from 'rxjs/operators';

import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import { Bookmark } from './../../../../shared/models/bookmark.model';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  city: City = {
    name: 'Londres',
  }
  weather: Weather = {
    description: 'cool',
  }

  // cityWeather$: Observable<CityWeather>;

  cityWeather:CityWeather = {
    city: this.city,
    weather: this.weather
  }

  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  // bookmarksList$: Observable<Bookmark[]>;
  // isCurrentFavorite$: Observable<boolean>;

  searchControl: FormControl;
  text: string;

  private componentDestroyed$ = new Subject();


  constructor(private store: Store){

  console.log(this.cityWeather);

  }
  
  ngOnInit(){
    this.searchControl = new FormControl('', Validators.required);
    this.store.pipe(takeUntil(this.componentDestroyed$))
    .subscribe(value => this.cityWeather = value);
  
  this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
  this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

  }
  
  
  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();

  }


  onToggleBookmark() {
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
  }



}
