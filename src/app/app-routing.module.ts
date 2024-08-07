import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardStandaloneComponent } from '@app/standalone/cardStandalone.component';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/normalComponent/home.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'standalone', component: CardStandaloneComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
