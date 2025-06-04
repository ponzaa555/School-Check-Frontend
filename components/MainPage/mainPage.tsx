"use client"
import React, { useEffect, useState } from 'react';
import ClassLevel from './ClassLevel/classLevel';
import SelectDay from './DayTab/selectDay';
import History from './history';
import StudentCheck from './studentCheck';
import { AllClass, AllEducationLevels } from '@/schema/class';
import { AllClassKeys} from '@/schema/class';

const MainPage = () => {
    const [selectClassLevel , setSelectClassLevel] = useState<string>("ประถม1");
    const [roomIndex , setRoomIndex] = useState<number>(0);
    const [roomInClass , setRoomInClass] = useState<string[]>(AllClass[selectClassLevel]);
    const today = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD
    const [date, setDate] = useState<string>(today);
    const [indexClassList , setIndexClassList] = React.useState<number>(0);
    const [classId , setClassId] = useState<string>("P1/1");

    useEffect(() => {
        const newClassId = AllClass[selectClassLevel][roomIndex];
        setClassId(newClassId);
        console.log("Class ID: ", newClassId);
    } , [selectClassLevel, roomIndex]);
    return (
        <div className=' space-y-6'>
            <ClassLevel 
               AllClass={AllClassKeys}
               AllRoom={roomInClass}
               roomIndex={roomIndex}
                setRoomIndex={setRoomIndex}
                setSelectLevel={setSelectClassLevel}
                selectClassLevel={selectClassLevel}
               />
            <SelectDay date={date} setDate={setDate}/>
            <StudentCheck 
            className={`${selectClassLevel}/${roomIndex+1}`}
            selectDate={date}
            classId={classId}/>
            <History/>
        </div>
    );
}

export default MainPage;
