import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmView } from "./FilmView";

describe('FilmView', () => {
  let component: FilmView;
  let fixture: ComponentFixture<FilmView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
