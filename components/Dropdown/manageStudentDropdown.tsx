"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { Check } from "lucide-react";
import { AllClass } from '@/schema/class';

type ManageStudentDropdownProps = {
    selectedClass?: string ;
    setSelectedClass: (preValue:string ) => void ;
    setSelectedRoom: (classIndex : number) => void;
    listobject : string[];
    setRoom: (preValue:string[]) => void;
}
const ManageStudentDropdown = ({
    listobject , 
    setSelectedClass , 
    selectedClass,
    setRoom,
    setSelectedRoom
}:ManageStudentDropdownProps) => {
    
    return (
        <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <div className=' w-full font-sans'>
                <input type="text" className=' w-full rounded-md py-2 px-3 border border-gray-400' value={selectedClass} readOnly/>
            </div></DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-2xl rounded-lg mt-2"
         style={{ boxShadow: '4px -4px 10px rgba(0,0,0,0.1)' }}>
        <div className='p-1 bg-white shadow-lg rounded-lg max-h-[150px] overflow-auto'>
            {listobject.map((value, index) => (
                <DropdownMenuItem
                key={index}
                onSelect={() => {
                    setSelectedClass(value);
                    setRoom(AllClass[value]);
                    setSelectedRoom(-1);
                    }
                }
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-500 hover:text-white"
                >
                    {selectedClass === value ? (
                        <Check className="w-4 h-4 text-blue-500" />
                    ) : (
                        <span className="w-4 h-4" /> // placeholder to align text
                    )}
                    {value}
                    </DropdownMenuItem>
                    ))}
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
    );
}

export default ManageStudentDropdown;
