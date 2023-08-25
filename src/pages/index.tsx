import { useState } from 'react';

type Todo = {
  value: string;
  readonly id: number;
  removed: boolean;
};

type Filter = "all" | "removed";

const App = () => {
  const [text, setText] = useState('');
  const [detail, setDetail] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
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

  const handleOnRemove = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-full mx-auto max-w-2xl my-6 px-3">
      <form onSubmit={handleOnSubmit}>
        <input
          className="border border-black"
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <p>詳細</p>
        <textarea name="comment" ></textarea>
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.value}
            <button onClick={() => handleOnRemove(todo.id)}>
              {todo.removed ? "未完了" : "完了"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


