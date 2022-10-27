import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsideComponent } from './adside.component';

describe('AdsideComponent', () => {
  let component: AdsideComponent;
  let fixture: ComponentFixture<AdsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
