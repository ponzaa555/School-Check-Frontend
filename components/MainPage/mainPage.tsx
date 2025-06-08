"use client"
import React, { useEffect, useState } from 'react';
import ClassLevel from './ClassLevel/classLevel';
import SelectDay from './DayTab/selectDay';
import History from './history';
import StudentCheck from './studentCheck';
import { AllClass} from '@/schema/class';
import { AllClassKeys} from '@/schema/class';
import { Student } from '@/schema/user';
import { FetchStudentAttendInfo } from '@/app/api/mainPage/studentCheck';

const MainPage = () => {
    const [selectClassLevel , setSelectClassLevel] = useState<string>("ประถม1");
    const [roomIndex , setRoomIndex] = useState<number>(0);
    const [roomInClass , setRoomInClass] = useState<string[]>(AllClass[selectClassLevel]);
    const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
    const [date, setDate] = useState<string>(today);
    const [classId , setClassId] = useState<string>(AllClass[selectClassLevel][roomIndex]);


    // studentInfo
    const [allStudent,setAllStudent]  = useState<Student[]>([])
    // fetch student function
    const  handleFetchStudent = async(classId:string) => {
        const newListStudentInfo = await FetchStudentAttendInfo(classId)
        setAllStudent(newListStudentInfo);
    }
    // select classId -> call handleFetchStudent
    const handleUpdateClassId = async(classId : string , classIndex : number) => {
        setRoomIndex(classIndex);
        await handleFetchStudent(classId);
    }
    return (
        <div className=' space-y-6'>
            <ClassLevel 
               AllClass={AllClassKeys}
               AllRoom={roomInClass}
               roomIndex={roomIndex}
               handleUpdateClassId={handleUpdateClassId}
                setSelectLevel={setSelectClassLevel}
                selectClassLevel={selectClassLevel}
               />
            <SelectDay date={date} setDate={setDate}/>
            <StudentCheck 
            className={`${selectClassLevel}/${roomIndex+1}`}
            listStudentAttend={allStudent}
            classId={classId}/>
            <History/>
        </div>
    );
}

export default MainPage;
