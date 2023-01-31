
import { ChangeEvent, InvalidEvent, useState } from 'react';
import styles from './index.module.css'

export function TodoForm() {
  const [newCommentText, setNewCommentText] = useState("");
  function handleCreateComment() {
    console.log('eita')
  }

  function handleNewCommentChanged(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }
  

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <form className={styles.commentForm} onSubmit={handleCreateComment}>
        
        <input
          required
          name="comment"
          placeholder="Deixe um comentário"
          type="text"
          value={newCommentText}
          onChange={handleNewCommentChanged}
          onInvalid={handleNewCommentInvalid}
        />
        
        <button type="submit" disabled={isNewCommentEmpty}>
          Comentar
        </button>
      
      </form>
    </article>
  );
}
