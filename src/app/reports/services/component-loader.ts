import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { Store } from "@ngxs/store";
import { ChangeControlActive, MoveControl, SetInactiveAllControl } from "../../core/state mangement/states/report.state";
import { ReportStateService } from "../../reports/services/report-state.service";
import { ControlActiveDirective } from "../../share/directives/control-active.directive";
import { ControlDirective } from "../../share/directives/control.directive";



@Injectable({
    providedIn: 'root'
})
export class ComponentLoaderService {

    private viewContainerRef: ViewContainerRef;
    components: {
        componentRef: ComponentRef<{}>,
        id: string
    }[] = [];

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private reportStateService: ReportStateService,
        private store: Store) { }


    setViewContainerRef(view: ViewContainerRef) {
        this.viewContainerRef = view;
    }

    createComponent(component: any, id: string, left: number, top: number, styles?: any): ComponentRef<{}> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.setStyle(componentRef, id, left, top, styles);
        return componentRef;
    }

    setStyle(componentRef: ComponentRef<{}>, id: string, left: number, top: number, styles?: any) {
        componentRef.location.nativeElement.style.left = left + 'px';
        componentRef.location.nativeElement.style.top = top + 'px';
        componentRef.location.nativeElement.style.fontSize = '16px';
        componentRef.location.nativeElement.style.position = 'absolute';
        componentRef.instance['id'] = id;
        componentRef.instance['styles'] = styles;

        componentRef.location.nativeElement.addEventListener('dblclick', () => {
            this.controlActive(id);
        });

        this.components.push({
            componentRef: componentRef,
            id: id
        });
    }

    clearTemplate() {
        if (this.viewContainerRef) {
            this.components = [];
            this.viewContainerRef.clear();
        }
    }

    setControlInActiveAll() {
        this.components.forEach(c => {
            const comps = c.componentRef.instance['controlActive'] as ControlActiveDirective;
            comps.setInActive();
        });
        this.store.dispatch(new SetInactiveAllControl());
    }


    moveControl(id: string, offsetX: number, offsetY: number) {
        const comp = this.getComponent(id);
        if (comp) {
            const control = comp.componentRef.instance['control'] as ControlDirective;
            const left = offsetX - control.offset.x;
            const top = offsetY - control.offset.y;
            comp.componentRef.location.nativeElement.style.left = left + 'px';
            comp.componentRef.location.nativeElement.style.top = top + 'px';
            this.store.dispatch(new MoveControl(id, left, top));
        }
    }

    controlActive(controlId: string) {
        this.setControlInActiveAll();
        this.setControlActive(controlId);
        this.store.dispatch(new ChangeControlActive(controlId));
    }


    private getComponent(controlId: string) {
        const compActive = this.components.find(c => c.id === controlId);
        return compActive;
    }



    private setControlActive(controlId: string) {
        const compActive = this.getComponent(controlId);
        if (compActive) {
            const active = compActive.componentRef.instance['controlActive'] as ControlActiveDirective;
            active.setActive();
        }
    }

    keyboardUpdateComponent(offsetLeft: number, offsetTop: number) {
        const componentActive = this.reportStateService.getControlActive();
        if (componentActive) {
            const comp = this.getComponent(componentActive.id);
            const control = comp.componentRef.instance['control'] as ControlDirective;
            const style = comp.componentRef.location.nativeElement.style;
            const left = parseFloat(style.left) + offsetLeft;
            const top = parseFloat(style.top) + offsetTop;
            style.left = left + 'px';
            style.top = top + 'px';
            this.store.dispatch(new MoveControl(componentActive.id, left, top));
        }
    }
}