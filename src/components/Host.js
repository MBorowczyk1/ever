import React from "react";
import Icon from '../assets/icons/host.svg'

export function Host ({name, className=''}) {
    return (
        <div className='c-label_wrapper -dl4'>
        <img src={Icon} alt='ticket' />
        <span className={`t-text -f16 -cBlack2 c-label -host ${className}`}>
            {name} 
        </span>
    </div>
    )
}