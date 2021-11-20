import React from "react";

import EverLogoOne from '../assets/icons/ever-bottom.svg'
import EverLogoTwo from '../assets/icons/ever-mid.svg'
import EverLogoThree from '../assets/icons/ever-top.svg'
import { TopNavi1 } from "./TopNavi";

export function Hero() {
    return (
        <div className='c-hero -pt48'>
            <TopNavi1 />
            <h2 className='t-title -f20 -cWhite -mb18'>
                <span className='t-title -f20 -cPurple'>Ev</span>
                enty muzyczne.<br />
                Bez bari
                <span className='t-title -f20 -cPurple'>er.</span>
            </h2>
            <div className="c-hero_logoWrapper -dt25 -mb60">
                <img src={EverLogoThree}  alt='logo'/>
                <img src={EverLogoTwo}  alt='logo'/>
                <img src={EverLogoOne}  alt='logo'/>
            </div>
            <div className="c-hero_featuresWrapper -dt16 -db16">
                <span className="c-hero_feature t-text -cWhite">Dziel się zajawką.</span>
                <div className="c-spacer"></div>
                <span className="c-hero_feature t-text -cWhite">Interakcje live</span>
                <div className="c-spacer"></div>
                <span className="c-hero_feature t-text -cWhite">Kuratela wydarzeń muzycznych.</span>
            </div>
        </div>
    )
}