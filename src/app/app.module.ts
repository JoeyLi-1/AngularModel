import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TestModModule } from './reactComponent/testMod/testMod.module';
import { MatTreeComponent } from '@app/reactComponent/angularMaterial/matTree/matTree.component';
import { FlatMatTreeBasicComponent } from '@app/reactComponent/angularMaterial/matTree/flatMatTreeBasic/flatMatTreeBasic.component';
import { DummyTextComponent } from '@app/reactComponent/dummyText/dummyText.component';
import { ZippyBasicComponent } from '@app/reactComponent/contentProjection/singleSlotProjection.component';
import { ZippyMultislotComponent } from '@app/reactComponent/contentProjection/multiSlotProjection.component';
import { ContentProjectionComponent } from '@app/reactComponent/contentProjection/contentProjection/contentProjection.component';
import { BehaviorSubjectComponent } from '@app/reactComponent/rxjs/behaviorSubject/behaviorSubject.component';

import { TestDisplayComponent } from '@app/normalComponent/textDisplay.component';
import { TestDisplaySubjectComponent } from '@app/normalComponent/textDisplaySubject.component';


@NgModule({
  declarations: [
    AppComponent,
    MatTreeComponent,
    FlatMatTreeBasicComponent,
    DummyTextComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ContentProjectionComponent,
    BehaviorSubjectComponent,
    TestDisplayComponent,
    TestDisplaySubjectComponent
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
