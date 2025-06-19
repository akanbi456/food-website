import React, { useState } from 'react';
import { useCart } from '../content/CartContext';

const PaymentPage = () => {
  const { cartItems } = useCart();
  const [currency, setCurrency] = useState('NGN'); // NGN or USD
  const exchangeRate = 1500; // 1 USD = 1500 NGN (example rate, adjust dynamically if needed)

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return currency === 'USD' ? total : total * exchangeRate;
  };

  const formatPrice = (amount) => {
    return currency === 'USD'
      ? `$${amount.toFixed(2)}`
      : `₦${amount.toLocaleString('en-NG', { maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="max-w-xl p-6 mx-auto bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Checkout</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Select Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-1 border rounded"
        >
          <option value="NGN">Naira (₦)</option>
          <option value="USD">Dollar ($)</option>
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Order Summary:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.title} × {item.quantity}</span>
              <span>{formatPrice(currency === 'USD' ? item.price * item.quantity : item.price * item.quantity * exchangeRate)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>Total:</span>
          <span>{formatPrice(calculateTotal())}</span>
        </div>
      </div>

      <button
        onClick={() => {
          if (currency === 'NGN') {
            // call Paystack
            alert('Redirecting to Paystack...');
          } else {
            // call Stripe
            alert('Redirecting to Stripe...');
          }
        }}
        className="w-full py-2 mt-4 text-white bg-red-600 rounded "
      >
        Pay with {currency === 'NGN' ? 'Paystack (₦)' : 'Stripe ($)'}
      </button>
    </div>
  );
};

export default PaymentPage;
