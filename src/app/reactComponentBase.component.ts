import { Input, Output, EventEmitter, Directive, OnChanges, SimpleChanges, isDevMode } from '@angular/core';
import * as _ from 'lodash';

// This flag will output all the emit and change event of all component inherited from ReactComponentBase
// Just for debugging use. It is only working under dev mode.
const outputTrackingInfo = true;

export class MyEventEmitter<T> extends EventEmitter<T> {
    caller: any;
    constructor(c: any) {
        super();
        this.caller = c;
    }

    public emit(data?: any): void {
        super.emit(data);
        if (isDevMode() && outputTrackingInfo) {
            // One emit should not trigger more than one change event for same component
            // otherwise, it could cause performance issue
            console.log(`${this.caller.constructor.name} emitted a message`);
        }
    }
}

@Directive({})
export class ReactComponentBase<P, S, O> implements OnChanges {
    private _props: P;
    private _states: S;
    @Input('props')
    set props(val: P) {
        this._props = _.mergeWith(this._props, val, (obj, src) => {
            if (_.isArray(src)) {
                return src;
            }
        });
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

    @Output() changed: MyEventEmitter<O> = new MyEventEmitter(this);

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

    ngOnChanges(changes: SimpleChanges): void {
        if (isDevMode() && outputTrackingInfo) {
            console.log(`${this.constructor.name} received changes notification`);
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
