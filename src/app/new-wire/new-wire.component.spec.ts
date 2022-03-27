import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWireComponent } from './new-wire.component';

describe('NewWireComponent', () => {
  let component: NewWireComponent;
  let fixture: ComponentFixture<NewWireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
