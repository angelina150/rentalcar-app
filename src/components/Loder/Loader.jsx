import { DotLoader } from "react-spinners";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <DotLoader className={css.loader} color="#3470FF" size={60} number={3} />
    </div>
  );
};

export default Loader;
