import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ImageEffect from './ImageEffect';
import Packages from './Packages';
import Services from './Services';
import WhyUs from './WhyUs';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WhyUs></WhyUs>
           <h1 className='text-center text-5xl font-mono py-10'>Our Services</h1>
           <Services></Services>
           <h1 className='text-5xl font-mono text-center leading-tight py-10'>You will get best price from us never compromising quality</h1>
           <hr className='border-dashed border-2  border-teal-600 mx-60' />
           <Packages></Packages>
           <ContactUs></ContactUs>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;