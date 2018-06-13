import { State } from '@ngxs/store';
import { CheckboxComponent, DropdownComponent, ImageComponent, LabelComponent, RadioComponent, TextComponent } from '../../../reports/component/controls/index';

export interface ControlStateModel {
  icon: string;
  title: string;
  name: string;
  component: any;
}

const initial: ControlStateModel[] = [
  {
    name: 'label',
    title: 'Label',
    icon: 'label',
    component: LabelComponent
  },
  {
    name: 'textbox',
    title: 'Text',
    icon: 'title',
    component: TextComponent
  },
  {
    name: 'checkbox',
    title: 'Checkbox',
    icon: 'check_box',
    component: CheckboxComponent
  },
  {
    name: 'radio',
    title: 'Radio',
    icon: 'radio_button_checked',
    component: RadioComponent
  },
  {
    name: 'dropdown',
    title: 'Dropdown',
    icon: 'view_stream',
    component: DropdownComponent
  },
  {
    name: 'image',
    title: 'Image',
    icon: 'broken_image',
    component: ImageComponent
  },
];

@State<ControlStateModel[]>({
  name: 'controls',
  defaults: initial,
})
export class ControlsState {

}
