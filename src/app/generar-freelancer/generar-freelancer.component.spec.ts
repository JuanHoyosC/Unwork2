import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarFreelancerComponent } from './generar-freelancer.component';

describe('GenerarFreelancerComponent', () => {
  let component: GenerarFreelancerComponent;
  let fixture: ComponentFixture<GenerarFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
