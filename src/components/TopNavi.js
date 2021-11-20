import React from "react";

import peopleB from '../assets/icons/people-black.svg'
import peopleW from '../assets/icons/people-white.svg'
import logo from '../assets/icons/logo-black.svg'


export function TopNavi1() {
    return (
        <div className='c-topNavi -single'>
            <img src={peopleW} alt="" />
        </div>
    )
}
export function TopNavi2() {
    return (
        <div className='c-topNavi -duo'>
            <img src={logo} alt="" />
            <img src={peopleB} alt="" />
        </div>
    )
}
