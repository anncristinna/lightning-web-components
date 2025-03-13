import { LightningElement } from 'lwc';
import criarConta from '@salesforce/apex/CriarContas.criarConta';

export default class CriarConta extends LightningElement {
    nome = '';

    changeHandler(event) {
        this[event.target.name] = event.target.value;
    }

    handleClickSalvar() {
        if(this.nome) {
            criarConta({nome: this.nome});
            this.nome = '';
        }
    }
}