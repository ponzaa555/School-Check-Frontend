"use client"
import { AllClass, AllClassKeys, DefultStudent, StudentInClass } from '@/schema/class';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuCheckboxItemProps, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';
import ManageStudentDropdown from './Dropdown/manageStudentDropdown';
import ManageStudentRoomDropdown from './Dropdown/manageStudentRoomDropdown';
import { StudentInfo } from '@/schema/user';
import MyDialog from './myDialog';
import UpdateUserDialog from './updateUserDialog';
import InsertStudentDialog from './InsertStudentDialog';
import { FetchStudents, SetClassIdToNoClass } from '@/app/api/User';



type Checked = DropdownMenuCheckboxItemProps["checked"]

const ManageStudnetDialogContent = () => {
    const [selectedClass, setSelectedClass] = useState<string>("ประถม1");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [rooms , setRooms] = useState<string[]>(AllClass[selectedClass]);
    const [classId , setClassId] = useState<string>(AllClass[selectedClass][selectedIndex]);
    const [students, setStudents] = useState<StudentInfo[]>([]);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [deleteStudent, setDeleteStudent] = useState<StudentInfo[]>([]);

    const fetchStudent = async(classId : string) => {
        const newStudents = await FetchStudents(classId);
        setStudents(newStudents.sort((a,b) => a.StudentNumber-b.StudentNumber));
        console.log("Fetching students for class ID: ", newStudents);
    }
    const handleDeleteStudent = (index:number) => {
        setStudents((prev) => prev.filter((_, i) => i !== index));
        console.log("Deleted student at index: ", index);
    }
    const handleAddStudentToDeleteList = (student: StudentInfo) => {
        setDeleteStudent((prev) => [...prev, student]);
    }
    const UndoDeleteStudent = (index: number) => {
        setDeleteStudent((prev) => prev.filter((_, i) => i !== index));
        console.log("Undo delete student at index: ", index);
        setStudents((prev) => [...prev, deleteStudent[index]].sort((a, b) => a.StudentNumber - b.StudentNumber));
    }
    const ChangeSelectNewClassRoom = async(classId :string , index : number) => {
        console.log("Changed class ID to: ", classId);
        setClassId(classId);
        setSelectedIndex(index);
        await fetchStudent(classId);
    }
    const handleDeleteStudentApi = async() => {
        // Call API to delete students
        if(deleteStudent.length === 0) {
            return;
        }
        const listStudentIds = deleteStudent.map(student => student.StudentId);
        await SetClassIdToNoClass(listStudentIds);
        // Fetch updated student list
        await fetchStudent(classId);
        setDeleteStudent([]);
    }
    useEffect(() => {
        setStudents([]);
    } , [selectedClass])
    return (
        <div className=' bg-white px-3 w-full space-y-3 '>
            <h1 className=' text-xl font-semibold'>จัดการรายชื่อนักเรียน </h1>
            {/* เลือกระดับชั้น */}
            <div className=' w-full'>
                <p>เลือกระดับชั้น</p>
                <ManageStudentDropdown 
                listobject={AllClassKeys} 
                setSelectedClass={setSelectedClass} 
                selectedClass={selectedClass} 
                setRoom={setRooms}
                />
            </div>
            {/* เลือกห้องเรียน */}
            <div className=' w-full'>
                <p>เลือกห้องเรียน</p>
                <ManageStudentRoomDropdown 
                    listobject={rooms} 
                    selectedRoom={selectedIndex} 
                    className={selectedClass}
                    changeSlectedRoom={ChangeSelectNewClassRoom}/>
            </div>
            {/* รายชื่อนักเรียน */}
            <div className=' w-full space-y-3'>
                <div className=' flex items-center justify-between'>
                    <p>รายชื่อนักเรียน</p>
                    <MyDialog trigger={<button className=' px-3 py-1 bg-blue-400 text-white rounded-md text-sm cursor-pointer hover:bg-blue-600'>เพิ่มนักเรียน</button>}
                    >
                        {
                            (onClose) => (
                                <InsertStudentDialog
                                onClose={onClose}
                                classId={classId}
                                fetchStudent={fetchStudent}/>
                            )
                        }
                    </MyDialog>
                    
                </div>
                <div className=" rounded-md shadow border border-gray-300 max-h-[200px] overflow-auto ">
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Student Number</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Student Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">StudentId</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Manage</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {/* Replace this with map of real data */}
                            {students.map((student, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 text-sm text-gray-800">{student.StudentNumber}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{student.StudnetFirstName} {student.StudnetLastName}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{student.StudentId}</td>
                                <td className="px-4 py-2 space-x-2">
                                <MyDialog 
                                    trigger={<button className="px-2 py-1 text-xs bg-yellow-400 text-white rounded hover:bg-yellow-500">แก้ไข</button>}
                                    halfScreen={false}
                                    >
                                         {(onClose) => (
                                                <UpdateUserDialog
                                                student={student}
                                                fetchStudent={fetchStudent}
                                                onClose={onClose}
                                                classId={classId}
                                                />
                                            )}
                                </MyDialog>
                                <button 
                                    className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => 
                                            {
                                                handleAddStudentToDeleteList(student)
                                                handleDeleteStudent(index);
                                            }
                                        }
                                >ลบ</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* ราชื่อนนักเรียนที่ลบ */}
            {
                deleteStudent.length > 0 && (
                    <div className='w-full space-y-3'>
                        <div className=' flex items-center justify-between'>
                            <p>รายชื่อนักเรียนรอลบ</p>
                        </div>
                        <div className=' rounded-md shadow border border-gray-300 max-h-[200px] overflow-auto '>
                            <table className='min-w-full divide-y divide-gray-200 '>
                                <thead className=' bg-red-200'>
                                    <tr>
                                        <th className=' px-4 py-2 text-left text-sm font-semibold text-gray-700'>Student Number</th>
                                        <th className=' px-4 py-2 text-left text-sm font-semibold text-gray-700'>Student Name</th>
                                        <th className=' px-4 py-2 text-left text-sm font-semibold text-gray-700'>Manage</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-100'>
                                    {deleteStudent.map((student , index) => (
                                        <tr key={index}>
                                             <td className="px-4 py-2 text-sm text-gray-800">{student.StudentNumber}</td>
                                             <td className="px-4 py-2 text-sm text-gray-800">{student.StudnetFirstName} {student.StudnetLastName}</td>
                                             <td className=' pl-5'>
                                                <button className='text-xs bg-gray-400 px-2 py-1 rounded-md'
                                                onClick={() => UndoDeleteStudent(index)}>ยกเลิก</button>
                                             </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> 
                    </div>
                )
            }
            {/* บันทึก Delete นักเรียน */}
            <div className=' flex justify-between'>
                <div></div>
                <button 
                    className=' text-white text-sm font-bold bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-2 rounded-md'
                    onClick={() => handleDeleteStudentApi()}
                    >
                    บันทึก
                </button>
            </div>
        </div>
    );
}

export default ManageStudnetDialogContent;
