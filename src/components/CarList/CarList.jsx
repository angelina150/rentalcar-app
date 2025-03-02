import { useEffect } from "react";
import CarItem from "../CarItem/CarItem.jsx";
import css from "./CarList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter.jsx";
import { fetchCars } from "../../redux/cars/operations.js";
import {
  selectCars,
  selectTotalPages,
  selectPage,
  selectCarsFilters,
} from "../../redux/cars/selector.js";
import { setPage } from "../../redux/cars/slice.js";

const CarList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectCarsFilters);
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages) || 1;
  const currentPage = useSelector(selectPage);

  useEffect(() => {
    const updatedFilters = { ...filters, page: currentPage };
    dispatch(fetchCars(updatedFilters));
  }, [dispatch, filters, currentPage]);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setPage(nextPage));
      dispatch(fetchCars({ ...filters, page: nextPage, limit: 12 }));
    }
  };

  return (
    <div>
      <Filter />
      <ul className={css.list}>
        {cars.length > 0 ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <li className={css.item}>No cars found</li>
        )}
      </ul>
      {currentPage < totalPages && cars.length > 0 && (
        <button className={css.btn} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarList;
