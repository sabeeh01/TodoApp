const TodoListItem = ({ todo, onStatusChange }) => {
  return (
    <>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      {todo.status === "pending" && (
        <input
          placeholder="change status"
          type="checkbox"
          checked={false}
          onChange={onStatusChange}
        />
      )}
    </>
  );
};

export default TodoListItem;
