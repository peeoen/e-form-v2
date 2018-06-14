import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlCheckboxStyle } from '../../../../core/models/controls/control-checkbox';
import { ControlDirective } from '../../../../share/directives/control.directive';
import { ReportStateService } from '../../../services/report-state.service';
import { ControlActiveDirective } from './../../../../share/directives/control-active.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit, OnDestroy  {
  allowedDrag = false;
  @Input() actionSubscription$: Subscription;

  @Input() id: string;
  @Input() styles: ControlCheckboxStyle;
  @ViewChild(ControlDirective) control: ControlDirective;

  @ViewChild(ControlActiveDirective) controlActive: ControlActiveDirective;

  constructor(private reportStateService: ReportStateService,
    private cd: ChangeDetectorRef) { 

      
    }


  ngOnInit() {
    this.actionSubscription$ = this.reportStateService.changeControlPage$.subscribe((control: any) => {
      if (control && control.hasOwnProperty('id')) {
        this.allowedDrag = (control.id === this.id) ? true : false;
      } 
      else {
        this.allowedDrag = false;
      }
      this.cd.markForCheck();
    })
  }

  ngOnDestroy() {
    if (this.actionSubscription$) {
      this.actionSubscription$.unsubscribe();
    }
  }

  getStyle() {
    if (this.styles) {
      const styles = {
        'font-family': this.styles.fontFamily,
        'font-size': this.styles.fontSize || '',
        'font-weight': (this.styles.bold) ? 'bold': 'normal' || '',
      }
      return styles;
    }

  }
}
