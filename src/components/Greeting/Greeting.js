import React from 'react'
import UserGreeting from './UserGreeting'
import GusetGreeting from './GuestGreeting'

export default function Greeting ( props ) {
    const isLoggedIn = props.isLoggedIn;

    if ( isLoggedIn ) {
        return <UserGreeting/>
    }

    return <GusetGreeting/>
}