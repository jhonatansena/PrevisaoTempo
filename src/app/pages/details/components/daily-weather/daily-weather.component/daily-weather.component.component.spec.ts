import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeather.ComponentComponent } from './daily-weather.component.component';

describe('DailyWeather.ComponentComponent', () => {
  let component: DailyWeather.ComponentComponent;
  let fixture: ComponentFixture<DailyWeather.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWeather.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWeather.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
