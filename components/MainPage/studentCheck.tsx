"use client"
import React, { use, useEffect, useState } from 'react';
import StudentComponent from './studentComponent';
import { AllStudent, AttendanceStatus, AttendInfo, Student } from '@/schema/user';
import { FetchStudentAttendInfo, PostStudentAttendInfo } from '@/app/api/mainPage/studentCheck';

type StudentCheckProps = {
    className : string;
    classId :string
    listStudentAttend : Student[],
    loading : boolean
    fetchStudent : (classId:string) =>  void
}
const StudentCheck = ({className , classId , listStudentAttend ,loading , fetchStudent}:StudentCheckProps) => {
    const [loadingPage , setLoadingPage] = useState<boolean>(loading)
    const [allStudent,setAllStudent]  = useState<Student[]>(listStudentAttend)
    const [changeStatus, setChangeStatus] = useState<Record<string , AttendInfo>>({});
    const [submiteDisable , setSubmiteDisalbe] = useState<boolean>(false)

    useEffect(() => {
        setAllStudent(listStudentAttend)
        console.log({listStudentAttend})
      }, [listStudentAttend ])
    const UpdateStudentStatus =(index : number , status:AttendanceStatus , attendInfo : AttendInfo)=> {
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
        console.log({allStudent})
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
    const handleUpdateStatus = async() => {
        if(Object.keys(changeStatus).length === 0 )
        {
            return
        }
        setSubmiteDisalbe(true)
        setLoadingPage(true)
        // call post Api
        await PostStudentAttendInfo(classId , Object.values(changeStatus))
        setChangeStatus({});
        await fetchStudent(classId);
        setSubmiteDisalbe(false)
        setLoadingPage(false)
        //fetch student for update lastattendId
    }
    return (
        <>

        {loadingPage ? (
            <div className='bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]'>
                    <p className=' text-xl text-black font-bold  items-center '>{className}</p>
                <div className=' min-h-[100px] flex items-center justify-center'>
                    Loading....
                </div>
            </div>
        ): (
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
                                setAllStudent(listStudentAttend); // Reset to original student list
                                setChangeStatus({});
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
                    <button className={`bg-blue-500 text-white py-2 px-4 rounded-md font-bold ${submiteDisable ? " opacity-40" : "opacity-100"}`}
                    disabled={submiteDisable}
                        onClick={handleUpdateStatus}>บันทึกการเปลี่ยนแปลง</button>
                </div>
            </div>   
            )}
        </>

    );
}

export default StudentCheck;
