import { Injectable } from '@angular/core';
import { PaginationProps } from '../spotlight';
import { EventEmitter } from '@angular/core';
// import { $ } from 'protractor';
import * as $ from 'jquery';
@Injectable()

export class PaginationService {
    constructor() {
        
    }

    selectedPageChanged(index: string, cb: EventEmitter<any>, data: PaginationProps) {
        const indexId = data.count.indexOf(index);
        console.log('--paginate----selectedPageChanged->>>indexId: ',indexId)
        cb.emit(indexId);
        data.currentIndex = indexId;

       
        // $scope.switch_status={

        //     sw:1
        // }
        // $scope.check = function (color) {
        //     if (color == "active") {
        //         $scope.switch_status={
        //             sw:1
        //         }
        //     } else {
        //         $scope.switch_status={
        //             sw:0
        //         }
    
        //     }
    
        // };
    }
}

