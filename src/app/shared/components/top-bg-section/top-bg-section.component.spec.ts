import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBgSectionComponent } from './top-bg-section.component';

describe('TopBgSectionComponent', () => {
  let component: TopBgSectionComponent;
  let fixture: ComponentFixture<TopBgSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBgSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
