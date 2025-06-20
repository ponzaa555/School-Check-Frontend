import { AddStudent } from '@/app/api/User';
import { StudentInfo } from '@/schema/user';
import React from 'react';

type  InsertStudentDialogProps = {
    onClose : () => void;
    classId : string;
    fetchStudent: (classId : string) => void;
}

const InsertStudentDialog = ({onClose , classId , fetchStudent}:InsertStudentDialogProps) => {
    const [formData , setFormData] = React.useState({
        studentId : "",
        studentNumber : 0,
        firstName : "",
        lastName : "",
    })
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Get values from form fields using FormData
        const formData = new FormData(e.currentTarget);
        const studentId = formData.get('idNumber');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const studentNumber = formData.get("StudentNumber")
        // Call API to insert student information
        const studentInfo : StudentInfo = {
            StudentNumber: Number(studentNumber),
            StudnetFirstName: firstName as string,
            StudnetLastName: lastName as string,
            StudentId: studentId as string,
        }
        await AddStudent(studentInfo , classId);
        // console.log("Response from AddStudent API: ", response.studentId);
        // Fetch students again after insertion
        await fetchStudent(classId);
        onClose(); // Close the dialog after submission
    }
    return (
        <div className=' p-2' >
            <h1 className=' text-xl font-bold font-serif mb-5'>เพิ่มรายชื่อนักเรียน</h1>
            {/* เลขที่ */}
            <form 
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-5"
                >
                <div>
                    <p>เลขประจำตัวนักเรียน</p>
                    <input
                    type="text"
                    inputMode="numeric"     // shows number pad on mobile
                    pattern="\d{5}"
                    value={formData.studentId}
                    name="idNumber"
                    className="p-2 rounded-md w-full border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                    onChange={(e) => {
                        const value = e.target.value
                        if(/^\d*$/.test(value)){
                            setFormData((f) => ({...f, studentId : value}))
                        }
                        }
                    }
                    required
                    />
                </div>
                <div className='flex space-x-2'>
                    <div className=' w-2/5'>
                        <p>ชื่อ</p>
                        <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                            setFormData((f) => ({ ...f, firstName: e.target.value }))
                        }
                        className="p-2 rounded-md w-full border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                        required
                        />
                    </div>
                    <div className='w-2/5'>
                        <p>นามสกุล</p>
                        <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        className="p-2 rounded-md w-full border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                        required
                        onChange={(e) =>
                            setFormData((f) => ({ ...f, lastName: e.target.value }))
                          }
                        />
                    </div>
                    <div className=' w-1/5'>
                        <p>เลขที่</p>
                            <input
                            type="number"
                            name="StudentNumber"
                            value={formData.studentNumber}
                            className="p-2 rounded-md w-full border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                            required
                            onChange={(e) => 
                                setFormData((f) => ({...f,studentNumber: Number(e.target.value)}))
                            }
                            />
                    </div>
                </div>

                {/* Submit and Cancel */}
                <div className="flex justify-between">
                    <div></div>
                    <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className="text-md bg-gray-300 py-2 px-3 rounded-md cursor-pointer hover:bg-gray-400 font-bold"
                        onClick={onClose}
                    >
                        ยกเลิก
                    </button>
                    <button
                        type="submit"
                        className="text-md bg-blue-600 py-2 px-3 rounded-md text-white cursor-pointer hover:bg-blue-700 font-bold"
                    >
                        บันทึก
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InsertStudentDialog;
