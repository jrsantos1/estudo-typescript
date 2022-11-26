export class Negociacao{

    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    get data(){
        return this._data;
    }

    get quantiddade(){
        console.log("teste");
        return this._quantidade;
        
    }

    get valor(){
        return this._valor;
    }

    get volume (){
        return this._quantidade * this._valor;
    }
}