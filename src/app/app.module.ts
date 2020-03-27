import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpotlightService } from './spotlight/spotlight.service';
import { Spotlight } from './spotlight/spotlight.component';
import { SpotlightHeader } from './spotlight/spotlightHeader/spotlightHeader.component';
import { SpotlightHeaderService } from './spotlight/spotlightHeader/spotlightHeader.service';
import { ValueFilterComponet } from './spotlight/valueFiilter/valueFilter.component';
import { ValueFilterService } from './spotlight/valueFiilter/valueFilter.service';
import { PaginationService } from './spotlight/pagination/pagination.service';
import { PaginationComponent } from './spotlight/pagination/pagination.component';


import { SpotlightsComponent } from './spotlights/spotlights.component';
import { Pagination } from './spotlights/pagination/pagination.component';
import { SpotlightsHeader } from './spotlights/spotlightsHeader/spotlightsHeader.component';
import { ValueComponent } from './spotlights/valueFitter/value.component';

import { SpotlightsService } from './spotlights/spotlights.service';
import { PaginationsService } from './spotlights/pagination/pagination.component.service';
import { SpotlightsHeaderService } from './spotlights/spotlightsHeader/spotlightsHeader.service';
import { ValueService } from './spotlights/valueFitter/value.component.service';


@NgModule({
  declarations: [
    AppComponent,
    // Spotlight,
    // SpotlightHeader,
    // ValueFilterComponet,
    // PaginationComponent,
    SpotlightsComponent,
    Pagination,
    SpotlightsHeader,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // Service 
    SpotlightService,
    SpotlightHeaderService,
    ValueFilterService,
    PaginationService,
    SpotlightsService,
    PaginationsService,
    SpotlightsHeaderService,
    ValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
