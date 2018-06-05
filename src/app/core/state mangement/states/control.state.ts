import { State } from '@ngxs/store';


export interface ControlStateModel {
  icon: string;
  title: string;
  component: any;
}

const initial: ControlStateModel[] = [
    {
        title: 'Label',
        icon: 'label',
        component: null
      },
      {
        title: 'Text',
        icon: 'title',
        component: null
      },
      {
        title: 'Checkbox',
        icon: 'check_box',
        component: null
      },
      {
        title: 'Radio',
        icon: 'radio_button_checked',
        component: null
      },
      {
        title: 'Dropdown',
        icon: 'view_stream',
        component: null
      },
      {
        title: 'Image',
        icon: 'broken_image',
        component: null
      },
];

@State<ControlStateModel[]>({
    name: 'controls',
    defaults: initial,
})
export class ControlsState {

}
