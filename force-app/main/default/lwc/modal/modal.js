import { api } from 'lwc';
import LightningModal from 'lightning/modal'

export default class Modal extends LightningModal {
    @api content;
    @api options = [];

    handleOkay() {
        this.close('fechou')
    }

    handleOptionClick(event) {
        const {id, value} = event.target.dataset;
        this.close(id)
    }
}