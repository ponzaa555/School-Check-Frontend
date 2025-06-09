import { BaseURL } from "@/schema/share";
import { StudentInfo } from "@/schema/user";

const url = BaseURL;



/*
{
  "studentId": "14001",
  "firstName": "last",
  "lastName": "name",
  "studentNumber": 22,
  "classId": "4"
}
*/
export const AddStudent = async(student : StudentInfo , classId :string) => {
    // console.log("Adding student: ", student, " to class ID: ", classId);
    const response = await fetch(`${url}/api/Student/AddStudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
                studentId: student.StudentId,
                studentNumber : student.StudentNumber,
                firstName: student.StudnetFirstName,
                lastName: student.StudnetLastName,
                classId: classId.toString()
        })
    });
    if (!response.ok) {
        throw new Error("Failed to add student");
    }
    const data = await response.json();
    return data;
}
/*
[
{
    "studentId": "13173",
    "firstName": "Napon",
    "lastName": "Tansiri",
    "classId": "2"
},
]
*/
export const FetchStudents = async(classId: string):Promise<StudentInfo[]> => {
    // console.log("Fetching students for class ID: ", classId);
    const res = await fetch(`${url}/api/Student/GetStudentInClass/${classId}`,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (!res.ok) {
        throw new Error("Failed to fetch students");
    }
    const data = await res.json();
    // console.log("Fetched students: ", data);
    // map data to StudentInfo type
    const students: StudentInfo[] = data.map((student: any) => ({
        StudentId: student.studentId,
        StudnetFirstName: student.firstName,
        StudnetLastName: student.lastName,
        StudentNumber: student.studentNumber,
    }));
    return  students;
}

/*
Request body example:
[
  "22"
]
  Response body example:
  {
  "rowsAffected": 1,
  "isSuccess": true,
  "message": "Delete student successfully"
}
*/

export const SetClassIdToNoClass = async (studentsIds : string[]) => 
{
    // console.log("Deleting students with IDs: ", studentsIds);
    if (studentsIds.length === 0) {
        console.warn("No student IDs provided for deletion.");
        return;
    }
    console.log("stringify list studentsIds : ", JSON.stringify(studentsIds));
   const res = await fetch(`${url}/api/Student/SetClassIdToNoClass`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studentsIds)
   })
//    console.log("Response from SetClassIdToNoClass: ", res);
    if (!res.ok){
        throw new Error("Failed to delete students");
    }
    return;
}

/* 
Request body example:
{
  "studentId": "1",
  "firstName": "Ammy",
  "lastName": "Em"
}
Response body example:
{}
*/
export async function UpdateStudent(student : StudentInfo) {
    // console.log("UpdateStudent Api ");
    const res = await fetch(`${url}/api/Student/UpdateStudent`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            studentId : student.StudentId,
            firstName: student.StudnetFirstName,
            lastName : student.StudnetLastName
        })
    })
    if (!res.ok){
        throw new Error("Failed to delete students");
    }
    return;
}
