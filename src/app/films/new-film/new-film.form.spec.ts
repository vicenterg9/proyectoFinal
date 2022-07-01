import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilmForm } from './new-film.form';

describe('NewFilmForm', () => {
  let component: NewFilmForm;
  let fixture: ComponentFixture<NewFilmForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFilmForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFilmForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
