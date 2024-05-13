import { useState } from "react";
import InputField from "../../components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";

const TodoHeader = () => {
  const dispatch = useDispatch();
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
    dispatch(
      addTodo({
        id: new Date().getMilliseconds(),
        ...fieldValues,
        status: "pending",
      })
    );
    setFieldValues({
      title: "",
      description: "",
    });
  };

  return (
    <>
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
      <button title="Add todo" onClick={onAdd} />
    </>
  );
};

export default TodoHeader;
