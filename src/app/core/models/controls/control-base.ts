export class ControlBase<T> {
    value: T;
    controlName: string;
    id: string;
    styles: any;
    constructor(options: {
        id: string,
        controlName?: string
        value?: T,
    }) {
        this.id = options.id;
        this.value = options.value;
        this.controlName = options.controlName || '';
    }
}
