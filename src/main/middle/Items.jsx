import React, {useState} from 'react'
import Item from './Item'

export default function Items() {
    const [itemList, setItemList] = useState(
        [
            {
                profile: "파도타기",
                light: "전시 감상 동아리 파도타기 1.5기 모집",
                dDay: 6,
                viewCount: 32,
                key: 0,
            },
            {
                profile: "하늘연달",
                light: "대학생 연합 문화탐방동아리 모집",
                dDay: 2,
                viewCount: 44,
                key: 1,
            },
        ]
    )
    const itemStyle = {
        display: "block",
        padding: "16px",
        borderBottom: "1px solid #f2f2f2",
      };
    return (
        <ul>
            {itemList.map(item => {
                return (
                    <li key={item.key} style={itemStyle}>
                        <Item profile={item.profile}
                            light={item.light} 
                            dDay={item.dDay}       
                            viewCount={item.viewCount}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
