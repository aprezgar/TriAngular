import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArtistComponent } from './detalle-artist.component';

describe('DetalleArtistComponent', () => {
  let component: DetalleArtistComponent;
  let fixture: ComponentFixture<DetalleArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
