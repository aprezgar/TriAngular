import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltrosComponent } from './filtros/filtros.component';
import { DetalleFiltroComponent } from './detalle-filtro/detalle-filtro.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { PlaySongComponent } from './play-song/play-song.component';
import { MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TestdbComponent } from './testdb/testdb.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ListaCancionesComponent,
    FilterPipe,
    FiltrosComponent,
    DetalleFiltroComponent,
    ReproductorComponent,
    PlaySongComponent,
    TestdbComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
