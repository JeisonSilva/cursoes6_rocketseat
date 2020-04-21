import {TodoComponent} from './todo/components/TodoComponent'
import { Item } from './todo/models/item';

var todo = new TodoComponent();
var todoHtml = document.querySelector('#todo');

todo.AddItem('Ola mundo')
todo.AddItem('Parabens')
todo.AddItem('Vamos lá')

todo.listarItens().forEach(element => {    
    var li = document.createElement('li')
    li.innerText = element.descricao
    todoHtml.appendChild(li)
});

console.log(JSON.stringify(todo))