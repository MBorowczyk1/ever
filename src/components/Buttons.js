import React from "react";


export function ButtonPrimary ({children, onClick, className=''}) {
    return (
        <button onClick={() => onClick()} className={`c-btn -primary ${className}`}>
            {children}
        </button>
    )
}
export function ButtonSecondary ({children, onClick, className=''}) {
    return (
        <button onClick={() => onClick()} className={`c-btn -secondary ${className}`}>
            {children}
        </button>
    )
}
export function ButtonTertiary ({children, onClick, className=''}) {
    return (
        <button onClick={() => onClick()} className={`c-btn -tertiary ${className}`}>
            {children}
        </button>
    )
}