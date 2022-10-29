import React from 'react';
import featured from '../../../assets/featured.jpg'

const FeaturedService = () => {
    return (
        <section className='featurs-service pb-0 pb-md-5 my-5 '>
            <div className='container mb-5'>
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care,on your Terms</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum praesentium quas debitis, nam doloribus. Accusamus id in cumque quam ab quibusdam temporibus laudantium.
                        </p>
                        <button className="btn btn-primary">Learn More...</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedService;