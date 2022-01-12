import React from 'react'

function Hero({styeling , children}) {
    return (
        <div className={styeling}>
            {children}
        </div>
    )
}
Hero.defaultProps = {
    styeling: "defaultHero"
};

export default Hero
