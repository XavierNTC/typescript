import { Negociacao } from "./models/negociacao.js"; // Certifique-se de que o nome da classe está correto.

const minhaNegociacao = new Negociacao(new Date(), 10, 100);
console.log(minhaNegociacao);
minhaNegociacao.quantidade = 100;
console.log(minhaNegociacao);