import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReproductorComponent } from './reproductor/reproductor.component';

const routes: Routes = [
  { path: '', component: ReproductorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
