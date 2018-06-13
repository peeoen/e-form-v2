import { ControlBase } from "./control-base";

export class ControlDropdown extends ControlBase<string> {
    controlName = 'dropdown';
    options: any[] = [];
    styles: ControlDropdownStyle = new ControlDropdownStyle();

    constructor(options: {id:string}) {
        super(options);
        this.options = options['options'] || [];
    }
}


export class ControlDropdownStyle {
    fontFamily: string;
    fontSize: string;
    bold: boolean;
    width: string;

    constructor(options: {
        fontFamily?: string;
        fontSize?: string;
        bold?: boolean;
        width?: string;
    } = {}) {
        this.fontFamily = options.fontFamily || 'Open Sans';
        this.fontSize = options.fontSize || '16px';
        this.bold = options.bold || false;
        this.width = options.width || 'auto';
    }
}