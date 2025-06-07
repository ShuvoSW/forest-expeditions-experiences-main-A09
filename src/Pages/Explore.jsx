// import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';
import { useLoaderData } from 'react-router-dom';

const Explore = () => {

    const data = useLoaderData();
    const news = data;
    console.log(news);

    // const [cart, setCart] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setCart(data));
    // }, [])

    return (
        <div className='w-10/12 mx-auto mt-4'>
            {/* {
                cart.map(cart => <ExploreCard key={cart.ID} cart={cart}></ExploreCard>)
            } */}
            {news.ID}
        </div>
    );
};

export default Explore;