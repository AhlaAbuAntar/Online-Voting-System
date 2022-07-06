import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmfrageComponent } from './umfrage.component';

describe('UmfrageComponent', () => {
  let component: UmfrageComponent;
  let fixture: ComponentFixture<UmfrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmfrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
