import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsList } from './films.list';

describe('FilmsList', () => {
  let component: FilmsList;
  let fixture: ComponentFixture<FilmsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
