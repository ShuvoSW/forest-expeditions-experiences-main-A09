import React from 'react';
import { NavLink } from 'react-router-dom';

const NewsCards = ({ cart }) => {
    const { Image, AdventureTitle, EcoFriendlyFeatures, ShortDescription } = cart;
    return (
        <div className='' >
        
            <div className="card bg-base-100 w-96 shadow-sm ">
                <figure className="px-10 pt-10">
                    <img
                        src={Image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                
                
                
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{AdventureTitle}</h2>
                    <p>{EcoFriendlyFeatures}</p>
                    <div className="card-actions">
                        <NavLink to="/explore" className="btn btn-primary">Explore</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCards;