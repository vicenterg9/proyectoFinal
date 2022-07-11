import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentPage } from './new-comment.page';

describe('NewCommentPage', () => {
  let component: NewCommentPage;
  let fixture: ComponentFixture<NewCommentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
