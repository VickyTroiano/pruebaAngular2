import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponenteComponent } from './form-componente.component';

describe('FormComponenteComponent', () => {
  let component: FormComponenteComponent;
  let fixture: ComponentFixture<FormComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
