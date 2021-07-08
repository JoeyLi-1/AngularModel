import { ButtonType } from "src/app/const";

export class ButtonHandler {
    type: ButtonType;
    handler: Function;
    constructor(type: ButtonType, handler: Function) {
        this.type = type;
        this.handler = handler;
    }
}
