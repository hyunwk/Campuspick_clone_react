import React from 'react'

export default function Light(props) {
    const lightStyle={
        marginTop: "4px",
        color: "#4c4c4c",
        fontSize: "14px",
    }
    return (
        <>
            <h3 style={lightStyle}>{props.light}</h3>
        </>
    )
}
