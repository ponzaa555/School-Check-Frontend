import React from 'react';

const SelectDay = () => {
    return (
        <div className='flex bg-white p-6 w-full rounded-lg justify-between text-black items-center drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]'>
            <p className=' text-xl text-black font-bold'>วันที่เช็คชื่อ</p>
            <input type="date" className=' border-1 p-2 rounded-md border-gray-200 font-sans text-md'/>
        </div>
    );
}

export default SelectDay;
