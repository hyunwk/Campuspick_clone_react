import React from 'react'
import ViewCount from './ViewCount'
import Profile from './Profile'
import Light from './Light'
import DDay from './DDay'


export default function Item({profile, light, dDay, viewCount}) {
    console.log(profile);
    return (
        <>
            <DDay dDay={dDay} />
            <ViewCount viewCount={viewCount}/>
            <Profile profile={profile}/>
            <Light light={light}/>
        </>
    )
}