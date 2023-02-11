import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsListsComponent } from './submissions-lists.component';

describe('SubmissionsListsComponent', () => {
  let component: SubmissionsListsComponent;
  let fixture: ComponentFixture<SubmissionsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
