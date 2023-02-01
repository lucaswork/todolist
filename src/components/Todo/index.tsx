import React from 'react';
import { ITodoListProps } from 'types/TodoList';


interface ITodoProps extends ITodoListProps{
  handleCompleteTask: (id: string) => void
  handleRemoveTask: (id: string) => void
}
const Todo: React.FC<ITodoProps> = ({title, isComplete, id, handleRemoveTask, handleCompleteTask}) => {
  
  return (
    <ul>
      <li>
        <div>
          <input type="checkbox" onClick={() => handleCompleteTask(id)}/>
          <span>{title}</span>
        </div>
        <button type='button' onClick={() => handleRemoveTask(id)}>remover</button>

      </li>
    </ul>
  )
}

export default Todo;