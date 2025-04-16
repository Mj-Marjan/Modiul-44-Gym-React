import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const Pricing = ({PricingPromise}) => {
    const PricingData = use(PricingPromise);
    
    return (
        <div>
            <h1 className='text-5xl'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-10'>
                {
                //    PricingData.map(Pricing => <PricingCard key={Pricing.id} Pricing={Pricing}></PricingCard>) 
                }

                {
                    PricingData.map(daisyCard => <DaisyCard key={daisyCard.id} daisyCard={daisyCard}></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;