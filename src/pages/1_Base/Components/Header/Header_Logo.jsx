import React from 'react'
import { Link } from 'react-router'

const HeaderLogo = () => {
    return (
        <>
            <Link
                to="/"
                className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-sm"
            >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-lg">S</span>
                </div>

                <span className="text-xl font-extrabold text-white">
                    StudyMate
                </span>
            </Link>
        </>
    )
}

export default HeaderLogo