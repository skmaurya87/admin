import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFormComponent } from './quick-form.component';

describe('QuickFormComponent', () => {
  let component: QuickFormComponent;
  let fixture: ComponentFixture<QuickFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
