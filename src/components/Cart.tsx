// src/components/Cart.tsx

import { useShallow } from 'zustand/shallow';
import { useCart } from '../store';

export default function Cart() {
  const { count, cart, addCart, removeCart } = useCart(
    useShallow((state) => ({
      count: state.count,
      cart: state.cart,
      addCart: state.addCart,
      removeCart: state.removeCart,
    }))
  );

  // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // manually calculate total items
  const totalItems = count;
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="h-fit w-[20%] bg-neutral-200 flex flex-col gap-y-2 p-2 rounded-md">
      <h3 className="text-[1rem] text-neutral-950 font-semibold border-b border-neutral-400 pb-2">
        Cart:
      </h3>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id + item.title}
            className="text-[0.9rem] text-neutral-800 flex justify-between"
          >
            <p>
              {item.title.length > 10
                ? `${item.title.slice(0, 10)}...`
                : item.title}
            </p>
            <div className="flex items-center gap-x-2">
              <button onClick={() => removeCart(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => addCart(item)}>+</button>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className="text-[0.9rem] text-neutral-900 font-medium flex justify-between border-t border-dashed border-neutral-400 pt-2">
        <p>Total Items:</p>
        <p>{totalItems}</p>
      </div>
      <div className="text-[0.9rem] text-neutral-900 font-medium flex justify-between">
        <p>Total Price:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
