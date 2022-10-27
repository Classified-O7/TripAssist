import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddataComponent } from './addata.component';

describe('AddataComponent', () => {
  let component: AddataComponent;
  let fixture: ComponentFixture<AddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
