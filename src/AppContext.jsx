import {
  useContext, createContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

const AppProvider = createContext();
const getLocalStorage = () => {
  let todos = [];
  if (localStorage.getItem('todoItems')) {
    todos = JSON.parse(localStorage.getItem('todoItems'));
  }
  return todos;
};
const AppContext = ({ children }) => {
  const [todoItems, settodoItems] = useState(getLocalStorage());
  const [showAlert, setshowAlert] = useState({
    show: false,
    message: '',
    alertStatus: 'hide',
  });
  const addItem = (id, item) => {
    settodoItems((oldItems) => [...oldItems, { id, item, completed: false }]);
  };
  const removeItem = (id) => {
    const newItems = todoItems.filter((item) => item.id !== id);
    settodoItems(newItems);
  };
  const toggleComplete = (id) => {
    const newItem = todoItems.map((item) => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
        item.completed = !item.completed;
      }
      return item;
    });
    settodoItems(newItem);
  };
  const editItem = (id, value) => {
    settodoItems(
      todoItems.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.item = value;
        }
        return todo;
      }),
    );
  };
  const createAlert = (show = false, message = '', alertStatus) => {
    setshowAlert({ show, message, alertStatus });
    setTimeout(() => {
      setshowAlert({
        show: false,
        message: '',
        alertStatus: 'hide',
      });
    }, 3000);
  };
  const setLocalStorage = () => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  };

  useEffect(() => {
    setLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoItems]);

  return (
    <AppProvider.Provider
      value={{
        todoItems,
        addItem,
        removeItem,
        toggleComplete,
        editItem,
        showAlert,
        createAlert,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};
AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useAppContext = () => useContext(AppProvider);
export default AppContext;
