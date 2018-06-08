import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import * as jsPDF from 'jspdf';
import { DndDropEvent } from 'ngx-drag-drop';
import { Control } from '../../../core/models';
import { AddControl, ChangeActivePage, ReportStateModel } from '../../../core/state mangement/states';
import { ControlDirective } from '../../../share/directives/control-host.directive';
import { ControlStateModel, ControlsState } from './../../../core/state mangement/states/control.state';
import { MoveControl } from './../../../core/state mangement/states/report.state';
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
  viewContainerRef: ViewContainerRef;
  controls: ControlStateModel[];
  components: {
    componentRef: ComponentRef<{}>,
    id: string
  } [] = [];

  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store,
    private action$: Actions) {

  }

  ngOnInit() {
    this.viewContainerRef = this.controlHost.viewContainerRef;
    this.controls = this.store.selectSnapshot(ControlsState);
    this.renderPdf();

    this.action$.pipe(
      ofActionSuccessful(ChangeActivePage)
    ).subscribe(payload => {
      this.renderPdf();
    })
  }

  renderPdf() {
    this.clearTemplate();
    this.iniPDF();
    this.initControl();
  }

  iniPDF() {
    const doc = new jsPDF();
    const uri = doc.output('arraybuffer');
    this.pdfSrc = uri;

  }

  initControl() {
    const reports: ReportStateModel[] = this.store.selectSnapshot(state => state.reports);
    const pageActive = reports.find(r => r.active === true).pages.find(p => p.active === true);
    if (pageActive && pageActive.controls) {
      this.createControls(pageActive.controls);
    }
  }

  clearTemplate() {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
  }


  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

  createControls(controls: Control[]) {
    controls.forEach(c => {
      const comp = this.controls.find(x => x.name === c.controlName);
      if (comp) {
        this.createComponent(c.id, comp.component, c.x, c.y, c.value);
      }
    })
  }

  onDrop(event: DndDropEvent) {
    if (event.dropEffect === 'copy') {
      this.createControl(event);
    }
    else if (event.dropEffect === 'move') {
      this.moveControl(event);
    }
  }

  private createControl(event: DndDropEvent) {
    const compSelected = event.data.name;
    const comp = this.controls.find(c => c.name === compSelected);
    if (comp) {
      const id = GUID.newGuid();
      this.createComponent(id, comp.component, event.event.offsetX, event.event.offsetY, comp.title);
      this.addControlPage(id, comp.name, event.event.offsetX, event.event.offsetY, comp.title);
    }
  }

  private moveControl(event: DndDropEvent) {
    const id: string = event.data;
    const comp = this.components.find(x => x.id === id);
    const left = event.event.offsetX;
    const top = event.event.offsetY;
    comp.componentRef.location.nativeElement.style.left = left + 'px';
    comp.componentRef.location.nativeElement.style.top = top + 'px';
    this.updateControl(id, left, top);
  }

  private updateControl(id: string, x: number, y: number) {
    this.store.dispatch(new MoveControl(id, x, y));
  }

  createComponent(id: string, component: any, left: number, top: number, textContent?: string) {
    const componentFactoty = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef = this.viewContainerRef.createComponent(componentFactoty);
    componentRef.location.nativeElement.style.left = left + 'px';
    componentRef.location.nativeElement.style.top = top + 'px';
    componentRef.location.nativeElement.style.fontSize = '16px';
    componentRef.location.nativeElement.style.position = 'absolute';
    componentRef.instance['id'] = id;
    this.components.push({
      componentRef: componentRef,
      id: id
    });
  }

  addControlPage(id: string, controlName: string, left: number, top: number, textContent?: string) {
    const control: Control = {
      x: left,
      y: top,
      controlName: controlName,
      value: textContent,
      id: id
    }
    this.store.dispatch(new AddControl(control));
  }
}
