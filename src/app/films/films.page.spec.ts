import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPage } from './films.page';

describe('FilmsPage', () => {
  let component: FilmsPage;
  let fixture: ComponentFixture<FilmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
