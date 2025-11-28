import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header/Nav_Bar';
import Footer from './Components/Footer/Footer';

const BaseLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Fixed Header */}
            <Header />

            {/* Scrollable content */}
            <main className="flex-1 overflow-auto pt-16">
                <Outlet />
            </main>

            {/* Footer at bottom */}
            <Footer />
        </div>
    );
};

export default BaseLayout;
