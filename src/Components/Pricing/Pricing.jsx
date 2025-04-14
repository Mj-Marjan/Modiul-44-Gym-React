import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = ({PricingPromise}) => {
    const PricingData = use(PricingPromise);
    console.log(PricingData);
    return (
        <div>
            <h1 className='text-5xl'>Get Our Membership</h1>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                   PricingData.map(Pricing => <PricingCard key={Pricing.id} Pricing={Pricing}></PricingCard>) 
                }
            </div>
        </div>
    );
};

export default Pricing;