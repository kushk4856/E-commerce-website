const Badge = ({ type, children }) => {
  const base = `flex items-center justify-center gap-2 rounded badge-shadow ${type} px-[14px] py-1 md:py-2`;

  const styles = {
    white: base + `bg-neutral-0`,
    green: base + `bg-[#38CB89]`,
  };

  // console.log(type);
  return (
    <div className={base}>
      <p className="text-center font-inter text-[16px] font-bold uppercase  leading-4 ">
        {children}
      </p>
    </div>
  );
};

export default Badge;
