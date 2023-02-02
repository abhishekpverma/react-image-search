import React from "react";

export const Sresults = (props) => {
    const img = `https://source.unsplash.com/400x400/?${props.name}`;

    return (
        <>
            <div>
                <img src={img} alt="search" />
            </div>
        </>
    )
}