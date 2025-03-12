import { LightningElement } from 'lwc';

export default class CriarContato extends LightningElement {
    handlerContact() {
        const inputField = this.template.querySelectorAll('lightning-input-field');
        if(inputField) {
            inputField.forEach((item) => {
                item.reset();
            });
        }
    }
}