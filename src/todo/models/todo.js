export class Todo {
    constructor(_titulo){
        this.titulo = _titulo
        this.itens = []
    }

    addItem(_item){
        this.itens.push(_item);
    }

    removeItem(_index){
        this.itens.splice(_index, 1)
    }
}