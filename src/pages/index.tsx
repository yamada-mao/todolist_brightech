import { useState } from 'react';
import styles from '@/styles/Home.module.scss';

type Todo = {
  value: string;
  readonly id: number;
  removed: boolean;
  comment: string;
};

type Filter = "all" | "completed" | "incomplete"; // フィルターオプションを追加

const App = () => {
  const [text, setText] = useState('');
  const [comment, setComment] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "" || comment === "") {
      return;
    }
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      removed: false,
      comment: comment,
    };
    setTodos([newTodo, ...todos]);
    setText('');
    setComment('');
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return todo.removed;
      case "incomplete":
        return !todo.removed;
      default:
        return true;
    }
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnRemove = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, removed: !todo.removed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="w-full mx-auto max-w-2xl my-6 px-3">
      <form onSubmit={handleOnSubmit}>
        <div className={styles.flex}>
          <input
            className="border border-black"
            type="text"
            value={text}
            onChange={handleOnChange}
          />
          <button type="submit">追加</button>
          <p>詳細</p>
          <textarea
            name="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </form>
      <ol>
        <p>ALL</p>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.value}
            <button onClick={() => handleOnRemove(todo.id)}>
              {todo.removed ? "未完了" : "完了"}
            </button>
            詳細: {todo.comment}
          </li>
        ))}
      </ol>

      <ol>
        <p>完了</p>
        {filteredTodos
          .filter((todo) => todo.removed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.value}
              <button onClick={() => handleOnRemove(todo.id)}>完了</button>
            </li>
          ))}
      </ol>

      <ol>
        <p>未完了</p>
        {filteredTodos
          .filter((todo) => !todo.removed)
          .map((todo) => (
            <li key={todo.id}>
              {todo.value}
              <button onClick={() => handleOnRemove(todo.id)}>未完了</button>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default App;

