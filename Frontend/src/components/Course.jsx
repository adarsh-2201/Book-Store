import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from "./Cards"
import { Link } from "react-router-dom"

function Course() {
    const [book,setBook]= useState([])
    useEffect(()=>{
      const getBook = async()=>{
        try {
          const res= await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data)
        } catch (error) {
          console.log(error)
        }
      };
      getBook();
    },[]);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 '>
        <div className='mt-28 items-center justify-center text-center px-4 dark:bg-slate-900 dark:text-white'>

          <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>
          Welcome to our premium section! We're delighted to offer you an exclusive range of content and features designed to enhance your experience with us. By subscribing to our membership, you'll have access to even more enriching resources, including special book selections, insightful courses, and unique perks that are just for our valued members. Thanks for joining our community and enjoy all the benefits of being a member. Thank you for being part of our journey!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
