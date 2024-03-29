import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdspendComponent } from './adspend.component';

describe('AdspendComponent', () => {
  let component: AdspendComponent;
  let fixture: ComponentFixture<AdspendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdspendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdspendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
