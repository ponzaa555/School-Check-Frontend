import { AttendanceStatus, AttendInfo, Student } from '@/schema/user';
import React, { useEffect, useState } from 'react';

type StudentProps = {
    index : number
    Student : Student
    updateStudentStatus : (index : number , status:AttendanceStatus , attendInfo : AttendInfo) => void
}

const StudentComponent = ({index, Student , updateStudentStatus}:StudentProps) => {
    return (
        <div className=' p-2 bg-gray-50 border border-gray-200 rounded-md w-[95%]'>
            <p className=' font-bold text-black text-md'>{index+1} {Student.StudnetName}</p>
            {/* attend and absence button  */}
            <div className=' flex space-x-2 mt-2 w-full text-sm font-bold'>
                <button 
                    className={` bg-green-300  text-red-700 py-1 px-3 rounded-md w-1/2 ${Student.AttendInfo.AttendType  === "Present" ? "opacity-100" : "opacity-50"}`}
                    onClick={() => updateStudentStatus(index, "Present" , Student.AttendInfo)}
                    >มาเรียน</button>
                <button className={`bg-red-300  text-red-700 py-1 px-3 rounded-md w-1/2 ${Student.AttendInfo.AttendType  === "Leave" ? "opacity-100" : "opacity-50"}`}
                onClick={() => updateStudentStatus(index, "Leave", Student.AttendInfo)}
                >ขาดเรียน</button>
            </div>
            {/* late and leave button  */}
            <div className=' flex space-x-2 mt-2 w-full text-sm font-bold'>
                <button className={` bg-yellow-300   text-red-700 py-1 px-3 rounded-md w-1/2 ${Student.AttendInfo.AttendType  === "Late" ? "opacity-100" : "opacity-50"}`}
                onClick={() => updateStudentStatus(index, "Late" ,Student.AttendInfo)}
                >มาสาย</button>
                <button 
                className={` bg-blue-300  text-blue-700 py-1 px-3 rounded-md w-1/2 ${Student.AttendInfo.AttendType  === "Absent" ? "opacity-100" : "opacity-50"}` }
                onClick={() => updateStudentStatus(index, "Absent" ,Student.AttendInfo)}
                >ลา</button>
            </div>
        </div>
    );
}

export default StudentComponent;
