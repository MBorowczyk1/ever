import React from "react";
import { useNavigate } from "react-router";
import {  signInWithFacebook, signInWithGoogle } from "../modules/firebase";

import { ButtonPrimary, ButtonSecondary } from "./Buttons";

export default function LoginSection() {
    const navigate = useNavigate();

    return (
        <div className='c-loginSec_wrapper -pt60 -pb60'>
            <h2 className='c-loginSec_title t-title -f24 -mb18'>
                <span className='c-loginSec_title t-title -f24 -cWhite'>Zaloguj się, </span>
                aby brać udział w naszych wydarzeniach
            </h2>
            <div className="-dt12">
                <ButtonPrimary onClick={() => console.log('/login')}>
                    Kontynuuj z Newonce
                </ButtonPrimary>
                <ButtonSecondary onClick={signInWithFacebook}>
                    Kontynuuj z Facebook
                </ButtonSecondary>
                <ButtonSecondary onClick={signInWithGoogle}>
                    Kontynuuj z Google
                </ButtonSecondary>
                <ButtonSecondary onClick={() => console.log('/login')} className="-bottomBorder">
                    Kontynuuj z mailem
                </ButtonSecondary>
            </div>
        </div>
    )
}