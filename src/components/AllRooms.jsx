import React from 'react'
import {Link} from "react-router-dom"


function Room({room}) {

    const { name, slug, images, price } = room;
    //images[0] l2n kol images object fe aktr mn sora fna 3yz a3rd awl w7da
    ///rooms/${slug} 3ashan a send 7aga a catch it ba3d kda w mn 5lalha a pick eli clicked 3aleh momkn ab3t el id brdo hya hya aw name 
    // w a3ml function bta5od param w t filter 3la asaso 
    //w f ast2bl el klma eli fl url let {slug} = useParams();
    return (
        <>
        <article className="room">
            <div className="img-container">  
                <img src={images[0]} alt="single room" />  
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                        <Link to={`/rooms/${slug}`} className="btn-primary room-link"> features</Link> 
            </div>
                <p className="room-info">{name}</p>
        </article>
    </>
    )
}

export default Room
