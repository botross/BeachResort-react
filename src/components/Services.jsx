import React from 'react'
import Title from "./Title"
import { FaWifi, FaHiking, FaShuttleVan, FaMugHot } from "react-icons/fa";

function Services() {
        let Services = [
            {
            logo :  <FaWifi /> ,
            title :"free wifi" ,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quaerat non iste sint! Cupiditate."
            },
            {
            logo :  <FaHiking />,
            title :"Hiking" ,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quaerat non iste sint! Cupiditate."
            },
                {
            logo : <FaShuttleVan />,
            title :"Shuttle Van" ,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quaerat non iste sint! Cupiditate."
            },
            {
            logo :  <FaMugHot />,
            title :"free drinks" ,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quaerat non iste sint! Cupiditate."
            }

    ]



    return (
        <section className='services'>
            <Title content="Services" />
            <div className="services-center">
            {Services.map((item , index) =>{
                const {logo , title , text} = item;
                return (

                    
                    <article key={index} className="service">
                        <span> {logo} </span>
                        <h6> { title}</h6>
                        <p> { text } </p>
                    </article>
                )
                
            })}
                
            </div>
        </section>
    )
}

export default Services
