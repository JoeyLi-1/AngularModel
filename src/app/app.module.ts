import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TestModModule } from './reactComponent/testMod/testMod.module';
import { MatTreeComponent } from '@app/reactComponent/angularMaterial/matTree/matTree.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModModule.forRoot(),
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
