import React from 'react';
import Button from './Button';
import Badge from './Badge';
import heartIcon from '../assets/icons.svg';
import { IoHeartOutline } from 'react-icons/io5';

const ProductsCard = () => {
  return (
    <div className="group flex min-h-[392px]  min-w-[231px] flex-shrink-0 flex-col items-start  justify-center gap-3 md:h-[433px] md:w-[262px]">
      <div className="element-card h-[349px]  w-full cursor-pointer  bg-gray-100">
        <div className="img-placeholder  flex h-full w-full  flex-col  items-start justify-between bg-[url('https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_444/cms/2UtHXNNdhsu1U1qvQj06Uc/847d0b4ba1a1cb08ffba065edff35ae5/TL2MNNW080_SHOE_LEFT_GLOBAL_MENS_TREE_LOUNGER_NAVY_NIGHT_WHITE_v2.png')] bg-contain bg-center bg-no-repeat p-[16px]  ">
          <div className="flex w-full items-start justify-between ">
            {/* badge  */}
            <div className="flex flex-col items-center justify-start gap-2">
              <Badge type="bg-white">NEW</Badge>
              <Badge type="bg-[#38CB89]">-50%</Badge>
            </div>
            <div className="smooth-transition flex-center  badge-shadow hidden size-[30px] flex-shrink-0 gap-2 rounded-[32px] bg-white p-[6px] font-bold hover:text-red-500 group-hover:flex">
              <IoHeartOutline />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <Button type={'cardbtn'} isAdded={true}>
              Show more
            </Button>
          </div>
        </div>
      </div>
      <div className="content flex flex-col gap-1 self-stretch">
        <div className="rating flex items-center justify-start gap-[2px]">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <p className="body-2-semi text-neutral-7">Tree Breezeer</p>
        <p className="price flex items-center justify-start gap-3">
          <span className="caption-1-semi text-[#121212]">$199.00</span>{' '}
          <span className="caption-1 text-neutral-4 line-through ">
            $400.00
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductsCard;
