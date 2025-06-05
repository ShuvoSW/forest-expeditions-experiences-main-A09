import moment from 'moment';

const Header = () => {
    
    return (
        <div >
            <div className="flex flex-col justify-center items-center gap-2 py-2">
                <h2 className='text-2xl font-semibold'>Forest Expeditions Experiences </h2>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;