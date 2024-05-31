import React from 'react';

const Header = () => {
  return (
    <div className="notification_bar flex-center  min-w-[26.04vw] gap-[21px] bg-neutral-2 px-[2.22vw] py-2 xs:gap-[30vw] xs:pl-[27vw] md:gap-[200px] md:pl-[250px]  lg:gap-[37.3vw] lg:pl-[36.2vw] xl:gap-[35.5vw] xl:py-2 xl:pl-[35.57vw] xl:pr-4">
      <div className="content_ flex items-center justify-start gap-3">
        <div className="text flex-center gap-2">
          <p className="caption-2-semi sm:caption-1-semi text-[#343839]">
            <span>👞</span> 30 % off storewide - Limited time!
          </p>
        </div>
        <div className="get_started_button xl:flex-center hidden gap-[2px] text-[#377DFF] xl:flex">
          <p className="content_  button-xs">Shop Now</p>
          <p className="arrow_icon ">{'>'}</p>
        </div>
      </div>
      <div className="icon_close">X</div>
    </div>
  );
};

export default Header;
