import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProyectosComponent } from './pagina-proyectos.component';

describe('PaginaProyectosComponent', () => {
  let component: PaginaProyectosComponent;
  let fixture: ComponentFixture<PaginaProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
