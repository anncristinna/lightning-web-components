import { LightningElement } from 'lwc';

export default class Carousel extends LightningElement {
    pagina = 0;
    
    dados = [
        {
          id: 1,
          empresa: "Tech Solutions",
          produtos: [
            { id: 101, nome: "Notebook Pro" },
            { id: 102, nome: "Smartphone X" }
          ],
          distribuidoras: [
            { id: 201, nome: "Distribuidora Global" }
          ],
          lojas: [
            { id: 301, nome: "Loja Centro" },
            { id: 302, nome: "Loja Norte" }
          ]
        },
        {
          id: 2,
          empresa: "InovaTech",
          produtos: [
            { id: 103, nome: "Tablet Max" },
            { id: 104, nome: "Fone Bluetooth" }
          ],
          distribuidoras: [
            { id: 202, nome: "Distribuidora Express" }
          ],
          lojas: [
            { id: 303, nome: "Loja Sul" },
            { id: 304, nome: "Loja Oeste" }
          ]
        },
        {
          id: 3,
          empresa: "FutureTech",
          produtos: [
            { id: 105, nome: "Smartwatch Ultra" },
            { id: 106, nome: "Câmera 4K" }
          ],
          distribuidoras: [
            { id: 203, nome: "Distribuidora Rápida" }
          ],
          lojas: [
            { id: 305, nome: "Loja Leste" },
            { id: 306, nome: "Loja Central" }
          ]
        }
      ];

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