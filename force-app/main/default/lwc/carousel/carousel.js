import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
    @api dados;
    pagina = 0;
    paginaSelecionada;

    connectedCallback() {
      this.dados = JSON.parse(JSON.stringify(this.dados));
    }

      get botaoRetorno () {
        return this.pagina === 0;
      }

      get botaoAvancar () {
        return this.pagina === this.dados.length - 1;
      }

      get posicao() {
        return `
          transform: translateX(-${100 * this.pagina}%);
        `
      }

      get slideJs() {
        return this.pagina === this.paginaSelecionada ? 'slide slideSelecionado' : 'slide';
      }

      previousSlide() {
        if(this.pagina > 0) {
            this.pagina--;
        } 
      }

      nextSlide() {
        if(this.pagina < this.dados.length - 1) {
            this.pagina++;
        } 
      }

      handleSelecionar() {
        this.paginaSelecionada = this.pagina;
        const selecionado = new CustomEvent('passavalor', {
            detail: {
              dado: this.dados[this.pagina]
            }
        });
        this.dispatchEvent(selecionado)
      }

      mudarvalor(event) {
        this.dados[this.pagina].empresa = event.target.value;
        this.dados = [...this.dados]
      }
      
}