import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select} from '@ngrx/store';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelector from './state/home.selectors'

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;
  text: string;

  constructor(private store: Store){
    
  }
  
  ngOnInit(){
    this.searchControl = new FormControl('', Validators.required);
   
  }
  
  
  
    doSearch(){
      const query = this.searchControl.value;
      this.store.dispatch(fromHomeActions.loadCurrentWeather({query}))
    }

}
