import css from "./CarDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCarById } from "../../redux/cars/operations.js";
import { selectCarById } from "../../redux/cars/selector.js";
import AccessoriesAndFuncsList from "../AccessoriesAndFuncsList/AccessoriesAndFuncsList.jsx";
import RentalConditions from "../RentalConditions/RentalConditions.jsx";
import FormOrder from "../FormOrder/FormOrder.jsx";
import toast from "react-hot-toast";
const CarDetails = ({ id }) => {
  const [isIdVisible, setIsIdVisible] = useState(false);
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCarById(id));
      } catch (error) {
        toast.error("Error fetching car data:", error);
      }
    };
    fetchData();
  }, [dispatch, id]);

  const address = car.address || "";
  const [, city, country] = address.split(",").map((part) => part.trim());
  const formatMileage = (mileage) => {
    return new Intl.NumberFormat().format(mileage) + " km";
  };
  const mileage = formatMileage(car.mileage);

  const numberId = car?.id;
  const visibleId = numberId?.toString().slice(0, 4);
  const toggleIdVisibility = () => {
    setIsIdVisible((prevState) => !prevState);
  };
  return (
    <div className={css.wrapper}>
      <div>
        <div>
          <div className={css.wrapperTitle}>
            <h2 className={css.title}>
              {car.brand}
              {car.model}, {car.year}
            </h2>
            <span className={css.numberId}>
              Id: {isIdVisible ? numberId : visibleId}
              {!isIdVisible && (
                <button
                  onClick={toggleIdVisibility}
                  className={css.toggleButton}
                >
                  ...
                </button>
              )}
            </span>
          </div>

          <div className={css.wrapperDesc}>
            <div className={css.wrapperLocation}>
              <svg className={css.iconLocation} width="16" height="16">
                <use href="/images/icons.svg#icon-Location"></use>
              </svg>
              <p>
                {city}, {country}
              </p>
            </div>
            <p>Mileage: {mileage}</p>
          </div>
          <h2 className={css.price}>${car.rentalPrice}</h2>
        </div>
        <p className={css.description}>{car.description}</p>
        <div>
          <h3 className={css.titleDesc}>Rental Conditions: </h3>
          <RentalConditions rentalConditions={car.rentalConditions} />
        </div>
        <div>
          <h3 className={css.titleDesc}>Car Specifications:</h3>
          <ul className={css.specificationsList}>
            <li className={css.specificationsItem}>
              <svg className={css.icon} width="16" height="16">
                <use href="/images/icons.svg#icon-calendar"></use>
              </svg>
              <p>Year: {car.year}</p>
            </li>
            <li className={css.specificationsItem}>
              <svg className={css.icon} width="16" height="16">
                <use href="/images/icons.svg#icon-car"></use>
              </svg>
              <p>Type: {car.type}</p>
            </li>
            <li className={css.specificationsItem}>
              <svg className={css.icon} width="16" height="16">
                <use href="/images/icons.svg#icon-fuel-pump"></use>
              </svg>
              <p>Fuel Consumption: {car.fuelConsumption}</p>
            </li>
            <li className={css.specificationsItem}>
              <svg className={css.icon} width="16" height="16">
                <use href="/images/icons.svg#icon-gear"></use>
              </svg>
              <p>Engine Size: {car.engineSize}</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={css.titleDesc}>Accessories and functionalities:</h3>
          <AccessoriesAndFuncsList
            accessories={car?.accessories}
            functionalities={car?.functionalities}
          />
        </div>
      </div>
      <div>
        <img src={car.img} alt={car.brand} className={css.img} />
        <FormOrder />
      </div>
    </div>
  );
};

export default CarDetails;
