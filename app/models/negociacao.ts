export class Negociacao{
    #data;
    #quantidade;
    #valor;

    constructor(data, quantiddade, valor){
        this.#data = data;
        this.#quantidade = this.#quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get quantiddade(){
        console.log("teste");
        return this.#quantidade;
        
    }

    get valor(){
        return this.#valor;
    }

    get volume (){
        return this.#quantidade * this.#valor;
    }
}