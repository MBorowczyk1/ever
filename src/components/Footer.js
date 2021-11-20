import React from "react";

import EverLogo from '../assets/icons/ever-top.svg'
import heart from '../assets/icons/heart.svg'
import powered from '../assets/images/powered.png'
import socials from '../assets/images/socials.png'

export default function Footer() {
    return (
        <div className='c-footer_wrapper -pt60 -pb100'>
            
            <div className="c-footer_header -dt25 -mb60">
                <img src={EverLogo} className="c-footer_logo" alt='logo' />
                <img src={powered} alt='powered' />
            </div>
            <div className="c-footer_navWrapper -dt16 -db16">
                <ul className="c-footer_nav">
                    <li className="c-footer_navLink t-title -f14 -cWhite">O NAS</li>
                    <li className="c-footer_navLink t-title -f14 -cWhite">FAQ</li>
                    <li className="c-footer_navLink t-title -f14 -cWhite">KONTAKT</li>
                    <li className="c-footer_navLink t-title -f14 -cWhite">REGULAMIN</li>
                    <li className="c-footer_navLink t-title -f14 -cWhite">POLITYKA PRYWATNOŚCI</li>
                </ul>
            </div>
            <div className="c-footer_footer">
            <img src={socials} alt='socials' />
            <span className="c-footer_footerText -cWhite">
                made with
                <img src={heart} alt="heart-logo" />
                Bisonic
            </span>
            </div>
        </div>
    )
}