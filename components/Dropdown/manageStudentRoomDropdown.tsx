import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from 'react';
import { Check } from "lucide-react";

type ManageStudentRoomDropdownProps = {
    className: string;
    selectedRoom: number;
    setSelectedRoom: (preValue: number) => void;
    listobject: string[];
    setClassId : (preValue: string) => void;
}

const ManageStudentRoomDropdown = ({
    selectedRoom , 
    setSelectedRoom , 
    listobject , 
    className,
    setClassId
}:ManageStudentRoomDropdownProps) => {
    useEffect(() => {
        setInputValue("");
    },[className])
    const [inputValue , setInputValue] =  useState<string>(`${className}/${selectedRoom+1}`);
    return (
        <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <div className=' w-full font-sans'>
                <input type="text" className=' w-full rounded-md py-2 px-3 border border-gray-400' value={inputValue} readOnly/>
            </div></DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-2xl rounded-lg mt-2"
         style={{ boxShadow: '4px -4px 10px rgba(0,0,0,0.1)' }}>
        <div className='p-1 bg-white shadow-lg rounded-lg max-h-[150px] overflow-auto'>
            {listobject.map((value, index) => (
                <DropdownMenuItem
                key={index}
                onSelect={() => {
                    setSelectedRoom(index)
                    setClassId(value);
                    setInputValue(`${className}/${index+1}`) // Update input value when a room is selected
                    // Call Api for update student room
                }}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                >
                    {selectedRoom === index ? (
                        <Check className="w-4 h-4 text-blue-500" />
                    ) : (
                        <span className="w-4 h-4" /> // placeholder to align text
                    )}
                    {className}/{index+1}
                    </DropdownMenuItem>
                    ))}
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
    );
}

export default ManageStudentRoomDropdown;
