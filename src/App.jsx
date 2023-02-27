import './App.css';
import AppContext from './AppContext';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <AppContext>
      <TodoContainer />
    </AppContext>
  );
}

export default App;
