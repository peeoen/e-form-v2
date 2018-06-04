import { State } from '@ngxs/store';
import { Page } from '../../models/index';

export interface ReportStateModel { 
    reportName: string;
    active: boolean;
    pages?: Page[];
    imagePreview?: any;
    description?: string;
}

const initial: ReportStateModel = {
    reportName: 'report name',
    active: true
};

@State<ReportStateModel>({
    name: 'reports',
    defaults: initial,
})
export class ReportsState {

}
