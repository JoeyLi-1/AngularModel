export class Model<T, Y> {
    props: T;
    states: Y;
    constructor(a: T, b: Y) {
        this.props = a;
        this.states = b;
    }

    setProps(val: T) {
        
    }
}