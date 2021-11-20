import React from "react";

export function Input ({ type, value, setValue, className=''}) {
    return (
        <input type={type} value={value} onChange={(e) => setValue(e)} className={`c-btn -primary ${className}`} />
    )
}