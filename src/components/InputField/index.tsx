import styles from "./inputfield.module.css";

const InputField = (props) => {
  return <input {...props} className={styles.input} />;
};

export default InputField;
