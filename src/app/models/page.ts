import { Control } from './control';

export interface Page { 
    pageNumber: number;
    title: string;
    imagePreview?: any;
    controls?: Control[];
}
