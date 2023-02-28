import Input from './Input';
import TodoList from './TodoList';

const TodoContainer = () => (
  <div className="todo-container">
    <h1>Todos</h1>
    <p>Items will persit in the browser local storage</p>
    <Input />
    <TodoList />
  </div>
);

export default TodoContainer;
