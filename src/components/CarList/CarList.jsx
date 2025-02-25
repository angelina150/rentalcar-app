import { useEffect } from "react";
import CarItem from "../CarItem/CarItem.jsx";
import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectCars } from "../../redux/cars/selector.js";
const CarList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const cars = useSelector(selectCars);
  return (
    <div>
      <ul className={css.list}>
        {Array.isArray(cars) &&
          cars.map((car) => <CarItem key={car.id} car={car} />)}
      </ul>
    </div>
  );
};

export default CarList;
