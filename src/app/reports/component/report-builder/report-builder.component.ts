import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngxs/store';
import * as jsPDF from 'jspdf';
import { DndDropEvent } from 'ngx-drag-drop';
import { ControlDirective } from '../../../share/directives/control-host.directive';
import { ControlStateModel, ControlsState } from './../../../core/state mangement/states/control.state';

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
  components: ComponentRef<{}>[] = [];

  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store) {
    this.controls = this.store.selectSnapshot(ControlsState);
    console.log(this.controls);
  }

  ngOnInit() {
    const doc = new jsPDF();
    doc.text(20, 20, 'test');
    const uri = doc.output('arraybuffer');
    this.pdfSrc = uri;
  }


  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

  onDrop(event: DndDropEvent) {
    const compSelected = event.data.name;
    const comp = this.controls.find(c => c.name === compSelected);
    if (comp) {
      this.createComponent(comp.component, event.event.offsetX, event.event.offsetY, comp.title);

    }
  }


  createComponent(component: any, left: number, top: number, textContent?: string) {
    const componentFactoty = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef = this.viewContainerRef.createComponent(componentFactoty);
    componentRef.location.nativeElement.style.textContent = textContent;
    componentRef.location.nativeElement.style.left = left + 'px';
    componentRef.location.nativeElement.style.top = top + 'px';
    componentRef.location.nativeElement.style.fontSize = '16px';
    componentRef.location.nativeElement.style.position = 'absolute';
    this.components.push(componentRef);
  }

  addControlPage() {
    
  }

}
