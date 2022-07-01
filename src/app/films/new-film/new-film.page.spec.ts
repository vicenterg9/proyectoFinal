import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilmPage } from './new-film.page';

describe('NewFilmPage', () => {
  let component: NewFilmPage;
  let fixture: ComponentFixture<NewFilmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFilmPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
