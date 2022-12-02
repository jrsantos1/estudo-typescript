import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
        console.log(this.elemento);
        
    }

    template(negociacoes: Negociacoes): string{

        negociacoes.lista().forEach(x => console.log('dsd'));
        console.log('dsdsa');
        

        return `
           <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr> 
                    <th> DATA </th>
                    <th> QUANTIDADE </th>
                    <th> VALOR </th>
                </tr>
            </thead>
            <tbody>
            ${negociacoes.lista().map(x => {      
                return `
                <tr>
                    <td>$</td>
                    <td>${x.quantiddade}</td>
                    <td>${x.valor}</td>
                </tr>`
             
            }).join('')}
            </tbody>
           </table>
                `
    }

    update(negociacoes: Negociacoes): void{
        console.log('update');
        
        this.elemento.innerHTML = this.template(negociacoes);

    }

}
