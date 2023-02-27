import { useAppContext } from '../AppContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todoItems } = useAppContext();
  return (
    <ul>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          item={todoItem.item}
          completed={todoItem.completed}
        />
      ))}
    </ul>
  );
};
export default TodoList;
