import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPage } from './comment.page';

describe('CommentPage', () => {
  let component: CommentPage;
  let fixture: ComponentFixture<CommentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
