import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/ComponentePaiController.getAccounts';
import getDadosEmpresa from '@salesforce/apex/ComponentePaiController.getDadosEmpresa';

export default class ComponentePai extends LightningElement {

    dadosPai;

      connectedCallback() {
        this.pegarValores();
        this.pegarDadosEmpresa();
      }

      async pegarDadosEmpresa() {
        try {
          this.dadosPai = await getDadosEmpresa();
        } catch(err) {
          console.log(err)
        }
      }

      async pegarValores() {
        try {
          let contas = await getAccount();
        } catch(err) {
          console.log(err)
        }
        
      }

       handleSelecionarPai(event) {
        console.log(JSON.stringify(event.detail.dado))
      }
}