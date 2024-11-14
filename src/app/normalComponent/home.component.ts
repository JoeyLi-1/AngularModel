import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DataCache } from '@app/services/dataCache.service';
@Component({
    selector: 'home',
    template: `
        <div class="app-basic">
            <app-basic-drawer [name]="'testMod'">
                <app-testMod></app-testMod>
            </app-basic-drawer>

            <app-basic-drawer [name]="'matTree'">
                <app-matTree></app-matTree>
            </app-basic-drawer>

            <app-basic-drawer [name]="'flatMatTreeBasic'">
                <app-flatMatTreeBasic></app-flatMatTreeBasic>
            </app-basic-drawer>

            <app-basic-drawer [name]="'contentProjection'">
                <app-contentProjection></app-contentProjection>
            </app-basic-drawer>

            <app-basic-drawer [name]="'behaviorSubject'">
                <app-behaviorSubject></app-behaviorSubject>
            </app-basic-drawer>

            <app-basic-drawer [name]="'listTesting'">
                <app-listTesting></app-listTesting>
            </app-basic-drawer>

            <app-basic-drawer [name]="'signalTesting'">
                <test-signal></test-signal>
            </app-basic-drawer>

            <app-basic-drawer [name]="'zoneTesting'">
                <app-zoneParent></app-zoneParent>
            </app-basic-drawer>

            <app-basic-drawer [name]="'ReactSignalTesting'">
                <test-react-signal></test-react-signal>
            </app-basic-drawer>

            <app-basic-drawer [name]="'OnPushTest'">
                <a-op></a-op>
            </app-basic-drawer>

            <app-basic-drawer [name]="'CacheTest'">
                <div><p>Be careful, the service is singleton. But it will not be shared with standalone components</p></div>
                <div><label>{{cacheNumber}}</label></div>
                <button (click)="increase()">Increase</button>
                <button (click)="decrease()">Decrease</button>
            </app-basic-drawer>

            <app-basic-drawer [name]="'Mat table test'">
                <app-matTable></app-matTable>
            </app-basic-drawer>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {
    private cache = inject(DataCache);

    cacheNumber = 0;
    gridProps = {
        columns: ['column1', 'column2'],
        rows: [['row11', 'row12'], ['row21', 'row22']]
    };

    increase() {
        this.cache.setFirstNumCache(this.cache.getFirstNumCache() + 1);
        this.cacheNumber = this.cache.getFirstNumCache();
      }
    
      decrease() {
        this.cache.setFirstNumCache(this.cache.getFirstNumCache() - 1);
        this.cacheNumber = this.cache.getFirstNumCache();
      }
}