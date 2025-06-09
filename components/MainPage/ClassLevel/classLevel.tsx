"use client"

interface ClassLevelProps {
    AllClass : string[];
    AllRoom : string[];
    roomIndex : number;
    selectClassLevel: string;
    handleUpdateClassId : (classId : string , classIndex : number) => void;
    handleSetClassLevel : (classLeve : string) => void
}
const ClassLevel  = ({
    AllClass,
    AllRoom,
    roomIndex,
    selectClassLevel,
    handleUpdateClassId,
    handleSetClassLevel
}:ClassLevelProps) =>
{
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
    <div className=" space-y-6">
        <div className=" bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]">
            {/* header */}
            <h1 className=" text-xl font-bold text-black ">เลือกระดับชั้น</h1>
            {/* map class */}
            <div className=" grid grid-cols-4 mt-5">
                {
                    AllClass?.map((value:string , index) => (
                        <div key={index} className={`items-center p-3 font-bold cursor-pointer
                         text-center m-2 rounded-md text-md ${ value === selectClassLevel ? " bg-blue-200 text-blue-600" : "bg-green-100 text-green-600 "}`}
                         onClick={() => handleSetClassLevel(value)}>
                            <p>
                                {value}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* room */}
        <div className=" bg-white p-6 w-full rounded-md drop-shadow-[4px_4px_6px_rgba(0,0,0,0.1)]">
            {/* header */}
            <h1 className=" text-xl font-bold text-black ">เลือกห้องเรียน</h1>
            {/* map class */}
            <div className=" grid grid-cols-4 mt-5">
                {
                    AllRoom?.map((value:string , index) => (
                        <div key={index} className={`items-center p-3 font-bold cursor-pointer
                         text-center m-2 rounded-md text-md ${ index === roomIndex ? " bg-blue-200 text-blue-600" : "bg-green-100 text-green-600 "}`}
                         onClick={() =>  handleUpdateClassId(value,index)}>
                            <p>
                                {selectClassLevel} / {index+1}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    )
}
export default ClassLevel;