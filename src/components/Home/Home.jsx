import React from 'react';
import Blogs from './Blogs/Blogs';
import Doctors from './Doctors/Doctors';
import FeaturedService from './FeaturedService/FeaturedService';
import Header from './Header/Header'
import MakeAppoinment from './MakeAppoinment/MakeAppoinment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Shared/Footer/Footer";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;