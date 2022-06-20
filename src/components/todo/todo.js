import './todo.css'
import TodoList from '../todo-list/todo-list'
import TodoCreate from '../todo-create/todo-create'

const Todo = () => {
    const todos = [
        {id:1, title:'Title 1'},
        {id:2, title:'Title 2'},
        {id:3, title:'Title 3'},
    ]

    const eventCreateTodo = (todo) => {
        todos.push(todo)
        console.log(todos)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList data={todos} />
        </div>
    )
}

export default Todo