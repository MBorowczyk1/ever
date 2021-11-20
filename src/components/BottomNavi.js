import React, { useState } from "react";

import people from '../assets/icons/people.svg'
import search from '../assets/icons/search.svg'
import ticket from '../assets/icons/ticket-grey.svg'


export default function BottomNAvi() {
    const [show, setShow] = useState(0)

    useState(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
              let currentScrollPos = window.pageYOffset;
              if(currentScrollPos > 200) {
                setShow(currentScrollPos)
              }
              if(currentScrollPos < 200) {
                setShow(0)
              }
            }
        }
    }, [])
    return (
        <div className={`c-bottomNavi ${show ? '' : 'd-none'}`}>
            <div className="c-bottomNavi_tab">
                <img src={ticket} alt="" />
                <span>Moje eventy</span>
            </div>
            <div className="c-bottomNavi_tab -active">
                <img src={search} alt="" />
                <span className="-cPurple">Odkrywaj</span>
            </div>
            <div className="c-bottomNavi_tab">
                <img src={people} alt="" />
                <span>Społeczność</span>
            </div>
        </div>
    )
}