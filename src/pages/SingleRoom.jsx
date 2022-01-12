import React from 'react'
import { useContext } from 'react';
import {MyContext} from "../App"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react"
import {useParams} from "react-router-dom";
import StyledHero from "../components/StyledHero"

function SingleRoom() {

    const {getSlugRoom , loading} = useContext (MyContext);
    let [SlugFilterd,SetSlugFilterd] = useState()
    let [Rooms,SetRooms] = useState()
    const { slug } = useParams();

    useEffect(()=>{
        let SlugFilterd = getSlugRoom(slug)
        SetSlugFilterd(SlugFilterd)


        let Rooms = SlugFilterd.map((item , index) => {
            return(

            <>  
            <StyledHero styeling={item.images[0]} >
                    <Banner title = {` ${item.name} Room `}   >
                        <Link to="/">
                            <button className='btn-primary'>
                                Return to Home
                            </button>
                        </Link>
                    </Banner>
            </StyledHero>
        <section className="single-room" key={index}>
                        <div className="single-room-images">
                            {item.images.map((item, index) => (
                            <img key={index} src={item} alt={item.name} />
                            ))}
                        </div>
                <div className="single-room-info">
                        <article className="desc">
                                <h3>details</h3>
                                <p>{item.description}</p>
                        </article>
                        <article className="info">
                                <h3>info</h3>
                                <h6>price : ${item.price}</h6>
                                <h6>size : {item.size} SQFT</h6>
                                <h6>
                                    max capacity :
                                    {item.capacity > 1 ? `${item.capacity} people` : `${item.capacity} person`}
                                </h6>
                                <h6>{item.pets ? "pets allowed" : "no pets allowed"}</h6>
                                <h6>{item.breakfast && "free breakfast included"}</h6>
                        </article>
                </div>
        </section>
        <section className="room-extras">
            <h6>extras </h6>
            <ul className="extras">
                {item.extras.map((mslan, index) => (
                <li key={index}>- {mslan}</li>
                ))}
            </ul>
        </section> 
        </>

        )})
        SetRooms(Rooms)
        console.log(slug)
    },[loading])
    
    return (
        <>
            {Rooms}
        </>
    )
}

export default SingleRoom
