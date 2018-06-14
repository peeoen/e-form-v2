import { Injectable } from '@angular/core';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { BehaviorSubject, merge } from 'rxjs';
import { Control } from '../../core/models/control';
import { ChangeActivePage, ChangeControlActive, ReportStateModel, SetInactiveAllControl } from './../../core/state mangement/states/report.state';


@Injectable({
    providedIn: 'root'
})
export class ReportStateService {

    changeActivePage$: BehaviorSubject<any>;
    changeControlPage$: BehaviorSubject<any>;

    constructor(private store: Store,
        private action$: Actions) {
        this.changeActivePage$ = new BehaviorSubject<any>(null);
        this.changeControlPage$ = new BehaviorSubject<any>(null);
        this.setActionChangeActivePage();
        this.setActionChangeControlPage();
    }

    private setActionChangeActivePage() {
        this.action$.pipe(
            ofActionSuccessful(ChangeActivePage)
        ).subscribe(payload => {
            this.changeActivePage$.next(payload);
        })
    }

    private setActionChangeControlPage() {
        const mergeAction = merge(
            this.action$.pipe(ofActionSuccessful(ChangeControlActive)),
            this.action$.pipe(ofActionSuccessful(SetInactiveAllControl)),
        )

        mergeAction.subscribe((val) => {
            this.changeControlPage$.next(val);
        })
    }


    getControlActive(): Control {
        const reports: ReportStateModel[] = this.store.selectSnapshot(state => state.reports);
        const report = reports.find(s => s.active === true);
        if (report) {
            const page = report.pages.find(p => p.active === true);
            if (page) {
                return page.controls.find(c => c.active === true);
            }
        }
    }
}