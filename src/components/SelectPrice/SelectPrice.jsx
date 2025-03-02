import { useSelector } from "react-redux";
import css from "./SelectPrice.module.css";
import IconChevronDown from "../IconChevronDown/IconChevronDown.jsx";
import { selectCarsFilters } from "../../redux/cars/selector.js";
import { useEffect, useMemo, useRef, useState } from "react";

const SelectPrice = ({ setLocalFilters }) => {
  const filters = useSelector(selectCarsFilters) || {};
  const [selectedPrice, setSelectedPrice] = useState(
    filters?.rentalPrice || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const priceOptions = useMemo(() => {
    const options = [];
    for (let i = 30; i <= 150; i += 10) {
      options.push(i);
    }
    return options;
  }, []);

  const handlePriceChange = (rentalPrice) => {
    setSelectedPrice(rentalPrice);
    setLocalFilters("rentalPrice", rentalPrice);
  };

  useEffect(() => {
    if (selectedPrice !== filters?.rentalPrice) {
      setLocalFilters("rentalPrice", selectedPrice);
    }
  }, [selectedPrice, filters?.rentalPrice, setLocalFilters]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={css.container} ref={dropdownRef}>
      <p className={css.label}>Price / 1 hour</p>

      <div
        className={css.selectWrapper}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <IconChevronDown
          className={`${css.icon} ${isOpen ? css.iconOpen : ""}`}
        />
        <div className={css.selectedValue}>
          {selectedPrice ? `To $${selectedPrice}` : "Choose a price"}
        </div>

        {isOpen && (
          <div className={css.dropdown}>
            {priceOptions.map((price) => (
              <div
                key={price}
                className={css.option}
                onMouseDown={() => handlePriceChange(price)}
              >
                {price}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPrice;
