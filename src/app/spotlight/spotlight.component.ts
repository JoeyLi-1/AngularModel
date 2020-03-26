import { Component } from '@angular/core';
import { SpotlightService } from './spotlight.service';
import { SpotlightModel } from './spotlight';

@Component({
    selector: 'spotlight',
    templateUrl: './spotlight.component.html'
})

export class Spotlight {
    model: SpotlightModel;
    constructor(public svc: SpotlightService) {//依赖注入  单例  组件
        this.model = {
            name: 'spotlight',
            analysis: [{name: 'analysis - 1'}, {name: 'analysis - 2'}],
            header: { name: 'spotlightHeader' },
            valueFilter: { name: 'ValueFilter' },
            pagination: { count: ['1', '2'], currentIndex: 0 }
        };
    }

    selectPageChanged(index: number) {   //消息绑定
        this.svc.selectedPageChanged(index, this.model);
    }
}