import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteTemplateComponent } from './calculette-template.component';

describe('CalculetteTemplateComponent', () => {
  let component: CalculetteTemplateComponent;
  let fixture: ComponentFixture<CalculetteTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculetteTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculetteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
