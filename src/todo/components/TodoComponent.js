import {Todo} from '../models/todo'
import {Item} from '../models/item'

export class TodoComponent{
    constructor(){
        this.todo = new Todo();
    }

    AddItem(descricao){
        if(descricao != undefined && descricao != ''){
            let item = new Item(descricao);

            this.todo.addItem(item);
        }
    }

    removeItem(descricao) {
        if(descricao != undefined && descricao != '') {
            this.todo.removeItem(descricao)
        }
    }

    listarItens() {
        return this.todo.itens;
    }
}