import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { useAppContext } from '../AppContext';

const TodoItem = ({ id, item, completed }) => {
  const [editValue, seteditValue] = useState(item);
  const [isEditing, setisEditing] = useState(false);
  const { toggleComplete, removeItem, editItem } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) return;
    editItem(id, editValue);
    setisEditing(false);
  };
  return (
    <li className="todo-item">
      <div className={isEditing ? ' hide to-show' : 'to-show'}>
        <input
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        {completed ? (
          <p className="todo-item">
            <s>{item}</s>
          </p>
        ) : (
          <p className="todo-item">{item}</p>
        )}
        <div className="btns-container">
          <button
            className="btn"
            type="button"
            onClick={() => setisEditing(true)}
          >
            <AiFillEdit />
          </button>
          <button className="btn" type="button" onClick={() => removeItem(id)}>
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
      <form
        className={isEditing ? ' show to-edit' : 'hide'}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={editValue}
          onChange={(e) => seteditValue(e.target.value)}
        />
      </form>
    </li>
  );
};
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
export default TodoItem;
