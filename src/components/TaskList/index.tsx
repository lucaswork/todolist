import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import '../../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'
interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    const newTask = {isComplete: false, title: newTaskTitle, id: new Date().getTime()}
    setTasks(oldState => [...oldState, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    setTasks(oldState => oldState.map(t => t.id === id ? {...t, isComplete: !t.isComplete} : t ))
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(t => t.id !== id))
  }


  function handleTitleChanged(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewTaskTitle(e.target.value);
  }

  function handleTitleInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  
  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <form onSubmit={handleCreateNewTask}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Adicionar novo todo" 
              value={newTaskTitle}
              onChange={handleTitleChanged}
              onInvalid={handleTitleInvalid}
            />
            <button type="submit" disabled={newTaskTitle.length === 0} data-testid="add-task-button">
              <FiCheckSquare size={16} color="#fff"/>
            </button>
          </div>
        </form>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task">
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" onClick={() => handleRemoveTask(task.id)}  data-testid="remove-task-button">
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}