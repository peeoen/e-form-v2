import { ControlBase } from './controls/control-base';

export class Control { 
    x: number;
    y: number;
    control: ControlBase<any>;
    value?: any;
    id: string;
    active?: boolean;
}
