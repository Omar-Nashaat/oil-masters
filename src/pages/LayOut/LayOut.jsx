import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const LayOut = () => {
    return (
        <>
            <Nav />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default LayOut