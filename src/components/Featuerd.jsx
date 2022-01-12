import React from 'react'
import { useContext } from 'react';
import {MyContext} from "../App"
import Title from './Title';
import Loading from './Loading';
import Room from "./AllRooms"
function Featuerd() {
    const {featuredRooms , loading} = useContext (MyContext);
    console.log(featuredRooms)
    let room = featuredRooms.map((item) =>{
        return ( <Room room= {item} key={item.id} /> )})
    return (
        <>
                <section className="featured-rooms">
                    <Title content="featured rooms" />
                    <div className="featured-rooms-center">
                    {loading ? <Loading /> : room }
                    </div>
                </section>
        </>
    )
}

export default Featuerd;
