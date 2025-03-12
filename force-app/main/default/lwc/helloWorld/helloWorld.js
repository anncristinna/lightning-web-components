import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = '';
    nome = '';
    idade = '';
    serie = null;
    estudante = false;
    sexo = '';
    sexoSelecionado = '';
    mapMarkers = [
        {
            location: {
                City: 'Rio de Janeiro',
                Country: 'Brasil'
            }
        }
    ];

    changeHandler(event) {
        this.greeting = event.target.value;
    }

    handleClickSalvar() {
        this.nome = this.greeting;
    }

    changeHandlerIdade(event) {
        this.idade = event.target.value;
    }

    changeHandlerEstudante(event) {
        this.estudante = event.target.checked;
        if(this.estudante === false) this.serie = '';
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
}