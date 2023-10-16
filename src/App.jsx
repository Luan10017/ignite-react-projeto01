import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/32424296?v=4',
      name: 'Luan Andrade',
      role: 'Arquiteto de software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },                
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/32424296?v=4',
      name: 'Luan Andrade',
      role: 'Arquiteto de software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },               
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {
  return (
    <div>

      <Header/>
  
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map( post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
{/* 
          <Post
            author='Luan Andrade'
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore vitae possimus voluptate laborum, consequatur necessitatibus. Dicta, saepe repellendus ullam libero nihil rem, eum est nobis, molestias perferendis voluptates."
          />
          <Post
            author='Luan Andrade'
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique inventore vitae possimus voluptate laborum, consequatur necessitatibus. Dicta, saepe repellendus ullam libero nihil rem, eum est nobis, molestias perferendis voluptates."
          /> */}
        </main>
      </div>
    </div>
  )
}

