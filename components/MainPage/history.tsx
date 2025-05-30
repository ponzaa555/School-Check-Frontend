import React from 'react';
import { AllHistory } from '@/schema/history';
const History = () => {
    return (
        <div className='bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]'>
            <p className=' text-xl text-black font-bold mb-2'>สถิติการมาเรียน</p>
            {/* Table */}
            <table className=' text-black w-full border-collapse border-1 border-gray-200'>
                <thead>
                    <tr>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>ระดับชั้น</th>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>จำนวนนักเรียน</th>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>มาเรียน</th>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>ขาดเรียน</th>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>มาสาย</th>
                        <th scope="col" className=' border-r  py-2 px-3 bg-gray-100 border-gray-200'>ลา</th>
                        <th scope="col" className=' border-r p-2 bg-gray-100 border-gray-200'>เปอร์เซ็นต์การมาเรียน</th>
                    </tr>
                </thead>
                <tbody className='border-r border-gray-200'>
                    {
                        AllHistory.map((item , index) => (
                            <tr key={index}>
                                <td scope='row' className='p-3 border border-gray-200 '>{item.EducationLevel}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.StudentCount}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.AttendanceCount}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.AbsenceCount}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.LateCount}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.LeaveCount}</td>
                                <td className='p-3 text-center border border-gray-200 '>{item.AttendancePercentage}%</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default History;
