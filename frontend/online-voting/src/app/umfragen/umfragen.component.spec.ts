import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmfragenComponent } from './umfragen.component';

describe('UmfragenComponent', () => {
  let component: UmfragenComponent;
  let fixture: ComponentFixture<UmfragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmfragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmfragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
