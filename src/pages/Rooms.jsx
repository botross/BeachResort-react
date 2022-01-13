import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Room from '../components/AllRooms';
import { useContext } from 'react';
import {MyContext} from "../App"
import Loading from '../components/Loading';
import Title from '../components/Title';
function Rooms() {
    const {rooms , loading} = useContext (MyContext);

    let mainRooms = rooms.map((item , index) => {
        return  <Room  room={item} key={index} />

    })
    return (
        <>
        <Hero styeling={"roomsHero"} >
            <Banner title="Our Rooms"  >
                <Link to="/filterRooms">
                    <button className='btn-primary'>
                    Filter Rooms
                    </button>
                </Link>
            </Banner>
        </Hero>
                <section className="featured-rooms">
                    <Title content="Our Rooms" />
                    <div className="featured-rooms-center">
                    {loading ? <Loading /> : mainRooms }
                    </div>
                </section>
    
        </>
    )
}

export default Rooms
