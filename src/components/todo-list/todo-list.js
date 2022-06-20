import './todo-list.css'

const todoList = (props) => {
	return (
		<ul>
			{
				props.data.map((todo) => {
					return <li key={todo.id}>{todo.title}</li>
				})
			}
		</ul>
	)
}

export default todoList