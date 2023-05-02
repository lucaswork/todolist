
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { ITodoListProps } from 'types/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { FiCheckSquare } from 'react-icons/fi'

interface ITodoForm{
  handleSubmit: (newTodo: ITodoListProps) => void
}
export function TodoForm({handleSubmit}:ITodoForm) {
  const [title, setTitle] = useState("");

  function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    handleSubmit({isComplete: false, title, id: uuidv4()})
    setTitle('')
  }

  function handleTitleChanged(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setTitle(e.target.value);
  }

  function handleTitleInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewCommentEmpty = title.length === 0;

  return (
    <header>
      <h2>Minhas tasks</h2>
      <form onSubmit={onCreate}>
        <div className="input-group">
          <input
            required
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={title}
            onChange={handleTitleChanged}
            onInvalid={handleTitleInvalid}
          />
          <button type="submit" disabled={isNewCommentEmpty}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </form>
    </header>
  );
}
