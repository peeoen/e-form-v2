import { Page } from "../../models/page";
import { ReportStateModel } from "../states/report.state";


const initalPage = new Page(1);
initalPage.imagePreview = 'assets/pages-preview/a4.png';
const initalPage1 = new Page(2);
initalPage1.imagePreview = 'assets/pages-preview/a4.png';

const report1: ReportStateModel = {
    id: 'e680256707d4',
    reportName: 'Report 1',
    active: false,
    description: 'The safety of operational requires that all relevant statements are considered and the associated responsibility and accountability for compliance are accepted, either jointly or singly.',
    imagePreview: 'assets/forms-preview/form1.jpg',
    pages: [
        initalPage,
        initalPage1
    ]
};


const r2InitalPage1 = new Page(1);
r2InitalPage1.imagePreview = 'assets/pages-preview/a4.png';
const r2InitalPage2 = new Page(2);
r2InitalPage2.imagePreview = 'assets/pages-preview/a4.png';

const report2: ReportStateModel = {
    id: 'f648213709ui',
    reportName: 'Report 2',
    active: false,
    description: 'The safety of operational requires that all relevant statements are considered and the associated responsibility and accountability for compliance are accepted, either jointly or singly.',
    imagePreview: 'assets/forms-preview/form1.jpg',
    pages: [
        r2InitalPage1,
        r2InitalPage2
    ]
};
 

export const reportsData: ReportStateModel[] = [
    report1,
    report2
]