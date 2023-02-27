import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useAppContext } from '../AppContext';

const Input = () => {
  const { addItem, createAlert } = useAppContext();
  const [todoValue, setTodoValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoValue) {
      createAlert(true, 'please provide value', 'danger');
      return;
    }
    const Id = new Date().getTime();
    addItem(Id, todoValue);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form-input"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default Input;
