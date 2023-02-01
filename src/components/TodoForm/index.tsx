
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { ITodoListProps } from 'types/TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css'


interface ITodoForm{
  handleSubmit: (newTodo: ITodoListProps) => void
}
export function TodoForm({handleSubmit}:ITodoForm) {
  const [title, setTitle] = useState("");

  function onCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    handleSubmit({isComplete: false, title, id: uuidv4()})
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
    <article className={styles.post}>
      <form className={styles.commentForm} onSubmit={onCreate}>
        
        <input
          required
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={handleTitleChanged}
          onInvalid={handleTitleInvalid}
        />
        
        <button type="submit" disabled={isNewCommentEmpty}>
          Criar
        </button>
      
      </form>
    </article>
  );
}
