import { useNavigate } from "react-router-dom";
import IconLine from "../IconLine/IconLine.jsx";
import css from "./CarItem.module.css";

const formatMileage = (mileage) => {
  return new Intl.NumberFormat().format(mileage) + " km";
};
const CarItem = ({ car }) => {
  const navigate = useNavigate();
  const handleGoToDetails = () => {
    navigate(`/catalog/${car.id}`);
  };
  const address = car.address || "";
  const [, city, country] = address.split(",").map((part) => part.trim());
  const Separator = () => <IconLine />;

  const mileage = formatMileage(car.mileage);

  return (
    <div>
      <li className={css.carItem}>
        <img src={car.img} alt={car.brand} className={css.img} />
        <div className={css.name}>
          <h2 className={css.title}>
            {car.brand} <span className={css.partName}>{car.model}</span>,{" "}
            {car.year}
          </h2>
          <p>${car.rentalPrice}</p>
        </div>
        <div className={css.descWrapper}>
          <p className={css.desc}>
            {city} <Separator />
            {country} <Separator /> {car.rentalCompany} <Separator />
          </p>
          <p className={css.desc}>
            {car.type} <Separator /> {mileage}
          </p>
        </div>

        <button type="button" className={css.btn} onClick={handleGoToDetails}>
          Read more
        </button>
      </li>
    </div>
  );
};
export default CarItem;
