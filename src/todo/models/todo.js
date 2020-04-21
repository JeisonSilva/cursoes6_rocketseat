import { Item } from "./item";

export class Todo {
    constructor(_titulo){
        this.titulo = _titulo
        this.itens = []
    }

    addItem(_item) {
        this.itens.push(_item);
    }

    removeItem(descricao) {
        let novosItens = this.itens.map(function(value){
            if(value.descricao !== descricao)
                return new Item(value.descricao);
        });

        this.itens = novosItens;
    }
}