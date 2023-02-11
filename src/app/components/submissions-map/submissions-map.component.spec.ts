import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsMapComponent } from './submissions-map.component';

describe('SubmissionsMapComponent', () => {
  let component: SubmissionsMapComponent;
  let fixture: ComponentFixture<SubmissionsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
