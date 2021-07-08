import { Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

export class ReactComponentBase<P, S, O> {
    private _props: P;
    private _states: S;
    @Input('props')
    set props(val: P) {
        this._props = _.merge(this._props, val);
    }

    get props(): P {
        return this._props;
    }

    set states(val: S) {
        this.setStates(val);
    }

    get states(): S {
        return this._states;
    }

    @Output() changed: EventEmitter<O> = new EventEmitter(); 

    constructor(defaultStates?: S, defaultProps?: P) {
        this._props = {} as P;
        this._states = {} as S;
        if (defaultProps) {
            this._props = defaultProps;
        }
        if (defaultStates) {
            this._states = defaultStates;
        }
    }

    setStates(data: { [key: string]: any }, cb?: () => void) {
        if (_.isObject(data)) {
            _.forEach(_.keys(data), (key) => {
                if (_.isObject(data[key])) {
                    this.states[key] = _.cloneDeep(data[key]);
                } else {
                    this._states[key] = data[key];
                }
            });
            if (cb) {
                cb();
            }
        } else {
            console.error('setStates param should be an object: ', data);
        }
    }
}
