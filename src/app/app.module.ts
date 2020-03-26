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

@NgModule({
  declarations: [
    AppComponent,
    Spotlight,
    SpotlightHeader,
    ValueFilterComponet,
    PaginationComponent
  ],
  imports: [  //导入比如 navigation 第三方的库 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [   //自动给写成单例 
    SpotlightService,
    SpotlightHeaderService,
    ValueFilterService,
    PaginationService
  ],
  bootstrap: [AppComponent]//启动时加载那个模块
})
export class AppModule { }
