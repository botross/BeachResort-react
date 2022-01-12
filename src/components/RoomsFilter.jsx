import React from 'react'
import Banner from './Banner';
import Hero from './Hero';
import {MyContext} from "../App"
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function RoomsFilter() {
    const {Filterr} = useContext (MyContext);

    return (
        <>
        <Hero styeling={"roomsHero"} >
            <Banner title="Filter rooms"  >
            <Link to="/">
                <button className='btn-primary'>
                    Return home
                </button>
            </Link>
        </Banner>
        </Hero>
        <section className="filter-container">


            <form className="filter-form">
            
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select
                name="type"
                id="type"
                onChange={(e) => Filterr(e.target.value)}
                className="form-control"
                >
                <option value="all">All</option>
                <option value="single">single</option>
                <option value="double">double</option>
                <option value="family">family</option>
                <option value="presidential">presidential</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="capacity">Breakfast</label>
                <select
                name="capacity"
                id="capacity"
                onChange={(e) => Filterr(e.target.value)}
                className="form-control"
                
                >
                        <option value="all" ></option>
                        <option value="true">included</option>
                        <option value="false">Not included</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="capacity">Pets</label>
                <select
                name="capacity"
                id="capacity"
                onChange={(e) => Filterr(e.target.value)}
                className="form-control"
                >
                        <option value="all" ></option>
                        <option value="true">Allowed</option>
                        <option value="false">Not Allowed</option>
                </select>
            </div>
            </form>
        </section>
        </>
    )
}

export default RoomsFilter
