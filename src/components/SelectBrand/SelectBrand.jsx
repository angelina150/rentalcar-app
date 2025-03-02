import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { selectBrands } from "../../redux/cars/selector.js";
import { fetchBrands } from "../../redux/cars/operations.js";
import css from "./SelectBrand.module.css";
import IconChevronDown from "../IconChevronDown/IconChevronDown.jsx";

const SelectBrand = ({ setLocalFilters }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!brands.length) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands.length]);

  const handleBrandChange = (brand, event) => {
    setSelectedBrand(brand);
    setLocalFilters("brand", brand);
    setIsOpen(false);
    event.stopPropagation();
  };

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={css.container} ref={dropdownRef}>
      <p htmlFor="selectBrand" className={css.label}>
        Car brand
      </p>

      <div className={css.selectWrapper} onClick={handleDropdownToggle}>
        <IconChevronDown
          className={`${css.icon} ${isOpen ? css.iconOpen : ""}`}
        />
        <div className={css.selectedValue}>
          {selectedBrand || "Choose a brand"}
        </div>

        {isOpen && (
          <div className={css.dropdown}>
            {brands.map((brand, index) => (
              <div
                key={index}
                className={css.dropdownItem}
                onClick={(event) => handleBrandChange(brand, event)}
              >
                {brand}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBrand;
