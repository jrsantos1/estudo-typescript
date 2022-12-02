import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement; 
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');


    constructor() {
            this.inputData = document.querySelector('#data');
            this.inputQuantidade = document.querySelector('#quantidade');
            this.inputValor = document.querySelector('#valor');
            this.negociacoesView.update(this.negociacoes);
    }

    adiciona(){
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limpaFormulario();
        this.inputData.focus();
    }

    criaNegociacao():  Negociacao {
        const data = new Date(this.inputData.value.replace('-',','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        const negociacao = new Negociacao(
            data,
            quantidade,
            valor)
            return negociacao;
    }

    limpaFormulario(): void {

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

    }
}