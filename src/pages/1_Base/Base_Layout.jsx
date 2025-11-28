import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header/Nav_Bar'
import Footer from './Components/Footer/Footer'

const BaseLayout = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
            <Header />
            <main className='pt-24'>
                <Outlet />

            </main>
            <Footer />
        </div>
    )
}


export default BaseLayout