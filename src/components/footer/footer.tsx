import React from 'react'

const Footer = () => {
    return (
        <div className='my-16 mx-auto h-fit-content flex-col flex w-full gap-2'>
            <div className='w-full h-[40vh] bg-black text-white flex gap-10 flex-row items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-8 w-full h-full'>
                    <div className='text-xl font-bold tracking-[8px]'>NEXT WHAT ?</div>
                    <button className="p-2  w-[180px] bg-white text-black rounded-xl uppercase font-semibold text-sm">
                        sign up
                    </button>
                </div>
                <div className='border w-0 h-2/3'></div>
                <div className='flex flex-col items-center justify-center gap-8 w-full h-full'>
                    <div className='text-xl font-bold tracking-[8px]'>FOLLOW ON</div>
                    <button className="p-2  w-[180px] bg-white text-black rounded-xl uppercase font-semibold text-sm">
                        sign up
                    </button>
                </div>
            </div>
            <div className='w-full py-1 h-full bg-black flex items-center gap-4 justify-center text-sm  text-white'>
                <div className='uppercase font-semibold text-xs'>mail: </div>
                <div className='tracking-[3px] text-xs text-greyText'>dulguunpuntsag@gmail.com</div>
            </div>
            <div className='w-full h-[100px] flex flex-row justify-center gap-10 pt-5'>
                <div>About</div>
                <div>Disclaimer</div>
                <div>Privacy Policy</div>
                <div>Terms and Condition</div>
            </div>
            <div className='w-full h-auto flex justify-center items-center'>
                © 2024 by Duuk.
            </div>
        </div>
    )
}

export default Footer