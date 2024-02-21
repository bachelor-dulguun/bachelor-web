import { NextPage } from 'next'
import React from 'react'

const LandingHome: NextPage = () => {
    return (
        <div className='w-screen overflow-hidden h-[70vh] bg-black'>
            <div className='w-full h-full flex flex-row'>
                <div className='h-full w-4/6 bg-primary flex items-center justify-around'>
                    <div></div>
                    <div className='flex text-8xl font-bold'>PROCTOR</div>
                </div>
                <div className='h-full w-2/6 flex items-center justify-around'>
                    <div className='flex text-8xl text-primary font-bold'>X</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default LandingHome