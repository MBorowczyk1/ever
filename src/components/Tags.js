import React from "react";


export function TagPrimary ({children, className=''}) {
    return (
        <span className={`c-tag t-text -f12 -primary ${className}`}>
            {children}
        </span>
    )
}
export function TagSecondary ({children, className=''}) {
    return (
        <span className={`c-tag t-text -f12 -secondary ${className}`}>
            {children}
        </span>
    )
}