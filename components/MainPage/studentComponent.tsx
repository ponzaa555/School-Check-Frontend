import { Student } from '@/schema/user';
import React from 'react';

type StudentProps = {
    index : number
    Student : Student
}

const StudentComponent = ({index, Student}:StudentProps) => {
    return (
        <div className=' py-2 px-2 bg-gray-50 border border-gray-200 rounded-md '>
            <p className=' font-bold text-black text-md'>{index+1} {Student.StudnetName}</p>
            {/* attend and absence button  */}
            <div className=' flex space-x-2 mt-2 w-full text-sm font-bold'>
                <button className=' bg-green-200  text-red-700 py-1 px-3 rounded-md w-1/2'>มาเรียน</button>
                <button className=' bg-red-200  text-red-700 py-1 px-3 rounded-md w-1/2'>ขาดเรียน</button>
            </div>
            {/* late and leave button  */}
            <div className=' flex space-x-2 mt-2 w-full text-sm font-bold'>
                <button className=' bg-yellow-200  text-red-700 py-1 px-3 rounded-md w-1/2'>มาสาย</button>
                <button className=' bg-blue-200  text-blue-700 py-1 px-3 rounded-md w-1/2'>ลา</button>
            </div>
        </div>
    );
}

export default StudentComponent;
