import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from "immer";
import { Control } from '../../models';
import { Page } from '../../models/page';
import { reportsData } from './../data/report.data';
import { ReportStateModel } from './report.state';

export interface ReportStateModel {
    id: string;
    reportName: string;
    active?: boolean;
    pages?: Page[];
    imagePreview?: any;
    description?: string;
}

export class AddControl {
    static readonly type = '[Report] AddControl';
    constructor(public control: Control) { }
}

export class ChangeActivePage {
    static readonly type = '[Report] ChangeActivePage';
    constructor(public pageNumber: number) { }
}

export class ChangeReportActive {
    static readonly type = '[Report] ChangeReportActive';
    constructor(public reportId: string) { }
}

export class AddPage {
    static readonly type = '[Report] AddPage';
    constructor() { }
}

@State<ReportStateModel[]>({
    name: 'reports',
    defaults: reportsData,
})
export class ReportsState {

    constructor(private store: Store) { }


    @Selector() static controlOfPageActive(state: ReportStateModel[]) {
        const reportActive = state.find(r => r.active === true)
        if (reportActive) {
            const controls = reportActive.pages.find(p => p.active === true);
            if (controls && controls.controls) {
                return controls.controls
            }
        }
        return null;
    }

    @Selector() static pageOfReportSelected(state: ReportStateModel[]) {
        const reportActive = state.find(x => x.active === true);
        if (reportActive) {
            return reportActive.pages;
        }
        return null;
    }

    @Selector() static pageActive(state: ReportStateModel[]) {
        const reportActive = state.find(x => x.active === true);
        if (reportActive) {
            const pageActive = reportActive.pages.find(p => p.active === true);
            return pageActive;
        }
        return null;
    }

    @Action(ChangeReportActive)
    changeReportActive(ctx: StateContext<ReportStateModel[]>, action: ChangeReportActive) {
        const state = ctx.getState();
        ctx.setState(
            produce(state, draft => {
                draft.filter(x => x.active === true).forEach(r => r.active = false);
                const reportSelected = draft.find(x => x.id === action.reportId);
                reportSelected.active = true;
            })
        )
    }


    @Action(ChangeActivePage)
    changeActivePage(ctx: StateContext<ReportStateModel[]>, action: ChangeActivePage) {
        const state = ctx.getState();
        produce(state, draft => {
            const reportActive = draft.find(r => r.active === true);
            const pageActive = reportActive.pages.filter(p => p.active === true);
            if (pageActive.length > 0) {
                pageActive.forEach(p => p.active = false);
            }
            const page = reportActive.pages.find(p => p.pageNumber === action.pageNumber);
            if (page) {
                page.active = true;
            }
        })
    }


    @Action(AddControl)
    addControl(ctx: StateContext<ReportStateModel[]>, action: AddControl) {
        const state = ctx.getState();
        produce(state, draft => {
            const reportActive = draft.find(x => x.active === true);
            if (reportActive) {
                const pageActive = reportActive.pages.find(p => p.active === true);
                if (!pageActive.controls) {
                    pageActive.controls = [];
                }
                pageActive.controls.push(action.control);
            }
        })
    }


    @Action(AddPage)
    addPage(ctx: StateContext<ReportStateModel[]>, action: AddPage) {
        const state = ctx.getState();
        ctx.setState(
            produce(state, draft => {
                const reportActive = draft.find(r => r.active === true);
                if (reportActive) {
                    let maxPage = Math.max(...reportActive.pages.map(p => p.pageNumber));
                    const newPage = new Page(++maxPage);
                    newPage.imagePreview = 'assets/pages-preview/a4.png';
                    reportActive.pages.push(newPage);
                    reportActive.pages.filter(r => r.active === true).forEach(r => r.active = false);
                    newPage.active = true;
                }
            })
        );
    }
}


