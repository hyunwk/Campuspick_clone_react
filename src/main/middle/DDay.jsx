import React from 'react'

export default function DDay(props) {
    const dDayStyle = {
        color: "#0aafdf",
        float: "right",
        display: "block",
        marginLeft: "8px",
        lineHeight: "20px",
        letterSpacing: "0",
        fontSize: "12px",
        fontWeight: "bold",
    }
    return (
        <span style={dDayStyle}>
            D-{props.dDay}
        </span>
    )
}
