import './App.css'
import 'carbon-components/css/carbon-components.min.css';
import { Button } from 'carbon-components-react';
import { useState } from 'react';

function App() {

  const add = () => {
    const newItem = new Item(false, input);
    setTodos([...todos, newItem]);
    setInput("");
  }

  const toggleDone = (clickedText) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => {
        if (todo.getText() === clickedText) {
          return new Item(!todo.isDone(), todo.getText());
        }
        return todo;
      })
    );
  };

  const deleteItem = (e) => {
    return () => {
      setTodos(todos.filter(todo => todo.getText() !== e.getText()));
    }
  }


  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([new Item(false, 'First Task')])
  return (
    <div className='main'>
      <div className="inner">
        <div className='input'>
          <input className='text' type="text" placeholder="Enter your task" onChange={(e)=>{setInput(e.target.value)}}  value={input} />
          <Button className="todo-add-btn" kind="primary" size="field" onClick={add}>
            Add
          </Button>
        </div>
        <div className='items'>
          {todos.map((todo, index) => (
            <div key={index} className='item'>
              <div className={`todo-text ${todo.isDone()}`} onClick={() => toggleDone(todo.getText())}>
                {todo.getText()}
              </div>
              <Button className="todo-delete-btn"   size="field" onClick={deleteItem(todo)}> 
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

class Item{
  text;
  done;
  constructor(done, text){
    this.text = text;
    this.done = done;
  }

  isDone(){
    return this.done;
  }

  getText(){
    return this.text;
  }
}


export default App
