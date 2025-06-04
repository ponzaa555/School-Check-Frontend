"use client"
import React, { useEffect, useState } from 'react';
import StudentComponent from './studentComponent';
import { AllStudent, AttendanceStatus, AttendInfo, Student } from '@/schema/user';

type StudentCheckProps = {
    className : string;
    selectDate : string;
    classId :string
}
const StudentCheck = ({className , selectDate , classId}:StudentCheckProps) => {
    const [allStudent,setAllStudent]  = useState<Student[]>(AllStudent)
    const [changeStatus, setChangeStatus] = useState<Record<string , AttendInfo>>({});

    const UpdateStudentStatus =(index : number , status:AttendanceStatus , attendInfo : AttendInfo)=> {
        // Update student status logic here
        // For example, update the status in the database or state
        // console.log(`Updating student at index ${index} to status ${status}`);
        setAllStudent((prev) => {
            const updated = [...prev];
            updated[index] = {...updated[index], AttendInfo:{...updated[index].AttendInfo, AttendType: status}};
            return updated;
        });
        // Add the student to changeStatus
        // Check is student in changeStatus
        if(changeStatus[attendInfo.StudentId]){
            setChangeStatus((prev) => {
                const updatedChangeStatus = {...prev};
                updatedChangeStatus[attendInfo.StudentId] = {...updatedChangeStatus[attendInfo.StudentId], AttendType: status};
                return updatedChangeStatus;
            })
        }else{
            setChangeStatus((prev) => ({
                ...prev,
                [attendInfo.StudentId]: {...attendInfo, AttendType: status}
            }));
        }
        console.log("Change Status: ", changeStatus);
    }
    const UpdateAllStudentStatus = (status:AttendanceStatus) => {
        // Update all students status logic here
        // For example, update the status in the database or state
        setAllStudent((prev) => prev.map(student => ({StudnetName:student.StudnetName, AttendInfo:{...student.AttendInfo, AttendType: status}})));
        // Update changeStatus for all students
        setChangeStatus(() => {
            const updateStuend: Record<string, AttendInfo> = {};
          
            AllStudent.forEach((student) => {
              updateStuend[student.AttendInfo.StudentId] = {
                ...student.AttendInfo,
                AttendType: status,
              };
            });
            return updateStuend;
    })
    }
    const handleUpdateStatus = () => {
        console.log("All students updated to status: ", changeStatus);
    }
    useEffect(() => {
        // Fetch all student from database
        // console.log("ClassId ", classId);
        // console.log("Select Date ", selectDate);
    },[className , selectDate])
    return (
        <div className='bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]'>
            <div className=' flex justify-between items-center text-center'>
                <p className=' text-xl text-black font-bold  items-center '>{className}</p>
                {/* Button */}
                <div className=' flex space-x-2 text-white text-sm items-center'>
                    <button className=' bg-green-500 py-1 px-3 font-bold rounded-md text-[15px] items-center'
                        onClick={() => UpdateAllStudentStatus("Present")}>มาทั้งหมด</button>
                    <button className='bg-red-500 py-1 px-3 font-bold rounded-md text-[15px]'
                        onClick={() => UpdateAllStudentStatus("Leave")}>ขาดทั้งหมด</button>
                    <button className='bg-gray-500 py-1 px-3 font-bold rounded-md text-[15px]'
                        onClick={() => {
                            setAllStudent(AllStudent); // Reset to original student list
                        }}>รีเซ็ต</button>
                </div>
            </div>
            {/* Map student */}
            <div className=' grid grid-cols-4 space-x-2 space-y-2 mt-2 '>
                {
                    allStudent.map((student, index) => (
                        <StudentComponent key={index} index={index} Student={student} updateStudentStatus={UpdateStudentStatus}/>
                    ))
                }
            </div>
            {/* Save button */}
            <div className=' flex justify-end mt-4'>
                <button className=' bg-blue-500 text-white py-2 px-4 rounded-md font-bold'
                    onClick={handleUpdateStatus}>บันทึกการเปลี่ยนแปลง</button>
            </div>
        </div>
    );
}

export default StudentCheck;
