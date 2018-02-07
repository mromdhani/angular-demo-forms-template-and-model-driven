import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteModelComponent } from './calculette-model.component';

describe('CalculetteModelComponent', () => {
  let component: CalculetteModelComponent;
  let fixture: ComponentFixture<CalculetteModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculetteModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculetteModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
