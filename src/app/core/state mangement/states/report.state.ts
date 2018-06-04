import { State } from '@ngxs/store';
import { Page } from '../../models/index';

export interface ReportStateModel { 
    reportName: string;
    active: boolean;
    pages?: Page[];
    imagePreview?: any;
    description?: string;
}

@State<ReportStateModel>({
    name: 'reports',
    defaults: null,
})
export class ReportsState {

}
