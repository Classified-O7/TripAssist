import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddownComponent } from './addown.component';

describe('AddownComponent', () => {
  let component: AddownComponent;
  let fixture: ComponentFixture<AddownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
