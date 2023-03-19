let input = document.querySelector('.todo__input');
let btn = document.querySelector('.todo__button');
let todosList = document.querySelector('.todo__list');
let header = document.querySelector('.duplicate__block');
let duplicateB = document.querySelector('.duplicate__block');

let todosArr = [];


function addTodo(text){
    let todo = {
        text,
        done: false,
        id: `${Math.random()}`,
    }

    todosArr.push(todo);
}


function deleteTodo(id){
    todosArr.forEach(todo => {
        if(todo.id == id){
            todo.done = true;
        }
    })
}

function render(){
    let html = '';

    todosArr.forEach(todo => {
        if(todo.done){
            return;
        }
        else{
            html+=`
            <div class="todo__task">
                <div class="todo__text">
                ${todo.text}
                </div>
                <div class="todo__task-button" data-id='${todo.id}'></div>
            </div>
            `
        }
    })

    todosList.innerHTML = html;
};


function dup(){
    header.classList.remove('hide');

    let html = '';

    html = `
    <div class="duplicate">todo should not be repeated</div>
    `

    header.innerHTML = html;


    setTimeout(() => {
        header.classList.add('hide')
    }, 3500);
}


function empty(){
    header.classList.remove('hide');

    let html = '';

    html = `
    <div class="duplicate">todo is empty</div>
    `

    header.innerHTML = html;


    setTimeout(() => {
        header.classList.add('hide')
    }, 3500);
};





btn.addEventListener('click', function(event){
    if(input.value == ''){
        empty();
        return;
    }
    else{
        

    var duplicate = false;

    for (const todo of todosArr){
        if(todo.text === input.value)
        {
            duplicate = true;
            break;
        }
    }

    if (duplicate){
        dup();
        return;
    }
    else{
        addTodo(input.value);
    }
    
    render();
    }
});


todosList.addEventListener('click', function(event){
    if(!event.target.classList.contains('todo__task-button')){
        return;
    }
    else
    {
        deleteTodo(event.target.dataset.id);
        render();
    }
})


// ENTER BUTTON

document.addEventListener('keyup', function(e){
    if(e.code == 'Enter'){
        if(input.value == ''){
            empty();
            return;
        }
        else{
            
    
        var duplicate = false;
    
        for (const todo of todosArr){
            if(todo.text === input.value)
            {
                duplicate = true;
                break;
            }
        }
    
        if (duplicate){
            dup();
            return;
        }
        else{
            addTodo(input.value);
        }
        
        render();
        }
    }
})