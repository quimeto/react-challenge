import HelloWorld from './components/helloworld/HelloWorld';
import Counter from './components/counter/Counter';
import TodoList from './components/todolist/TodoList';

import './styles/app.css';

function App() {
  return (
    <div id="app">
      <HelloWorld />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
