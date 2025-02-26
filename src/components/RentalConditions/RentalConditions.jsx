import IconCheckCircle from "../IconCheckCircle/IconCheckCircle.jsx";
import css from "./RentalConditions.module.css";
const RentalConditions = ({ rentalConditions }) => {
  return (
    <div>
      <ul className={css.list}>
        {rentalConditions?.map((item, id) => (
          <li key={id} className={css.item}>
            <IconCheckCircle />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalConditions;
