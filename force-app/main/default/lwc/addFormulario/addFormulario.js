import { LightningElement, track } from 'lwc';

export default class AddFormulario extends LightningElement {
    @track formularios = [];

    handleClickDelete(event) {
        const index = event.target.dataset.index;
        this.formularios.splice(index, 1);
    }

    handleChange(event) {
        const index = event.target.dataset.index;
        this.formularios[index][event.target.name] = event.target.value;
    }

    addFormulario() {
        const newFormulario = {
            id: Date.now(),
            Name: '',
            Idade: 0
        }
        this.formularios.push(newFormulario);
    }
}