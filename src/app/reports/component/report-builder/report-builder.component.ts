import { Component, OnInit, ViewChild } from '@angular/core';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import * as jsPDF from 'jspdf';
import { DndDropEvent } from 'ngx-drag-drop';
import { Control } from '../../../core/models';
import { AddControl, ChangeActivePage, ReportStateModel } from '../../../core/state mangement/states';
import { ControlHostDirective } from '../../../share/directives/control-host.directive';
import { ControlsState, ControlStateModel } from './../../../core/state mangement/states/control.state';
import { ComponentLoaderService } from './../../../share/services/component-loader';
import { GUID } from './../../../utility/guid';


@Component({
  selector: 'app-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss']
})
export class ReportBuilderComponent implements OnInit {
  screen = {
    width: null,
    height: null
  };
  pdfSrc: string;
  controls: ControlStateModel[];

  @ViewChild(ControlHostDirective) controlHost: ControlHostDirective;

   constructor(private store: Store,
    private action$: Actions,
    private componentLoaderService: ComponentLoaderService) { }

  ngOnInit() {
    this.controls = this.store.selectSnapshot(ControlsState);
    this.componentLoaderService.setViewContainerRef(this.controlHost.viewContainerRef);
    this.renderPdf();

    this.action$.pipe(
      ofActionSuccessful(ChangeActivePage)
    ).subscribe(payload => {
      this.renderPdf();
    })
    
  }

  renderPdf() {
    this.componentLoaderService.clearTemplate();
    this.iniPDF();
    this.initPage();
  }

  iniPDF() {
    const doc = new jsPDF();
    const uri = doc.output('arraybuffer');
    this.pdfSrc = uri;
  }

  initPage() {
    const reports: ReportStateModel[] = this.store.selectSnapshot(state => state.reports);
    const pageActive = reports.find(r => r.active === true).pages.find(p => p.active === true);
    if (pageActive && pageActive.controls) {
      this.initialControls(pageActive.controls);
    }
  }


  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

  initialControls(controls: Control[]) {
    controls.forEach(c => {
      const comp = this.controls.find(x => x.name === c.controlName);
      if (comp) {
        this.componentLoaderService.createComponent(comp.component, c.id, c.x, c.y, comp.title);
      }
    })
  }

  onDrop(event: DndDropEvent) {
    if (event.dropEffect === 'copy') {
      this.createControl(event);
    }
    else if (event.dropEffect === 'move') {
      const id: string = event.data;
      this.componentLoaderService.moveControl(id, event.event.offsetX, event.event.offsetY);
    }
  }

  private createControl(event: DndDropEvent) {
    const compSelected = event.data.name;
    const comp = this.controls.find(c => c.name === compSelected);
    if (comp) {
      const id = GUID.newGuid();
      this.componentLoaderService.createComponent(comp.component, id, event.event.offsetX, event.event.offsetY, comp.title);
      this.addControlPage(id, comp.name, event.event.offsetX, event.event.offsetY, comp.title);
    }
  }


  addControlPage(id: string, controlName: string, left: number, top: number, textContent?: string) {
    const control: Control = {
      x: left,
      y: top,
      controlName: controlName,
      value: textContent,
      id: id,
      active: true
    }
    this.store.dispatch(new AddControl(control));
  }

  clickOutSide(event) {
    if (event.target.className === 'form-container') {
      this.componentLoaderService.setControlInActiveAll();
    }
  }
}
