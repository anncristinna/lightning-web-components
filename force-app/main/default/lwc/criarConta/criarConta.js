import { LightningElement } from 'lwc';
import criarConta from '@salesforce/apex/CriarContas.criarConta';

export default class CriarConta extends LightningElement {
    conta = {};

    changeHandler(event) {
        this.conta = {...this.conta, [event.target.name]: event.target.value};
    }

    handleClickSalvar() {
        criarConta({ conta: this.conta });
    }
}