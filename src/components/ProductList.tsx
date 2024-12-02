// src/components/ProductList.tsx

import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../api/fakeStoreApi';
import { useCart } from '../store';

type ProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductList() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  const addCart = useCart((state) => state.addCart);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products?.map((product: ProductProps) => (
        <div
          key={product.id}
          className="bg-neutral-200 flex flex-col justify-between gap-y-2 p-2 rounded-md"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[250px] object-cover rounded-t"
          />
          <h3 className="text-[1rem] text-neutral-900 font-medium">
            {product.title.length > 20
              ? `${product.title.slice(0, 20)}...`
              : product.title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-[0.8rem] text-neutral-600">${product.price}</p>
            <button
              onClick={() =>
                addCart({
                  ...product,
                  price: product.price,
                  quantity: 1,
                })
              }
              className="bg-neutral-800 text-[0.8rem] text-neutral-100 p-1 rounded"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
