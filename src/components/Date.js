import React from "react";
import Icon from '../assets/icons/date.svg'

export function Date ({date, className=''}) {
    return (
        <div className='c-label_wrapper  -dl4'>
            <img src={Icon} alt='ticket' />
            <span className={`t-text -f16 -cBlack2 c-label -date ${className}`}>
                {date} 
            </span>
        </div>
    )
}