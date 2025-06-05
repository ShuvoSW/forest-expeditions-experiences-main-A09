import React, { useEffect, useState } from 'react';
import NewsCards from './NewsCards';

const NewsCard = () => {

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])


    return (
        <div className=' w-full mx-auto'>

               <h2 className='text-center font-semibold text-2xl mb-4'>Adventure Experiences Section</h2>
            <div className='w-7/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-3 items-center'>

                {
                    cart.map(cart => <NewsCards key={cart.ID} cart={cart}></NewsCards>)
                }
                {/* {
                    cart.map(cart => <Cart handleAddToSelected={handleAddToSelected} key={cart.id} cart={cart}></Cart>)
                } */}
            </div>
        </div>

    );
};

export default NewsCard;