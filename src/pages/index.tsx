import Head from 'next/head'
import Image from 'next/image'
import { Inter, Nothing_You_Could_Do } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import { test } from 'node:test'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [stringArray, setStringArray] = useState(['掃除する', '勉強する', '貯金する']);
  const [newItem, setNewItem] = useState('');

  const submit = () => {
    if (newItem.trim() !== '') {
      setStringArray(prevArray => [...prevArray, newItem]);
      setNewItem(''); // 入力フィールドをクリア

      // const deleteTodo = (index: number) => {
      //   const newTodos 
      // }
    }

  }

  type Todo = {
    value: string;
    readonly id: number;
    checked: boolean;
    removed: boolean;
  };

  const newTodo: Todo = {
    id: new Date().getTime(),
    checked: false,
    removed: false,
    value: ''
  };

  // setTodos((todos: any) => [newTodo, ...todos]);

  // const handleRemove = (id: number, removed: boolean) => {
  //   // setTodos((todos) => {
  //   //   const newTodos = todos.map((todo: { id: number }) => {
  //   //     if (todo.id === id) {
  //   //       return { ...todo, removed };
  //   //     }
  //   //     return todo;
  //   //   });

  //     return newTodos;
  //   });

  // const deleteTodo = () => {}
  // const deleteTodo = (index: number) => {
  //   const newTodos = todos.filter((todo, todoIndex) => {
  //     return index !== todoIndex;
  //   });

  //   setTodos(newTodos);
  // };

  const deleteTodo = (item: string,index: number) => {
    window.confirm(item + index);

  }






  return (
    <div>
      <input type="text"
        onChange={event => setNewItem(event.target.value)} />

      <button onClick={() => submit()}>送信</button>

      <div className={styles.container}>
        {stringArray.map((item, index) => (
          <div>
            <p className={styles.para} key={index}>{item}
            </p>
            <button onClick={() => deleteTodo(item ,index)}>完了</button>
          </div>
        ))
        }

      </div>
    </div>
  )
}
// }

// function setTodos(arg0: (todos: any) => any[]) {
//   // throw new Error('Function not implemented.');

// }

