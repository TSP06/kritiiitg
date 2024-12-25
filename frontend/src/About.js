import React from 'react'
import {useRef,useEffect} from 'react'
import './about.css'
import Frame19 from './assets/Frame 19.png'
import Frame20 from './assets/Frame 20.png'
import Frame6 from './assets/Frame 6.png'
import Frame7 from './assets/Frame 7.png'
import Union1 from './assets/Union (1).png'
import Union2 from './assets/Union (2).png'

import img1 from './assets/1000122074.jpg'
import img2 from './assets/1000122075.jpg'

import img3 from './assets/1000122077.jpg'
import img4 from './assets/1000122078.jpg'
import img5 from './assets/1000122079.jpg'
import img6 from './assets/1000122080.jpg'
import img7 from './assets/1000122081.jpg'
import { GoDotFill } from "react-icons/go";

export default function About() {
    const images = [img1,img2,img3,img4,img5,img6,img7];

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1; // Scroll pixels at a time
            if (container) {
                container.scrollLeft = scrollAmount;
                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0; // Reset scroll
                }
            }
        };

        const interval = setInterval(scroll, 10); // Adjust interval speed as needed
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="container">
                <div className="bgcolor">

                </div>
                <div className="left">
                   
                    <div className="big_heading">
                  <h4>  Welcome to </h4>
                 
                  <h2>The Ultimate Tech Battle</h2>  
                    </div>
                    <div className="desc">
                    Greetings, innovators and tech enthusiasts of IIT Guwahati! We’re excited to introduce Kriti, the grand inter-hostel technical competition that showcases the spirit of innovation, collaboration, and technical brilliance.
This year, Kriti invites you to a journey across cutting-edge technologies and diverse domains, where hostels compete to claim their title as the ultimate tech powerhouse. From AI/ML and blockchain to aeromodelling, robotics, and beyond, Kriti is the stage where talent meets opportunity.

                    </div>
                </div>
                {/* 
                <div className="right">
                    {/* <div className="top_rectangle">
                        <img src={Frame19} className='Frame19' alt="no_preview" />
                        <img src={Frame6} className='Frame6' alt="no_preview" />
                    </div>
                    <div className="below_rectangle">
                        <img src={Frame20} className='Frame20' alt="no_preview" />
                        <img src={Frame7} className='Frame7' alt="no_preview" />
                    </div> 
                    <div className="imgcontainer">
                    <img src={Frame19} className='Frame19' alt="no_preview" />
                  
                    
                    <img src={Frame7} className='Frame7' alt="no_preview" />
                    <img src={Union1} className='Union1' alt="no_preview" />
                    <img src={Union2} className='Union' alt="no_preview" />
                    </div>
                </div>
                */}

               
            </div>

            <div className="imgscrollcontainer"  ref={scrollContainerRef}>
                {images.map((image, index) => (
                        <div className="imgCard" key={index}>
                            <img src={image} alt={`Frame ${index + 1}`} />
                        </div>
                    ))}

                </div>
            <div className="white-line"></div> {/* The white line */}
        </>
    )
}