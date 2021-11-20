import React from "react";

import Icon from '../assets/icons/ticket.svg'

export function Price({ value, comp = '', className = '' }) {
    return (
        <div className='c-label_wrapper -dl4'>
            <img src={Icon} alt='ticket' />
            <span className={`t-text -f16 -cBlack2 c-label -price ${className}`}>
                {value} <span className='t-text -f16 -cGrey c-label -priceComp'>{comp}</span>
            </span>
        </div>
    )
}