import { Post } from "components/Post";
import { Header } from "components/Header";
import {TodoForm} from "components/TodoForm"



import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";
import { ITodoListProps } from "types/TodoList";


// {
//   id: uuidv4(),
//   author: {
//     avatarUrl: "https://avatars.githubusercontent.com/u/11548135?v=4",
//     name: "Lucas Dias",
//     role: "Dev",
//   },

//   content: [
//     { type: "paragraph", content: "Fala galeraa 👋 " },
//     {
//       type: "paragraph",
//       content:
//         "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
//     },
//     { type: "link", content: "jane.design/doctorcare" },
//   ],
//   publishedAt: new Date("2022-07-10 20:00:00"),
// },



export function App() {

  const [todoList, setTodoList] = useState<ITodoListProps[]>([])
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TodoForm />
        <main>  
          <h2>Todo LIST!</h2>
          {/* {todoList?.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={[]}
                publishedAt={post.publishedAt}
              />
            );
          })} */}
        </main>
      </div>
    </>
  );
}
