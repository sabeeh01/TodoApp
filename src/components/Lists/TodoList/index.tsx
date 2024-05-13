import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  selectTodos,
} from "../../../redux/features/todo/todoSlice";
import TodoListItem from "../../ListItems/TodoListItem";
import styles from './todo-list.module.css'

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onStatusChange={() => dispatch(changeStatus(index))}
        />
      ))}
    </div>
  );
};

export default TodoList;
