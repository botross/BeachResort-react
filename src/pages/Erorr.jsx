import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
function Erorr() {
    return (
        <Hero styeling={"defaultHero"} >
            <Banner title="404" subtitle="Page is not found" >
                <Link to="/">
                    <button className='btn-primary'>
                        Return to Home
                    </button>
                </Link>
            </Banner>
        </Hero>
    )
}

export default Erorr
