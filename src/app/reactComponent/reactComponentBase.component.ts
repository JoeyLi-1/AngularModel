// Extends all the components from this class could give you a simple solution to set all component`s change strategy to "OnPush".
// setStates will cloneDeep all the objects and this will make sure child component be marked as dirty and will be check next time.
// There is flaw of course, the property in state may not be an input property of any child components. And if it is changed, it will be cloneDeep as well.
// That is not necessary. Only change reference is okay actually.
// To clone all object of states is just for easy coding and clean code.
// In most cases, the time wasted by the unnecessary cloneDeep could be ignored.
import { Input, Output, EventEmitter, Directive, OnChanges, SimpleChanges, isDevMode } from '@angular/core';
import * as _ from 'lodash';

// To prevent user use states like this: this.state.objA = objB;
// If you do it like this child component will not be updated.
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// This flag will output all the emit and change event of all component inherited from ReactComponentBase
// Just for debugging use. It is only working under dev mode.
const outputTrackingInfo = true;

// This is for debug use. You can find out wrong event handlers easily. And even some circular invoke.
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

    // If you pass a reference of parent object and then change it in child component. It will update the parent as well. 
    // But we don`t think that is a good practice. 
    get props(): Readonly<P> {
        return this._props;
    }

    set states(val: S) {
        this.setStates(val);
    }

    get states(): Readonly<S> {
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

    // This is for debug as well. As class MyEventEmitter
    ngOnChanges(changes: SimpleChanges): void {
        if (isDevMode() && outputTrackingInfo) {
            console.log(`${this.constructor.name} received changes notification`);
        }
    }

    // This idea come from ReactNative. 
    setStates(data: Partial<S>, cb?: () => void) {
        _.forEach(_.keys(data), (key) => {
            // @ts-ignore
            if (_.isFunction(data[key])) {
                // @ts-ignore
                this.states[key] = data[key];
            }
            // @ts-ignore
            else if (_.isObject(data[key])) {
                // @ts-ignore
                this.states[key] = _.cloneDeep(data[key]);
            } else {
                // @ts-ignore
                this._states[key] = data[key];
            }
        });
        if (cb) {
            cb();
        }
    }
}
