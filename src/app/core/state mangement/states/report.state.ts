import { State } from '@ngxs/store';
import { Page } from '../../models/page';

export interface ReportStateModel { 
    reportName: string;
    active: boolean;
    pages?: Page[];
    imagePreview?: any;
    description?: string;
}


const initial: ReportStateModel = {
    reportName: 'report name',
    active: true,
    description: 'The safety of operational requires that all relevant statements are considered and the associated responsibility and accountability for compliance are accepted, either jointly or singly.',
    imagePreview: 'assets/forms-preview/form1.jpg',
    pages: [
        new Page(1)
    ]
};

@State<ReportStateModel[]>({
    name: 'reports',
    defaults: [
        initial
    ],
})
export class ReportsState {

}
