import { ControlBase } from "./control-base";

export class ControlLabel extends ControlBase<string> {
    controlType = 'label';
    type: string;
    
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
