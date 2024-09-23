import React from 'react';


const About = ({padding}) => {
    return (
        <section
            className={`relative flex justify-center flex-col z-20 py-[120px] md:py-[${padding}] sm:py-[80px] sm:pt-[60px] `}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-x-4 items-center">
                    <div className="md:col-span-6 col-span-12">
                        <div className="orico-about-text-wrap 111">
                            <div className="orico-about-text">
                                <span
                                    className="text-xl font-heading-font inline-block mb-1 font-normal underline text-[#F78914]">“ABOUT
                                    US”</span>
                                <h2 className="text-4xl font-normal font-heading-font mb-5 lg:text-4xl sm:text-3xl">Explore the Intersection of Anthropometric Data and Food Databases.</h2>
                                <p className="mb-5">Foodimetric is an important tool for both nutrition professionals and general public to identify nutrient composition of foods and their level of safety. </p>
                                <ul className="mb-8 flex col:block">
                                    <li className="py-1 relative pl-6 font-semibold inline-block text-base  text-[#687693]">
                                        <i className="absolute left-0 top-1">
                                            <img src="assets/images/about/4.png" alt="" />
                                        </i>
                                        <p>It presents data of different foods around Nigeria .</p>
                                    </li>
                                    <li className="py-1 relative pl-6 font-semibold inline-block text-base  text-[#687693]">
                                        <i className="absolute left-0 top-1">
                                            <img src="assets/images/about/5.png" alt="" />
                                        </i>
                                        <p>It presents data of different foods around West Africa.</p>
                                    </li>
                                </ul>
                                <a className="theme-btn bg-[#ffba08] hover:bg-[#f78914ee]" href="about.html">Get In
                                    Touch</a>

                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="md:pl-12 pl-0 md:mt-14">
                            <div className="relative z-10 w-full p-5 col:p-2 border border-[#f7891470] ">
                                <div>
                                    <img src="assets/images/about/ab.jpg" alt="" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-[40px] top-1/2 -translate-y-1/2 -z-10 xl:hidden "><img
                src="assets/images/about/2.png" alt="" /></div>
            <div className="absolute right-[40px] top-1/2 -translate-y-1/2 -z-10 xl:hidden"><img
                src="assets/images/about/3.png" alt="" /></div>
        </section>
    );
}

export default About;