import { StudentInfo } from "@/schema/user";

const url = "http://localhost:5274";



/*
{
  "studentId": "string",
  "firstName": "string",
  "lastName": "string",
  "classId": "string"
}
*/
export const AddStudent = async(student : StudentInfo , classId :string) => {
    console.log("Adding student: ", student, " to class ID: ", classId);
    const response = await fetch(`${url}/api/Student/AddStudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
                studentId: student.StudentNumber.toString(),
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
    console.log("Fetching students for class ID: ", classId);
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
    console.log("Fetched students: ", data);
    // map data to StudentInfo type
    const students: StudentInfo[] = data.map((student: any) => ({
        StudentId: student.studentId,
        StudnetFirstName: student.firstName,
        StudnetLastName: student.lastName,
        StudentNumber: parseInt(student.studentId),
    }));
    return  students;
}