import css from "./IconLine.module.css";
const IconLine = () => {
  return (
    <div>
      <svg className={css.icon} width="0" height="16">
        <use href="/images/icons.svg#icon-line"></use>
      </svg>
    </div>
  );
};

export default IconLine;
