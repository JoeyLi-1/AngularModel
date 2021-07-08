import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestModComponent} from './testMod.component';
import { TestHeaderComponent } from './testHeader/testHeader.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TestModComponent,
        TestHeaderComponent
    ],
    exports: [
        TestModComponent
    ],
    providers: [
        
    ]
})

export class TestModModule {
    static forRoot() {
        return {
            ngModule: TestModModule
        };
    }
}
