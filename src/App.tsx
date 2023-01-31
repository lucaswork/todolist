import { Post } from "components/Post";
import { Header } from "components/Header";
import { SideBar } from "components/Sidebar";

import { v4 as uuidv4 } from 'uuid';


import styles from "./App.module.css";
import "./global.css";


const posts = [
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/11548135?v=4",
      name: "Lucas Dias",
      role: "Dev",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/11548135?v=4",
      name: "Jaum Dias",
      role: "Dev",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-06 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={[]}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
