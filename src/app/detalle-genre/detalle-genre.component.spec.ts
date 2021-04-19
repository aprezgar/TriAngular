import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGenreComponent } from './detalle-genre.component';

describe('DetalleGenreComponent', () => {
  let component: DetalleGenreComponent;
  let fixture: ComponentFixture<DetalleGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
