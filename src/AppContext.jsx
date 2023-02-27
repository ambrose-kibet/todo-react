import { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppProvider = createContext();
const AppContext = ({ children }) => {
  const [todoItems, settodoItems] = useState([]);
  return (
    <AppProvider.Provider
      value={{ todoItems, settodoItems, hello: 'hello worls' }}
    >
      {children}
    </AppProvider.Provider>
  );
};
AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
