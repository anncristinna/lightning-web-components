import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import MeuModal from 'c/modal';

export default class Toast extends LightningElement {
    resultado;
    
    connectedCallback() {
        this.showToast('Sucesso', 'Tela iniciada com sucesso!', 'success');
    }

    showToastAviso() {
        this.showToast('Aviso', 'Mesangem de aviso', 'warning');
    }

    showToastErro() {
        this.showToast('Erro', 'Mensagem de erro', 'error');
    }

    async handleClick() {
        this.resultado = await MeuModal.open({
            size: 'large',
            description: 'Descrição para acessibilidade',
            content: 'Abri o modal a partir de outro componente.',
            options: [
                {
                    label: 'Opção 1',
                    value: 'um',
                    id: 1
                },
                {
                    label: 'Opção 2',
                    value: 'dois',
                    id: 2
                }
            ]
        })
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
   
}