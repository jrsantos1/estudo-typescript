import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        const negociacoes = new Negociacoes();
        negociacoes.adiciona(negociacao);
        const listaDeNegociacoes = negociacoes.lista();
        console.log(listaDeNegociacoes);
        this.limpaFormulario();
        this.inputData.focus();
    }
    criaNegociacao() {
        const data = new Date(this.inputData.value.replace('-', ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}
