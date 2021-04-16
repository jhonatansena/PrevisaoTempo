import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTiypeaheadComponent } from './cities-tiypeahead.component';

describe('CitiesTiypeaheadComponent', () => {
  let component: CitiesTiypeaheadComponent;
  let fixture: ComponentFixture<CitiesTiypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesTiypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTiypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
