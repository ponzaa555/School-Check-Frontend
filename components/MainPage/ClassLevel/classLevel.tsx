"use client";

import { getClassList } from "@/lib/Class";
import { JSX, useEffect, useState } from "react";
import { AllEducationLevels } from "@/schema/class";

interface ClassLevelProps {

}
const ClassLevel  = (params:ClassLevelProps) =>
{
    const [classList, setClassList] = useState<any[]>([]);
    const [indexClick, setIndexClick] = useState<number>(0);
    /*
    useEffect(() => {
        async function fetchClassList() {
            // check error at server
            const res = await getClassList();
            const data = await res.json();
            setClassList(data);
        }
        fetchClassList();
    },[]);
    */
    return(
        <div className=" bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]">
            {/* header */}
            <h1 className=" text-xl font-bold text-black ">เลือกระดับชั้น</h1>
            {/* map class */}
            <div className=" grid grid-cols-4 mt-5">
                {
                    AllEducationLevels?.map((item, index) => (
                        <div key={index} className={`items-center p-3 font-bold cursor-pointer
                         text-center m-2 rounded-md text-md ${indexClick === index ? " bg-blue-200 text-blue-600" : "bg-green-100 text-green-600 "}`}
                         onClick={() => setIndexClick(index)}>
                            <p>
                                {item.EducationLevel} {item.Level}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ClassLevel;