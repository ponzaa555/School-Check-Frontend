import React from 'react';
import StudentComponent from './studentComponent';
import { AllStudent } from '@/schema/user';

const StudentCheck = () => {
    return (
        <div className='bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]'>
            <div className=' flex justify-between items-center text-center'>
                <p className=' text-xl text-black font-bold  items-center '>เช็คชื่อนักเรียนชั้น ป.4</p>
                {/* Button */}
                <div className=' flex space-x-2 text-white text-sm items-center'>
                    <button className=' bg-green-500 py-1 px-3 font-bold rounded-md text-[15px] items-center'>มาทั้งหมด</button>
                    <button className='bg-red-500 py-1 px-3 font-bold rounded-md text-[15px]'>ขาดทั้งหมด</button>
                    <button className='bg-gray-500 py-1 px-3 font-bold rounded-md text-[15px]'>รีเซ็ต</button>
                </div>
            </div>
            {/* Map student */}
            <div className=' grid grid-cols-4 space-x-2 space-y-2 mt-2'>
                {
                    AllStudent.map((student, index) => (
                        <StudentComponent key={index} index={index} Student={student} />
                    ))
                }
            </div>
        </div>
    );
}

export default StudentCheck;
