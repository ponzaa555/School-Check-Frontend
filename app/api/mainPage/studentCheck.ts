import { BaseURL } from "@/schema/share"
import { AttendInfo, Student } from "@/schema/user";

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
interface FetchStudentAttendInfoApi {
    studentName: string
    attendInfo:{
        studentId:string;
        attendType:string;
        note:string;
        lastAttendId:string;
    }
}
export async function FetchStudentAttendInfo(classId : string) : Promise<Student[]> {
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
    const result :Student[] = data.map((student : FetchStudentAttendInfoApi) => ({
        StudnetName:student.studentName,
        AttendInfo:{
            StudentId: student.attendInfo.studentId,
            AttendType : student.attendInfo.attendType,
            Note: student.attendInfo.note,
            LastAttendId : student.attendInfo.lastAttendId
        }
    })) 
    return result
}
/*
request body :
{
  "classId": "string",
  "attendInfos": [
    {
      "studentId": "string",
      "attendType": "string",
      "note": "string",
      "lastAttendId": "string"
    }
  ]
}
 */
export async function PostStudentAttendInfo( classId : string , listAttendInfo : AttendInfo[] ) {
    const mapListAttendInfoToApi = listAttendInfo.map((attendInfo) => (
        {
            studentId : attendInfo.StudentId,
            attendType : attendInfo.AttendType,
            note : attendInfo.Note,
            lastAttendId : attendInfo.LastAttendId
        }
    ))
    const body = JSON.stringify({
        classId:classId,
        attendInfos:mapListAttendInfoToApi
    })
    // fetch api
    const res = await fetch(`${url}/api/Class/CheckStudentInClass` , {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:body
    })
    if(!res.ok){
        throw new Error("Failed to post students info");
    }
    return
}