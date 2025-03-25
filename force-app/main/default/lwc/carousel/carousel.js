import { LightningElement, api } from 'lwc';

export default class Carousel extends LightningElement {
    @api dados;
    pagina = 0;
    paginaSelecionada;

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
      
}