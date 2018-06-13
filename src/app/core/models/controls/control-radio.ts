import { ControlBase } from "./control-base";

export class ControlRadio extends ControlBase<string> {
    controlName = 'radio';
    options: any[] = [];
    styles: ControlRadioStyle = new ControlRadioStyle();

    constructor(options: {id:string}) {
        super(options);
        this.options = options['options'] || [];
    }
}


export class ControlRadioStyle {
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