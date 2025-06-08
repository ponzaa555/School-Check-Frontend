import { UpdateStudent } from '@/app/api/User';
import { Student, StudentInfo } from '@/schema/user';
import React from 'react';

type UpdateUserDialogProps = {
    classId : string;
    fetchStudent : (classId : string) => void;
    student : StudentInfo;
    onClose : () => void;
}
const UpdateUserDialog = ({fetchStudent , student , onClose , classId}:UpdateUserDialogProps) => {
    const [formData , setFormData] = React.useState({
        studentNumber : student.StudentNumber,
        firstName : student.StudnetFirstName,
        lastName : student.StudnetLastName,
    })
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Get values from form fields using FormData
        const formData = new FormData(e.currentTarget);
        const idNumber = Number(formData.get('studentNumber') || 0);
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const studentApi:StudentInfo = {
            StudentId:student.StudentId,
            StudnetFirstName:firstName ,
            StudnetLastName : lastName,
            StudentNumber:idNumber
        }
        await UpdateStudent(studentApi);
        // Log the values
        // console.log('เลขที่:', idNumber);
        // console.log('ชื่อ-นามสกุล:', fullName + ' ' + lastName);
        // Call API to update student information

        //Add loading
        fetchStudent(classId);
        onClose();
      };
    return (
        <div className=' p-2' >
            <h1 className=' text-xl font-bold font-serif mb-5'>แก้ไขข้อมูลนักเรียน</h1>
            {/* เลขที่ */}
            <form 
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-5"
                >
                <div>
                    <p>เลขที่</p>
                    <input
                    value={student.StudentId}
                    type="number"
                    name="idNumber"
                    className="p-2 rounded-md w-full bg-gray-200 border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                    disabled
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
                        value={formData.studentNumber}
                        type="number"
                        name="studentNumber"
                        className="p-2 rounded-md w-full border border-gray-200 focus:border-blue-800 focus:outline-none focus:border-2"
                        onChange={(e) => 
                            setFormData((f) => ({...f, studentNumber : Number(e.target.value)}))
                        }
                        required
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

export default UpdateUserDialog;
