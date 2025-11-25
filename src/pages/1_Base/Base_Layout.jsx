import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import Header from './Components/Header/Nav_Bar'

const BaseLayout = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}


export default BaseLayout