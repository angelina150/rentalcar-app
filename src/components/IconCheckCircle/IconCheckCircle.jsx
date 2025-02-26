import css from "./IconCheckCircle.module.css";
const IconCheckCircle = () => {
  return (
    <div>
      <svg className={css.icon} width="16" height="16">
        <use href="/images/icons.svg#icon-check-circle"></use>
      </svg>
    </div>
  );
};

export default IconCheckCircle;
