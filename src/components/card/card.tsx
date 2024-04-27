import React, { FunctionComponent } from 'react'

interface Prop {
    title?: string
    options?: Array<{
        option: string
        value: string
        rightOne: boolean
    }>
}

const Card: FunctionComponent<Prop> = (props) => {
    const handler = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <div className='h-auto flex border flex-col items-start p-3 gap-3 px-5'>
            <div className='text-md font-bold'>{props.title}</div>
            {
                props.options?.map((option, index) => {
                    return (
                        <div key={index} className='flex flex-row items-center gap-3'>
                            <input type='radio' name={props.title} value={option.value} onChange={handler} />
                            <div>{option.option}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card
