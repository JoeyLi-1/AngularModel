import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideExperimentalZonelessChangeDetection } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { TestModModule } from './reactComponent/testMod/testMod.module';
import { MatTreeComponent } from '@app/reactComponent/angularMaterial/matTree/matTree.component';
import { FlatMatTreeBasicComponent } from '@app/reactComponent/angularMaterial/matTree/flatMatTreeBasic/flatMatTreeBasic.component';
import { DummyTextComponent } from '@app/reactComponent/dummyText/dummyText.component';
import { ZippyBasicComponent } from '@app/reactComponent/contentProjection/singleSlotProjection.component';
import { ZippyMultislotComponent } from '@app/reactComponent/contentProjection/multiSlotProjection.component';
import { ContentProjectionComponent } from '@app/reactComponent/contentProjection/contentProjection/contentProjection.component';
import { BehaviorSubjectComponent } from '@app/reactComponent/rxjs/behaviorSubject/behaviorSubject.component';
import { MatTableComponent } from '@app/reactComponent/angularMaterial/table/matTable.component';

import { TestDisplayComponent } from '@app/normalComponent/textDisplay.component';
import { TestDisplaySubjectComponent } from '@app/normalComponent/textDisplaySubject.component';
import { TestDisplayObjInputComponent } from '@app/normalComponent/textDisplayObjInput.component';
import { BasicListComponent } from '@app/normalComponent/basicList.component';
import { ListTestingComponent } from '@app/reactComponent/performanceTesting/listTesting/listTesting.component';
import { BasicDrawerComponent } from '@app/normalComponent/basicDrawer.component';
import { TreeChecklistExample } from '@app/reactComponent/angularMaterial/matTree/officialExample/treeCheckListExample/treeCheckListExample.component';
import { HomeComponent } from '@app/normalComponent/home.component';

import { SignalComponent } from '@app/reactComponent/signalTest/signal.component';
import { SignalSubComponent } from '@app/reactComponent/signalTest/signalSub.component';
import { ReactSignalComponent } from '@app/reactComponent/signalTest/reactSignal.component';
import { ZoneParentComponent } from '@app/reactComponent/zoneTest/zoneParent/zoneParent.component';
import { ZoneChildComponent } from '@app/reactComponent/zoneTest/zoneChild/zoneChild.component';
import { DataCache } from '@app/services/dataCache.service';
import { AOpComponent, BOpComponent, COpComponent } from '@app/normalComponent/onPushTest.component';


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
    TestDisplaySubjectComponent,
    TestDisplayObjInputComponent,
    BasicListComponent,
    ListTestingComponent,
    BasicDrawerComponent,
    TreeChecklistExample,
    SignalComponent,
    ZoneParentComponent,
    ZoneChildComponent,
    SignalSubComponent,
    ReactSignalComponent,
    AOpComponent,
    BOpComponent,
    COpComponent,
    HomeComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModModule.forRoot(),
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    provideExperimentalZonelessChangeDetection(),
    DataCache
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
