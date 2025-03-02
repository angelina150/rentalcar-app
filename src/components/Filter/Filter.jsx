import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations.js";
import { setFilters } from "../../redux/cars/slice.js";
import { useState } from "react";
import SelectMileage from "../SelectMileage/SelectMileage.jsx";
import SelectPrice from "../SelectPrice/SelectPrice.jsx";
import SelectBrand from "../SelectBrand/SelectBrand.jsx";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const [localFilters, setLocalFilters] = useState({
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  });

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
    dispatch(fetchCars(localFilters));
  };

  const updateLocalFilters = (name, value) => {
    setLocalFilters((prevFilters) => {
      if (prevFilters[name] !== value) {
        return {
          ...prevFilters,
          [name]: value,
        };
      }
      return prevFilters;
    });
  };

  return (
    <div className={css.wrapper}>
      <SelectBrand setLocalFilters={updateLocalFilters} />
      <SelectPrice setLocalFilters={updateLocalFilters} />
      <SelectMileage setLocalFilters={updateLocalFilters} />

      <button className={css.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
