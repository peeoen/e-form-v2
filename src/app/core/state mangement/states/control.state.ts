import { State } from '@ngxs/store';
import { CheckboxComponent } from '../../../reports/component/controls/checkbox/checkbox.component';
import { DropdownComponent } from '../../../reports/component/controls/dropdown/dropdown.component';
import { ImageComponent } from '../../../reports/component/controls/image/image.component';
import { LabelComponent } from '../../../reports/component/controls/label/label.component';
import { RadioComponent } from '../../../reports/component/controls/radio/radio.component';
import { TextComponent } from '../../../reports/component/controls/text/text.component';

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
