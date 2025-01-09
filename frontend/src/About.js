import React, { useRef, useEffect, useState } from 'react';
import './about.css';
import Kritilogo from './assets/KRITI logo.png';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpg';

export default function About() {
    const images = [img1, img2, img3, img4, img5];

    const scrollContainerRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0); // Track the scrolling offset

    const scrollSmoothly = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setScrollAmount(prev => prev + 1);
            container.scrollLeft = scrollAmount;

            if (scrollAmount >= container.scrollWidth / 2) {
                setScrollAmount(0); // Reset back to the start after half the total width is scrolled
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollSmoothly, 10); // Adjust interval speed as needed

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [scrollAmount]);

    return (
        <>
            <div className="container">
                <div className="bgcolor"></div>
                <div className="leftright">
                    <div className="left">
                        <div className="big_heading">
                            <h4>Welcome to</h4>
                            <h2>The Ultimate Tech Battle</h2>
                        </div>
                        <div className="desc">
                            Greetings, innovators and tech enthusiasts of IIT Guwahati! We’re excited to introduce Kriti, the grand inter-hostel technical competition that showcases the spirit of innovation, collaboration, and technical brilliance.
                            This year, Kriti invites you to a journey across cutting-edge technologies and diverse domains, where hostels compete to claim their title as the ultimate tech powerhouse. From AI/ML and blockchain to aeromodelling, robotics, and beyond, Kriti is the stage where talent meets opportunity.
                        </div>
                    </div>

                    <div className="right">
                        <div className="rightimg">
                            <img src={Kritilogo} className="kritilogoimg" alt="Kriti Logo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="imgscrollcontainer" ref={scrollContainerRef}>
                {/* Duplicate images to make smooth, continuous scroll */}
                {[...images, ...images].map((image, index) => (
                    <div className="imgCard" key={index}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="white-line"></div>
        </>
    );
}
