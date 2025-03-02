import React from "react";
import css from "./IconChevronDown.module.css";
const IconChevronDown = ({ className }) => {
  return (
    <div>
      <svg className={className} width="16" height="16">
        <use href="/images/icons.svg#icon-arrow"></use>
      </svg>
    </div>
  );
};

export default IconChevronDown;
