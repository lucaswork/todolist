import { Header } from "components/Header";
import {TodoForm} from "components/TodoForm"
import  Todo  from 'components/Todo'



import styles from "./App.module.css";
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
      <div className={styles.wrapper}>
        <TodoForm handleSubmit={handleSubmit}/>
        <main>  
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <strong>Tarefas criadas</strong> <span>{todoList.length}</span>
            </div>
            <div>
              <strong>Concluídas</strong> <span>{`${todoList.filter(t => t.isComplete).length} de ${todoList.length}`}</span>
            </div>
          </div>

          <div style={{marginTop:10}}>
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
          </div>
        </main>
      </div>
    </>
  );
}
