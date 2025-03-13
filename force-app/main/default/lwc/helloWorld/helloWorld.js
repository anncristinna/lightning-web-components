import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    nome = '';
    idade = '';
    serie = null;
    estudante = false;
    sexo = '';
    country = '';
    sexoSelecionado = '';
    mapMarkers = [];
    zoomLevel = 2; 

    changeHandler(event) {
        this[event.target.name] = event.target.value;
    }


    changeHandlerChecked(event) {
        this[event.target.name] = event.target.checked;
        if(!this.estudante && event.target.name == 'estudante') this.serie = '';
    }

    handleClickLimparCampos(event) {
        this.nome = '';
        this.idade = '';
        this.serie = '';
        this.sexo = '';
        this.estudante = false;
    }

    get optionsSeries() {
        return [
            {label: '6 Série', value: '6'},
            {label: '7 Série', value: '7'},
            {label: '8 Série', value: '8'},
            {label: '9 Série', value: '9'}
        ]
    }

    handleComboBox(event) {
        this.serie = event.detail.value;
    }

    get optionsSexo() {
        return [
            {label: 'Masculino', value: 'masculino'},
            {label: 'Feminino', value: 'feminino'}
        ]
    }

    handleRadioGroup(event) {
        this.sexo = event.target.value;
        if(this.sexo == "feminino") this.sexoSelecionado = true;
        else this.sexoSelecionado = false;
    }


    handleClickCountry() {
        if(this.country) {
            this.zoomLevel = 4;
            this.mapMarkers = [{
                location: {
                    Country: this.country
                }
            }]
        }
    }
}