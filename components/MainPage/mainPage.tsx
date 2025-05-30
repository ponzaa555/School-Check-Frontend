import React from 'react';
import ClassLevel from './ClassLevel/classLevel';
import SelectDay from './DayTab/selectDay';
import History from './history';
import StudentCheck from './studentCheck';

const MainPage = () => {
    return (
        <div className=' space-y-6'>
            <ClassLevel/>
            <SelectDay/>
            <StudentCheck/>
            <History/>
        </div>
    );
}

export default MainPage;
