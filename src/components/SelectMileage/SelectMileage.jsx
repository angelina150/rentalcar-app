import { useSelector } from "react-redux";
import css from "./SelectMileage.module.css";
import { selectCarsFilters } from "../../redux/cars/selector.js";
import { useEffect, useState } from "react";

const SelectMileage = ({ setLocalFilters }) => {
  const filters = useSelector(selectCarsFilters);
  const { minMileage, maxMileage } = filters;

  const [localMinMileage, setLocalMinMileage] = useState(minMileage || "");
  const [localMaxMileage, setLocalMaxMileage] = useState(maxMileage || "");

  const formatNumber = (value) => {
    return value ? value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  };

  const handleMileageChange = (event, type) => {
    const cleanValue = event.target.value.replace(/[^\d]/g, "");
    if (type === "minMileage") {
      setLocalMinMileage(cleanValue);
    } else {
      setLocalMaxMileage(cleanValue);
    }
  };

  useEffect(() => {
    if (localMinMileage !== minMileage || localMaxMileage !== maxMileage) {
      setLocalFilters("minMileage", localMinMileage);
      setLocalFilters("maxMileage", localMaxMileage);
    }
  }, [
    localMinMileage,
    localMaxMileage,
    minMileage,
    maxMileage,
    setLocalFilters,
  ]);

  return (
    <div>
      <p className={css.title}>Car mileage / km</p>
      <label className={css.label} htmlFor="minMileage">
        <input
          className={css.inputMin}
          type="text"
          id="minMileage"
          name="minMileage"
          value={localMinMileage ? `From ${formatNumber(localMinMileage)}` : ""}
          onChange={(e) => handleMileageChange(e, "minMileage")}
          placeholder="From"
        />
      </label>
      <label className={css.label} htmlFor="maxMileage">
        <input
          className={css.inputMax}
          type="text"
          id="maxMileage"
          name="maxMileage"
          value={localMaxMileage ? `To ${formatNumber(localMaxMileage)}` : ""}
          onChange={(e) => handleMileageChange(e, "maxMileage")}
          placeholder="To"
        />
      </label>
    </div>
  );
};

export default SelectMileage;
