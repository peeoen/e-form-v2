import { Selector, State } from '@ngxs/store';
import { Page } from '../../models/page';

export interface ReportStateModel {
    id: string;
    reportName: string;
    active: boolean;
    pages?: Page[];
    imagePreview?: any;
    description?: string;
}

const initalPage =  new Page(1);
initalPage.imagePreview = 'assets/pages-preview/a4.png';

const initalPage1 =  new Page(2);
initalPage1.imagePreview = 'assets/pages-preview/a4.png';

const initial: ReportStateModel = {
    id: 'e680256707d4',
    reportName: 'report name',
    active: true,
    description: 'The safety of operational requires that all relevant statements are considered and the associated responsibility and accountability for compliance are accepted, either jointly or singly.',
    imagePreview: 'assets/forms-preview/form1.jpg',
    pages: [
        initalPage,
        initalPage1
    ]
};

@State<ReportStateModel[]>({
    name: 'reports',
    defaults: [
        initial
    ],
})
export class ReportsState {
    @Selector() static pagesActive(state: ReportStateModel[]) {
        const reportActive = state.find(x => x.active === true);
        if (reportActive) {
            return reportActive.pages;
        }
        return null;
    }
}
