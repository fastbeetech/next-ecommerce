import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { formatCurrency } from './../utils/formatter';
import Button from './Button';
import UseCart from '../hooks/useCart';
import ContentLoader, { Facebook } from 'react-content-loader';

interface ItemProp {
  id: string;
  name: string;
  price: number;
  image: string | null;
}

const StoreItem: React.FC<ItemProp> = ({ id, name, price, image }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const l = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(l);
      controller.abort();
    };
  }, []);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCartQuantity,
  } = UseCart();
  
  const quantity = getItemQuantity(id);
  return (
    <>
      {loading ? (
        <Facebook />
      ) : (
        <div className="flex flex-col card bg-white/50 border rounded-md shadow-lg w-full p-0">
          <Image
            src={image || 'https://th.bing.com/th/id/OIP.KhEKUkd4eL9dJObSIXjmCwHaHa?pid=ImgDet&rs=1'}
            className="w-full md:h-[300px] lg:h-[250px]"
            width={250}
            height={250}
            alt={name}
          />
          <div className="flex flex-wrap justify-between items-center my-2 mx-3 ">
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-medium">{formatCurrency(price)}</div>
          </div>
          <div className="my-2 mx-3 text-black">
            {quantity === 0 ? (
              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded"
                onClick={() => increaseCartQuantity(id)}
              >
                +Add To Cart
              </Button>
            ) : (
              <div className="flex items-center flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <div className="text-black">
                    <span className="text-xl font-semibold">{quantity}</span> in
                    Cart
                  </div>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  className="bg-gray-600 hover:bg-gray-700 active:border-2 active:border-gray-900 text-sm text-white px-5 py-2 rounded"
                  onClick={() => removeCartQuantity(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StoreItem;
