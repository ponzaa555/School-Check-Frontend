"use client"
import React, { useState } from 'react';
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
    const [roomIndex , setRoomIndex] = useState<number>(-1);
    const [roomInClass , setRoomInClass] = useState<string[]>(AllClass[selectClassLevel]);
    const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
    const [date, setDate] = useState<string>(today);
    const [classId , setClassId] = useState<string>(AllClass[selectClassLevel][roomIndex]);
    const [loadingCheckForm , setLoadingCheckForm] = useState<boolean>(false)

    // studentInfo
    const [allStudent,setAllStudent]  = useState<Student[]>([])
    // fetch student function
    const  handleFetchStudent = async(classId:string) => {
        const newListStudentInfo = await FetchStudentAttendInfo(classId)
        setAllStudent(newListStudentInfo);
    }
    // select classId -> call handleFetchStudent
    const handleUpdateClassId = async(classId : string , classIndex : number) => {
        setClassId(classId)
        setRoomIndex(classIndex);
        setLoadingCheckForm(true)
        await handleFetchStudent(classId);
        setLoadingCheckForm(false)
    }
    // const handle set classLevel -> set room in class
    const handleSetClassLevel = async(classLevel : string) => {
        setSelectClassLevel(classLevel)
        setRoomInClass(AllClass[classLevel])
        setRoomIndex(-1)
        setAllStudent([])
    }
    return (
        <div className=' space-y-6'>
            <ClassLevel 
               AllClass={AllClassKeys}
               AllRoom={roomInClass}
               roomIndex={roomIndex}
               handleUpdateClassId={handleUpdateClassId}
               handleSetClassLevel={handleSetClassLevel}
                selectClassLevel={selectClassLevel}
               />
            <SelectDay date={date} setDate={setDate}/>
            <StudentCheck 
            className={roomIndex === -1 ?  `${selectClassLevel}`:`${selectClassLevel}/${roomIndex+1}`}
            listStudentAttend={allStudent}
            classId={classId}
            loading={loadingCheckForm}
            fetchStudent={handleFetchStudent}/>
            <History/>
        </div>
    );
}

export default MainPage;
