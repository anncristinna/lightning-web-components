import { LightningElement } from 'lwc';

export default class Accordion extends LightningElement {
    serie = '';
    serieEscolhida = false;
    a = false;
    b = false;
    c = false;
    
    get optionsSerie() {
        return [
            {
                label: 'Round ',
                value: 'serie1'
            },
            {
                label: 'Super Hero ',
                value: 'serie2'
            },
            {
                label: 'Euphoria',
                value: 'serie3'
            }
        ]
    }

    handleChange(event) {
        this[event.target.name] = event.detail.value;
        if(event.target.name === 'serie' && this.serie != '') {
            this.serieEscolhida = true;
            if(this.serie === 'serie1') this.a = true;
            if(this.serie === 'serie2') this.b = true;
            if(this.serie === 'serie3') this.c = true;
        } else {
            this.serieEscolhida = false;
        }
    }

    handleToogleSection() {

    }
}