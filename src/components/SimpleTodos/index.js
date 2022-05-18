import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }

  todoDelete(id) {
    const {todoList} = this.state
    todoList.splice(id - 1, 1)
    this.setState({todoList: todoList})
  }

  render() {
    return (
      <div className="bg">
        <div className="card">
          <h1>Simple Todos</h1>
          <div>
            {initialTodosList.map(eachTodo => (
              <TodoItem
                title={eachTodo.title}
                key={eachTodo.id}
                todoDelete={this.todoDelete}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
