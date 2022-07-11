import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsList } from './comments.list';

describe('CommentsList', () => {
  let component: CommentsList;
  let fixture: ComponentFixture<CommentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
