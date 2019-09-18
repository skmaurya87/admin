import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotleComponent } from './hotle.component';

describe('HotleComponent', () => {
  let component: HotleComponent;
  let fixture: ComponentFixture<HotleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
