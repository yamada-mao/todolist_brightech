import { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
  removed: boolean;
};

type Filter = "all" | "removed";

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // todosステイトを更新する関数
  const handleOnSubmit = () => {
    // 何も入力されていない時
    if (text === "") {
      alert("文字を入力してください");
    return;
    }
    //新しい Todo を作成 
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      removed: false,
    };
    setTodos([newTodo, ...todos]);
    //フォームへの入力をクリアする
    setText('');
  };

  // formに入力更新された時更新する関数
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 削除ボタンがクリックされた時更新する関数
  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy: Todo[] = JSON.parse(JSON.stringify(todos));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // ゴミ箱を空にする時更新する関数
  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  // フィルター
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return !todo.removed;
      case "removed":
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div className="w-full mx-auto max-w-2xl my-6 px-3">
      <select
        defaultValue="all"
        onChange={(e) => setFilter(e.target.value as Filter)}
      >
        <option value="all">すべてのタスク</option>
        <option value="removed">ゴミ箱</option>
      </select>
      {filter === "removed" ? (
        <button
          onClick={handleOnEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
        ゴミ箱を空にする
        </button>
      ) : (
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input  
          className="border border-black" 
          type="text" 
          value={text} 
          onChange={(e) => handleOnChange(e)} />
        <input
          type="submit"
          value="追加"
          onSubmit={handleOnSubmit}
        />
      </form>
      )}
      <ul>
        {filteredTodos.map((todo) => {
          return (
          <li key={todo.id}>
            {todo.value}
            <button onClick={() => handleOnRemove(todo.id, todo.removed)}>
              {todo.removed ? "復元" : "削除"}
            </button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;




// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter, Nothing_You_Could_Do } from 'next/font/google'
// import styles from '../styles/Home.module.scss'
// import { test } from 'node:test'
// import { useState } from 'react'

// const inter = Inter({ subsets: ['latin'] })





// export default function Home() {
//   const [stringArray, setStringArray] = useState(['掃除する', '勉強する', '貯金する']);
//   const [newItem, setNewItem] = useState('');


//   type Todo = {
//     value: string;
//     readonly id: number;
//     checked: boolean;
//     removed: boolean;
//   };

//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   setStringArray(e.target.value);
//   // };


//   const submit = () => {

//     // const newTodo: Todo = {
//     //   id: new Date().getTime(),
//     //   checked: false,
//     //   removed: false,
//     //   value: ''
//     // };
//     if (newItem.trim() !== '') {
//       setStringArray(prevArray => [...prevArray, newItem]);
//       // useState('')
//       setNewItem(""); // 入力フィールドをクリア

//       // const deleteTodo = (index: number) => {
//       //   const newTodos 
//       // }
//     }

//   }



//   const deleteTodo = (item: string, index: number) => {
//     // window.confirm();
//     console.log(11111);
//     console.log(stringArray);
//     console.log(22222);
//   }

//   // const handleRemove = (id: number, removed: boolean) => {
//   //   setTodos((todos: any[]) => {
//   //     const newTodos = todos.map((todo: { id: number }) => {
//   //       if (todo.id === id) {
//   //         return { ...todo, removed };
//   //       }
//   //       return todo;
//   //     });

//   //     return newTodos;
//   //   });
//   // };

//   return (
//     <div>
//       <input type="text"
//         onChange={(event) => setNewItem(event.target.value)} />

//       <button onClick={() => submit()}>送信</button>

//       <div className={styles.container}>
//         {stringArray.map((item, index) => (
//           <div>
//             <p className={styles.para} key={index}>{item}
//             </p>
//             <button onClick={() => deleteTodo(item, index)}>完了</button>
//           </div>
//         ))
//         }

//       </div>
//     </div>
//   )
// }

// const deleteTodo = () => {

// }




// // function setTodos(arg0: (todos: any[]) => ({ id: number } | { removed: boolean; id: number })[]) {
// //   throw new Error('Function not implemented.')
// // }

// // function setTodos(arg0: (todos: any) => any[]) {
// //   // throw new Error('Function not implemented.');

// // }

