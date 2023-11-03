import React from 'react';
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaPaypal, FaApplePay } from 'react-icons/fa';
import { SiKlarna } from 'react-icons/si';
import './icons.css';

const PaymentIcons = () => {
  return (
    <div className="icon-container">
      <div className="icon-item">
        <FaCcAmex className="icon amex" />
      </div>
      <div className="icon-item">
        <FaCcMastercard className="icon mastercard" />
      </div>
      <div className="icon-item">
        <FaCcVisa className="icon visa" />
      </div>
      <div className="icon-item">
        <SiKlarna className="icon klarna" />
      </div>
      <div className="icon-item">
        <FaPaypal className="icon paypal" />
      </div>
      <div className="icon-item">
        <FaApplePay className="icon apple-pay" />
      </div>
    </div>
  );
};

export default PaymentIcons;
