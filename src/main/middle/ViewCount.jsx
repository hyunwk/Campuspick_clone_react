import React from 'react'

export default function ViewCount(props) {
    const viewCountStyle= {
        float: "right",
        display: "block",
        marginLeft: "8px",
        paddingLeft: "14px",
        lineHeight: "18px",
        letterSpacing: "0",
        color: "#a6a6a6",
        fontSize: "12px",
        background: "transparent url('https://www.campuspick.com/images/common/info.viewcount.png) no-repeat left center",
        backgroundSize: "12px 8px",
    }
    return (
        <span style={viewCountStyle}>
            {props.viewCount}
        </span>
    )
}
