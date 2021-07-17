import React, { useEffect, useRef, useState } from 'react'
import AnimateOnChange from 'react-animate-on-change'

import './CounterCard.css'

const CounterCard = ({ counterNumber, counterText }) => {

    const previousValueRef = useRef(counterNumber);

    useEffect(() => {
        previousValueRef.current = counterNumber;
    }, [counterNumber, previousValueRef.current])

    return (
        <div className="counter-card-group">
            <div className="counter-card">
                <AnimateOnChange baseClassName="card-upper" animationClassName="card-flip"
                    animate={counterNumber !== previousValueRef.current} />
                <AnimateOnChange baseClassName="card-lower" animationClassName="card-flip"
                    animate={counterNumber !== previousValueRef.current} />
                <p className="counter-number">{counterNumber}</p>
                <AnimateOnChange baseClassName="card-upper cardoverlay" animationClassName="card-flip"
                    animate={counterNumber !== previousValueRef.current} />
                <div className="card-point left"></div>
                <div className="card-point right"></div>
            </div>
            <div className="counter-text" >
                {counterText}
            </div>
        </div>
    )
}

export default CounterCard
