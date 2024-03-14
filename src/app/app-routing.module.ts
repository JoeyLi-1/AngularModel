import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStandaloneComponent } from '@app/standalone/cardStandalone.component';
import { AppComponent } from '@app/app.component';

const routes: Routes = [
  { path: 'standalone', component: CardStandaloneComponent },
  { path: 'home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
