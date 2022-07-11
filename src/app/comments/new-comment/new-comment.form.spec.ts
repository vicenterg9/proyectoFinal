import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommentForm } from './new-comment.form';

describe('NewCommentForm', () => {
  let component: NewCommentForm;
  let fixture: ComponentFixture<NewCommentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommentForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCommentForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
