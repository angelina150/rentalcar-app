import IconCheckCircle from "../IconCheckCircle/IconCheckCircle.jsx";
import css from "./AccessoriesAndFuncsList.module.css";
const AccessoriesAndFuncsList = ({ accessories, functionalities }) => {
  const arr = accessories?.concat(functionalities);
  return (
    <div>
      <ul className={css.list}>
        {arr?.map((item, id) => (
          <li key={id} className={css.item}>
            <IconCheckCircle />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccessoriesAndFuncsList;
