import { Control } from './control';

export class Page { 
    pageNumber: number;
    imagePreview?: any;
    controls?: Control[];
    active?: boolean;
    
    constructor(pageNumber: number) {
        this.pageNumber = pageNumber;
    }
}
