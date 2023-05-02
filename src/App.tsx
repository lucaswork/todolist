import { Header } from "components/Header";
import {TodoForm} from "components/TodoForm"
import  Todo  from 'components/Todo'
import "./global.css";
import { useState } from "react";
import { ITodoListProps } from "types/TodoList";


export function App() {

  const [todoList, setTodoList] = useState<ITodoListProps[]>([])

  function handleSubmit(newTodo: ITodoListProps) {
    setTodoList([...todoList, newTodo])
  }


  function handleRemoveTask(id: string) {
    setTodoList(state => state.filter(s => s.id !== id))
  }

  function handleCompleteTask(id: string) {
    setTodoList(state => state.map(s => s.id === id ? {...s, isComplete: true} : s))
  }

  return (
    <>
      <Header />
      <section className="task-list container">
        <TodoForm handleSubmit={handleSubmit}/>
        <main>  
          <ul>
            {todoList?.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  handleRemoveTask={handleRemoveTask}
                  handleCompleteTask={handleCompleteTask}
                  {...todo}
                />
              );
            })}
          </ul>
        </main>
      </section>
    </>
  );
}
