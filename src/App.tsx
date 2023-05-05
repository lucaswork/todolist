import React from 'react';
import { Header } from "./components/Header";
import { TaskList } from './components/TaskList';
import './styles/global.scss'


const App: React.FC = () => {
  return <>
    <Header/>
    <TaskList/>
  </>;
}

export default App;


 

