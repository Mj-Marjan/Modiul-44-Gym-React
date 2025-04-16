import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const FeauresPricing = ({ feature }) => {
  return (
    <p className="flex gap-2 bg-amber-200  rounded-2xl text-black mt-4">
      <FaHandPointRight className="mr-4 text-2xl text-black" />
      {feature}
    </p>
  );
};

export default FeauresPricing;
