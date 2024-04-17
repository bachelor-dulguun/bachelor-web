import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
    return (
        <div className='w-full h-[48px] fixed top-0 bg-white border-b-2'>
            <div className='w-full h-full flex items-center gap-5 justify-center'>
                <div>Home</div>
                <div>Pricing</div>
            </div>
        </div>
    )
}

export default Header