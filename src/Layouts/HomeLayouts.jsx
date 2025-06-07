import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const HomeLayouts = () => {
    return (
        <div  className='font-poppins'>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section>
                <Banner></Banner>
            </section>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;