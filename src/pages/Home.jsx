import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Featuerd from '../components/Featuerd';
function Home() {
    return (
        <>
        <Hero styeling={"defaultHero"} >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" >
                <Link to="/Rooms">
                    <button className='btn-primary'>
                        Our Rooms
                    </button>
                </Link>
            </Banner>
        </Hero>
        <Services /> 
        <Featuerd /> 
        </>
    )
}

export default Home
