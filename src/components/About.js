import React from 'react'
import './about.css'
import Frame19 from './assets/Frame 19.png'
import Frame20 from './assets/Frame 20.png'
import Frame6 from './assets/Frame 6.png'
import Frame7 from './assets/Frame 7.png'
import Union1 from './assets/Union (1).png'
import Union from './assets/Union.png'
import { GoDotFill } from "react-icons/go";

export default function About() {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="about_kriti">
                     <GoDotFill /> About Kriti
                    </div>
                    <div className="big_heading">
                        IIT Guwahati's Premier Inter-Hostel Tech & Management Fest
                    </div>
                    <div className="desc">
                        An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.
                    </div>
                </div>
                <div className="right">
                    {/* <div className="top_rectangle">
                        <img src={Frame19} className='Frame19' alt="no_preview" />
                        <img src={Frame6} className='Frame6' alt="no_preview" />
                    </div>
                    <div className="below_rectangle">
                        <img src={Frame20} className='Frame20' alt="no_preview" />
                        <img src={Frame7} className='Frame7' alt="no_preview" />
                    </div> */}
                    <img src={Frame19} className='Frame19' alt="no_preview" />
                    <img src={Frame6} className='Frame6' alt="no_preview" />
                    <img src={Frame20} className='Frame20' alt="no_preview" />
                    <img src={Frame7} className='Frame7' alt="no_preview" />
                    <img src={Union1} className='Union1' alt="no_preview" />
                    <img src={Union} className='Union' alt="no_preview" />

                </div>
            </div>
        </>
    )
}