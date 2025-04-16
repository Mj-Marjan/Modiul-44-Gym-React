import React from "react";
import FeauresPricing from "./FeauresPricing";

const PricingCard = ({ Pricing }) => {
  console.log(Pricing);
  const { name, price, description, features } = Pricing;
  return (
    <div className="flex flex-col border p-4 bg-amber-600 rounded-2xl">
      {/* {card-header} */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h1 className="text-3xl">{price}</h1>
      </div>
      {/* {card-body} */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <FeauresPricing key={index} feature={feature}></FeauresPricing>
        ))}
      </div>
      <button className="btn w-full mt-4">Suscribe</button>
    </div>
  );
};

export default PricingCard;
