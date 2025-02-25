import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleGoToCatalog = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.heroSection}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.desc}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button type="button" className={css.btn} onClick={handleGoToCatalog}>
        View Catalog
      </button>
    </div>
  );
};

export default HomePage;
