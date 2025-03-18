import { LightningElement } from 'lwc';

export default class Accordion extends LightningElement {
    serie = '';
    serieEscolhida = false;
    
    get optionsSerie() {
        return [
            {
                label: 'Round ',
                value: 'Round 6'
            },
            {
                label: 'Super Hero ',
                value: 'Super Hero S'
            },
        ]
    }

    handleChange(event) {
        this[event.target.name] = event.detail.value;
    }
}