import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';

const Explore = () => {


     
            const [cart, setCart] = useState([])
           useEffect(() => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
           },[])

    return (
        <div  className='w-10/12 mx-auto mt-4'>
    {
                cart.map(cart => <ExploreCard key={cart.ID} cart={cart}></ExploreCard>)
            }
        </div>
    );
};

export default Explore;