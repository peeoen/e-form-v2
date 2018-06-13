import { ControlBase } from "./control-base";

export class ControlTextbox extends ControlBase<string> {
    controlName = 'textbox';
    options: any[] = [];
    styles: ControlTextboxStyle = new ControlTextboxStyle();

    constructor(options: {id:string}) {
        super(options);
        this.options = options['options'] || [];
    }
}


export class ControlTextboxStyle {
    fontFamily: string;
    fontSize: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    alignment: string;
    width: string;

    constructor(options: {
        fontFamily?: string;
        fontSize?: string;
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        alignment?: string;
        width?: string;
    } = {}) {
        this.fontFamily = options.fontFamily || 'Open Sans';
        this.fontSize = options.fontSize || '16px';
        this.bold = options.bold || false;
        this.italic = options.italic || false;
        this.underline = options.underline || false;
        this.alignment = options.alignment || 'left';
        this.width = options.width || 'auto';
    }
}