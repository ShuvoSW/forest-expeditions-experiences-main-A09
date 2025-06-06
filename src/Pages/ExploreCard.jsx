const ExploreCard = ({cart}) => {

    const {ID, ShortDescription} = cart;
    
    return (
        <div>
            {ShortDescription }
        </div>
    );
};

export default ExploreCard;