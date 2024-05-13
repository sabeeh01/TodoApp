import { useState } from "react";
import InputField from "../InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";
import styles from "./todo-header.module.css";

const TodoHeader = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [fieldValues, setFieldValues] = useState({
    title: "",
    description: "",
  });

  const onFieldChange = ({ target }) => {
    const tFieldValues = { ...fieldValues };
    tFieldValues[target.name] = target.value;
    setFieldValues(tFieldValues);
  };

  const onAdd = () => {
    try {
      if (!fieldValues.title) throw new Error("Title is required!");
      dispatch(
        addTodo({
          id: new Date().getMilliseconds(),
          title: fieldValues.title,
          description: fieldValues.description || "",
          status: "pending",
        })
      );
      setFieldValues({
        title: "",
        description: "",
      });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <InputField
        placeholder="Enter title"
        value={fieldValues.title}
        name="title"
        onChange={onFieldChange}
      />
      <InputField
        placeholder="Enter description"
        name="description"
        value={fieldValues.description}
        onChange={onFieldChange}
      />
      <button onClick={onAdd} className={styles.addButton}>
        Add todo
      </button>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {/* Render error message if exists */}
    </div>
  );
};

export default TodoHeader;
