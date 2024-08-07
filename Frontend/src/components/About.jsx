import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                <div className='order-2 md:order-1 w-full md:w-1/2 mt-6 md:mt-16'>
                    <div className='space-y-12 mr-2'>
                        <h1 className='text-4xl font-bold '>
                            What is <span className='text-pink-500'>BookStore!!!</span>?
                        </h1>
                        <p className='text-xl'>
                            Welcome to our online bookstore, a heaven for book lovers and knowledge seekers alike! Our mission is to foster a love for reading and learning by offering a diverse collection of books that cater to all tastes and interests. From timeless classics to contemporary bestsellers, our carefully curated selection ensures that there is something for everyone.
                        </p>
                        <p className='text-xl'>
                            But we are more than just a bookstore. We believe in the power of continuous learning and personal growth. That's why we offer a range of free courses designed to expand your horizons and deepen your understanding of various subjects. Whether you're looking to dive into a new hobby, enhance your professional skills, or simply satisfy your curiosity, our courses are here to support your journey.
                        </p>
                        <p className='text-xl'>
                            Our community is built on a shared passion for literature and learning.  We are committed to providing exceptional service and a seamless online shopping experience, ensuring that your time with us is enjoyable and enriching.

                            Thank you for choosing our online bookstore. We are excited to be a part of your reading and learning adventures. Happy exploring!
                        </p>
                    </div>
                </div>
                <div className='order-1 w-full md:w-1/2 mt-12 md:mt-32'>
                    <img src="../../public/Banner.jpg" alt="banner" className='w-92 h-92 ' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
