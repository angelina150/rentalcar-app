import IconLine from "../IconLine/IconLine.jsx";
import css from "./CarItem.module.css";

const formatMileage = (mileage) => {
  return new Intl.NumberFormat().format(mileage) + " km";
};
const CarItem = ({ car }) => {
  const address = car.address || "";
  const [, city, country] = address.split(",").map((part) => part.trim());
  const Separator = () => <IconLine />;

  const mileage = formatMileage(car.mileage);
  return (
    <div>
      <li className={css.carItem}>
        <img src={car.img} alt={car.brand} className={css.img} />
        <div>
          <h2>
            {car.brand} <span>{car.model}</span>, {car.year}
          </h2>
          <p>${car.rentalPrice}</p>
        </div>

        <p className={css.descWrapper}>
          {city} <Separator />
          {country} <Separator /> {car.rentalCompany} <Separator />
        </p>
        <p className={css.descWrapper}>
          {car.type} <Separator /> {mileage}
        </p>
        <button type="button">Read more</button>
      </li>
    </div>
  );
};
export default CarItem;
