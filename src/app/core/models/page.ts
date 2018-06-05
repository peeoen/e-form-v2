import { Control } from './control';

export class Page { 
    pageNumber: number;
    imagePreview?: any;
    controls?: Control[];

    constructor(pageNumber: number) {
        this.pageNumber = pageNumber;
    }
}
