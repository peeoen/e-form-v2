import { ControlBase } from "./control-base";

export class ControlImage extends ControlBase<boolean> {
    controlName = 'image';
    options: any[] = [];
    styles: ControlImageStyle = new ControlImageStyle();

    constructor(options: {id:string}) {
        super(options);
        this.options = options['options'] || [];
    }
}


export class ControlImageStyle {
    width: string;
    height: string;

    constructor(options: {
        width?: string;
        height?: string;
    } = {}) {
        this.width = options.width || 'auto';
        this.height = options.height || 'auto';
    }
}