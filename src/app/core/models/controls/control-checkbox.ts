import { ControlBase } from "./control-base";

export class ControlCheckbox extends ControlBase<boolean> {
    controlName = 'checkbox';
    options: any[] = [];
    styles: ControlCheckboxStyle = new ControlCheckboxStyle();

    constructor(options: {id:string}) {
        super(options);
        this.options = options['options'] || [];
    }
}


export class ControlCheckboxStyle {
    fontFamily: string;
    fontSize: string;
    bold: boolean;

    constructor(options: {
        fontFamily?: string;
        fontSize?: string;
        bold?: boolean;
    } = {}) {
        this.fontFamily = options.fontFamily || 'Open Sans';
        this.fontSize = options.fontSize || '16px';
        this.bold = options.bold || false;
    }
}