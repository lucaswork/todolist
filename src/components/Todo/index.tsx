import React from 'react';
import { ITodoListProps } from 'types/TodoList';
import { FiTrash } from 'react-icons/fi'


interface ITodoProps extends ITodoListProps{
  handleCompleteTask: (id: string) => void
  handleRemoveTask: (id: string) => void
}
const Todo: React.FC<ITodoProps> = ({title, isComplete, id, handleRemoveTask, handleCompleteTask}) => {
  
  return (
    <li onClick={() => handleCompleteTask(id)}>
       <div className={isComplete ? 'completed' : ''} >
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            readOnly
            checked={isComplete} />
          <span className="checkmark"></span>
        </label>
        <p>{title}</p>
      </div>
      <button type="button" onClick={() => handleRemoveTask(id)}>
        <FiTrash size={16}/>
      </button>

    </li>
  )
}

export default Todo;