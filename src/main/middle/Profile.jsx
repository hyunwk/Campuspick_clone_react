import React from 'react'

export default function Profile(props) {
    const profileStyle = {
        display: "inline-block",
        maxWidth: "70%",
        lineHeight: "20px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#292929",
        fontSize: "14px",
        fontWeight: "bold",

    }
    return (
            <span style={profileStyle}>{props.profile}</span>
    )
}
