import { Injectable } from '@angular/core';
import { ControlRadio } from '../../core/models/controls/control-radio';
import { ControlBase } from './../../core/models/controls/control-base';
import { ControlCheckbox } from './../../core/models/controls/control-checkbox';
import { ControlDropdown } from './../../core/models/controls/control-dropdown';
import { ControlImage } from './../../core/models/controls/control-image';
import { ControlLabel } from './../../core/models/controls/control-label';
import { ControlTextbox } from './../../core/models/controls/control-textbox';
import { GUID } from './../../utility/guid';

@Injectable({
    providedIn: 'root'
})
export class ControlService {

    controls: ControlBase<any>[] = [
        new ControlLabel({
            id: GUID.newGuid(),
        }),
        new ControlTextbox({
            id: GUID.newGuid(),
        }),
        new ControlRadio({
            id: GUID.newGuid(),
        }),
        new ControlCheckbox({
            id: GUID.newGuid(),
        }),
        new ControlDropdown({
            id: GUID.newGuid(),
        }),
        new ControlImage({
            id: GUID.newGuid(),
        })
    ];

    constructor() {

    }


    getControl(controlName: string): ControlBase<any> {
        const id = GUID.newGuid();
        switch (controlName) {
            case 'label': return new ControlLabel({ id: GUID.newGuid() })
            case 'textbox': return new ControlTextbox({ id: GUID.newGuid() })
            case 'radio': return new ControlRadio({ id: GUID.newGuid() })
            case 'checkbox': return new ControlCheckbox({ id: GUID.newGuid() })
            case 'dropdown': return new ControlDropdown({ id: GUID.newGuid() })
            case 'image': return new ControlImage({ id: GUID.newGuid() })
            default: return null;
        }
    }


}