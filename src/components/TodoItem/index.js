// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, todoDelete} = props
  const {uniqueNo, title} = todoDetails

  console.log(uniqueNo, title, todoDelete)
  const deleteTodoItem = () => {
    todoDelete(uniqueNo)
  }

  return (
    <div className="todo-item">
      <p>{title}</p>
      <button type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
