import { useNavigate } from "react-router-dom";
import IconLine from "../IconLine/IconLine.jsx";
import css from "./CarItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/cars/selector.js";
import { toggleFavorite } from "../../redux/cars/slice.js";

const formatMileage = (mileage) => {
  return new Intl.NumberFormat().format(mileage || 0) + " km";
};

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavorite = favoriteCars.includes(car.id);
  const navigate = useNavigate();

  const handleGoToDetails = () => {
    navigate(`/catalog/${car.id}`);
  };

  const address = car.address || "";
  const [, city = "", country = ""] = address
    .split(",")
    .map((part) => part.trim());
  const mileage = formatMileage(car.mileage);

  return (
    <li className={css.carItem}>
      <img src={car.img} alt={car.brand} className={css.img} />
      <button
        className={css.btnFavorite}
        onClick={() => dispatch(toggleFavorite(car.id))}
        style={{}}
      >
        {isFavorite ? (
          <svg className={css.iconFavorite} width="16" height="16">
            <use href="/images/icons.svg#icon-heart-favorite"></use>
          </svg>
        ) : (
          <svg className={css.icon} width="16" height="16">
            <use href="/images/icons.svg#icon-heart"></use>
          </svg>
        )}
      </button>
      <div className={css.name}>
        <h2 className={css.title}>
          {car.brand} <span className={css.partName}>{car.model}</span>,{" "}
          {car.year}
        </h2>
        <p>${car.rentalPrice}</p>
      </div>
      <div>
        <div className={css.descWrapper}>
          <p className={css.desc}>{city}</p> <IconLine />
          <p className={css.desc}>{country}</p> <IconLine />
          <p className={css.desc}>{car.rentalCompany}</p>
          <IconLine />
        </div>
        <div className={css.descWrapper}>
          <p className={css.desc}>{car.type}</p> <IconLine />
          <p className={css.desc}>{mileage}</p>
        </div>
      </div>

      <button type="button" className={css.btn} onClick={handleGoToDetails}>
        Read more
      </button>
    </li>
  );
};

export default CarItem;
