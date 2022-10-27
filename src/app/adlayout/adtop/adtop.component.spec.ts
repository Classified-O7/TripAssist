import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtopComponent } from './adtop.component';

describe('AdtopComponent', () => {
  let component: AdtopComponent;
  let fixture: ComponentFixture<AdtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdtopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
