import { BaseURL } from "@/schema/share"
import { Student } from "@/schema/user";

const url = BaseURL

/*
Request path : http://localhost:5274/api/Class/StudentAttendInfo/{classId}
Response Body :
[
    {
            "studentName": "Napon Tansiri",
            "attendInfo": {
            "studentId": "13173",
            "attendType": "Present",
            "note": null,
            "lastAttendId": null
    }
]
*/
export async function FetchStudentAttendInfo(classId : string) : Promise<Student[]> {
    console.log("FetchStudentAttendInfo : " , classId)
    const res = await fetch(`${url}/api/Class/StudentAttendInfo/${classId}`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch students");
    }
    const data = await res.json()
    const result :Student[] = data.map((student : any) => ({
        StudnetName:student.studentName,
        AttendInfo:{
            StudentId: student.attendInfo.studentId,
            AttendType : student.attendInfo.attendType,
            Note: student.attendInfo.note,
            LastAttendId : student.attendInfo.lastAttendId
        }
    })) 
    console.log("result :", result)
    return result
}