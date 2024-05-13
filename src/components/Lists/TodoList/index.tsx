import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  selectTodos,
} from "../../../redux/features/todo/todoSlice";
import TodoListItem from "../../ListItems/TodoListItem";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return todos.map((todo, index) => (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onStatusChange={() => dispatch(changeStatus(index))}
    />
  ));
};

export default TodoList;
