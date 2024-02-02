import React from "react";
import style from  './loader.module.scss';

export const Loader = ({ text = "" }) => {
  const header = text ? <h4>{text}</h4> : null;

  return (
    <div className={style.spinner}>
      {header}
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;
