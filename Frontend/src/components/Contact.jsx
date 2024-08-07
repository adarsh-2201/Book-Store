import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h2 className="text-4xl mb-4 font-bold">Contact us</h2>
                <div className="flex flex-wrap justify-around items-center">
                    <div className="flex-1 max-w-md text-left p-4">
                        <h3 className="text-3xl mb-2 font-bold">Get in Touch with Us </h3>
                        <p className="font-normal text-xl">We’re here to help and answer any question you might have. Whether you need assistance with your order, have inquiries about our free courses, or just want to share your thoughts, we're all ears. Your feedback and satisfaction are our top priorities. Reach out to us, and we'll get back to you as soon as we can. Thank you for being a part of our community!</p>
                        
                    </div>
                    <div className="flex-1 max-w-md p-4">
                        <h3 className="text-3xl mb-4 font-bold">Message us</h3>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500 dark:text-black" />
                            <input type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500 dark:text-black" />
                            <input type="text" placeholder="Subject" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500  dark:text-black" />
                            <textarea placeholder="Message.." className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500  dark:text-black" rows="5"></textarea>
                            <button type="submit" className="btn btn-secondary mt-6">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
