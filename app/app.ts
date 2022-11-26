import { NegociacoesView } from './views/negociacoes-view.js';
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacaoController = new NegociacaoController();

const form = document.querySelector('.form')

form.addEventListener('submit', e => {
    e.preventDefault()
    negociacaoController.adiciona();
})

const negociacoesView = new NegociacoesView();
const template = negociacoesView.template();
console.log(template);
