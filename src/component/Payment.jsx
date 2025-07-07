

import React, { useState, useEffect } from 'react';
import { useCart } from '../content/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PaymentPage = () => {
  const { cartItems } = useCart();

  const [currency, setCurrency] = useState('NGN');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const exchangeRate = 1500; // Example: 1 USD = 1500 NGN

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return currency === 'USD' ? total : total * exchangeRate;
  };

  const formatPrice = (amount) => {
    return currency === 'USD'
      ? `$${amount.toFixed(2)}`
      : `₦${amount.toLocaleString('en-NG', { maximumFractionDigits: 2 })}`;
  };

  const handlePayment = () => {
    if (!deliveryAddress || !phoneNumber) {
      alert('Please fill in your delivery address and phone number.');
      return;
    }

    const orderDetails = {
      cartItems,
      total: calculateTotal(),
      currency,
      deliveryAddress,
      phoneNumber,
      paymentMethod,
    };

    if (paymentMethod === 'bank') {
      alert(`Transfer to the bank account shown below.\n\nOrder Summary:\n${JSON.stringify(orderDetails, null, 2)}`);
    } else if (paymentMethod === 'cod') {
      alert(`Order placed with Cash Payment (Pay on Delivery).\n\nDetails:\n${JSON.stringify(orderDetails, null, 2)}`);
    } else {
      if (currency === 'NGN') {
        alert('Redirecting to Paystack...');
      } else {
        alert('Redirecting to Stripe...');
      }
    }
  };

  return (
    <div className="max-w-xl p-6 mx-auto bg-white rounded shadow" data-aos="fade-up">
      <h1 className="mb-4 text-2xl font-bold" data-aos="fade-down">Checkout</h1>

      {/* Currency selection */}
      <div className="mb-4" data-aos="fade-right">
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

      {/* Payment method selection */}
      <div className="mb-4" data-aos="fade-left">
        <label className="mr-2 font-medium">Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="p-1 border rounded"
        >
          <option value="online">Online (Paystack / Stripe)</option>
          <option value="bank">Bank Transfer</option>
          <option value="cod">Cash Payment (Pay on Delivery)</option>
        </select>
      </div>

      {/* Delivery address */}
      <div className="mb-4" data-aos="zoom-in">
        <label className="block mb-1 font-medium">Delivery Address:</label>
        <textarea
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Enter delivery address"
        />
      </div>

      {/* Phone number */}
      <div className="mb-4" data-aos="zoom-in-up">
        <label className="block mb-1 font-medium">Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g. 08141584744"
        />
      </div>

      {/* Order summary */}
      <div className="mb-4" data-aos="fade-up">
        <h2 className="text-lg font-semibold">Order Summary:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.title} × {item.quantity}</span>
              <span>{formatPrice(currency === 'USD'
                ? item.price * item.quantity
                : item.price * item.quantity * exchangeRate)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>Total:</span>
          <span>{formatPrice(calculateTotal())}</span>
        </div>
      </div>

      {/* Bank transfer info */}
      {paymentMethod === 'bank' && (
        <div className="p-4 mb-4 bg-gray-100 border rounded" data-aos="fade-left">
          <h3 className="mb-2 text-lg font-semibold">Bank Transfer Details</h3>
          <p><strong>Bank Name:</strong> Zenith Bank</p>
          <p><strong>Account Name:</strong> Muhammed akanbi </p>
          <p><strong>Account Number:</strong> 4268231354</p>
          <p className="mt-2 text-sm text-gray-600">
            After payment, send proof of transfer to <strong>orders@yourdomain.com</strong> or WhatsApp 08141584744.
          </p>
        </div>
      )}

      {/* Cash on delivery info */}
      {paymentMethod === 'cod' && (
        <div className="p-4 mb-4 border rounded bg-yellow-50" data-aos="fade-right">
          <h3 className="mb-2 text-lg font-semibold">Cash Payment</h3>
          <p>You chose to pay with cash upon delivery.</p>
          <p className="mt-1 text-sm text-gray-600">
            Please ensure someone is available at the delivery location to receive the package and pay in cash.
          </p>
        </div>
      )}

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        className="w-full py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
        
      >
        {paymentMethod === 'bank'
          ? 'Place Order (Bank Transfer)'
          : paymentMethod === 'cod'
            ? 'Place Order (Cash Payment)'
            : `Pay with ${currency === 'NGN' ? 'Paystack (₦)' : 'Stripe ($)'}`}
      </button>
    </div>
  );
};

export default PaymentPage;

