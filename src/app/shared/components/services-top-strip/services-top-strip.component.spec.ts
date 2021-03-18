import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTopStripComponent } from './services-top-strip.component';

describe('ServicesTopStripComponent', () => {
  let component: ServicesTopStripComponent;
  let fixture: ComponentFixture<ServicesTopStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTopStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesTopStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
