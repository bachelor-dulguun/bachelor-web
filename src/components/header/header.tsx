import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => {
    const router = useRouter()
    return (
        <div className='w-full h-[48px] fixed top-0 bg-white border-b-2'>
            <div className='w-full h-full flex items-center gap-5 justify-center'>
                <div className='cursor-pointer hover:font-bold' onClick={() => void router.push('/')}>Home</div>
                <div className='cursor-pointer hover:font-bold' onClick={() => void router.push('/')}>Exams</div>
            </div>
        </div>
    )
}

export default Header