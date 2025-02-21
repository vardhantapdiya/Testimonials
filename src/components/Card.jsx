import React from 'react'

const Card = (props) => {

    let data = props.data;


    return (
        <div className='relative'>
            <div className='absolute'>
                <img src={data.image} className='w-24 h-24 rounded-full -translate-y-20 z-2' alt='N/A'/>
            </div>

            <div>
                <div className='text-center p-3'>
                    <p className='text-2xl font-bold'>{data.name}</p>
                    <p className='text-violet-500'>{data.designation}</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center p-3'>
                    <p className='text-violet-500 text-2xl'>"</p>
                    <p>{data.testimony}</p>
                    <p className='text-violet-500 text-2xl mt-2'>"</p>
                </div>
            </div>
        </div>
    )
}

export default Card
