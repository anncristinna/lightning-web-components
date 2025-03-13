import { LightningElement, api } from 'lwc';

export default class EditarContato extends LightningElement {
    @api recordId; 

    handlerContact() {
        const inputField = this.template.querySelectorAll('lightning-input-field');
        if(inputField) {
            inputField.forEach((item) => {
                item.reset();
            });
        }
    }
}