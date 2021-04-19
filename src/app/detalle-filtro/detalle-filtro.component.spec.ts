import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFiltroComponent } from './detalle-filtro.component';

describe('DetalleFiltroComponent', () => {
  let component: DetalleFiltroComponent;
  let fixture: ComponentFixture<DetalleFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
