import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Style } from '../../core/models/style';

@Injectable({
    providedIn: 'root'
})
export class ReportHeaderService {
    selectStyle: BehaviorSubject<Style>;

    constructor() { 
        this.selectStyle = new BehaviorSubject<any>(null);
    }
    
    setStyle(style: Style) {
        this.selectStyle.next(style);
    }
}

