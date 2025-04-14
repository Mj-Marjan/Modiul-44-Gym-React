import React from 'react';

const PricingCard = ({Pricing}) => {
    console.log(Pricing);
    return (
        <div>
            {/* {card-header} */}
            <div className='border p-4 bg-amber-600 rounded-2xl'>
                <h1 className='text-7xl'>{Pricing.name}</h1>
                <h1 className='text-3xl'>{Pricing.price}</h1>
            </div>
            {/* {card-body} */}
            <div>
                <p>

                </p>
            </div>
        </div>
    );
};

export default PricingCard;