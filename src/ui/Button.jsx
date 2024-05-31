import React from 'react';

const Button = ({ type, isAdded, toggle, children }) => {
  const base =
    'group-hover:inline-flex hidden smooth-transition  text-white items-center justify-center gap-2 rounded-lg bg-neutral-7  cursor-pointer ';

  const styles = {
    cardbtn:
      base + `px-6 py-2 w-[202.7px] h-[40.5px] md:w-[230px] md:h-[46px] `,
    small: base + `w-[230px] h-[46px]`,
  };
  return (
    <button onClick={toggle} className={styles[type]} disabled={status}>
      {isAdded && <span>✅</span>}
      <a href="#" className="button-sm  ">
        {children}
      </a>
    </button>
  );
};

export default Button;
