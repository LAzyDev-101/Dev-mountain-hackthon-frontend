import React from 'react'

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div className="rounded animate-spin ease duration-300 w-5 h-5 border-2 border-white"></div>
            <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        </div>
    )
}

export default Loading
