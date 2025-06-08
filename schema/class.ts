import { StudentInfo } from "./user";

interface Dictionary<T> {
    [key: string]: T;
}




export const AllClass: Dictionary<string[]> = 
{
    "อนุบาล2" : ["อ2-1", "อ2-2", "อ2-3"],
    "อนุบาล3" : ["อ3-1", "อ3-2", "อ3-3"],
    "ประถม1" : ["ป1-1", "ป1-2", "ป1-3"],
    "ประถม2" : ["ป2-1", "ป2-2", "ป2-3"],
    "ประถม3" : ["ป3-1","ป3-2","ป3-3"],
    "ประถม4" : ["ป4-1", "ป4-2", "ป4-3"],
    "ประถม5" : ["ป5-1", "ป5-2", "ป5-3"],
    "ประถม6" : ["ป6-1", "ป6-2", "ป6-3"],
}
export const AllClassKeys: string[] = Object.keys(AllClass);


export const StudentInClass : Record< string,StudentInfo[]> = 
{
    "P1/1": [
        {
            StudentId:"001",
            StudnetFirstName : "Somchai",
            StudnetLastName : "Jaidee",
            StudentNumber : 1
        },
        {
            StudentId:"002",
            StudnetFirstName : "Somsri",
            StudnetLastName : "Deeja",
            StudentNumber : 2
        },
        {
            StudentId:"003",
            StudnetFirstName : "Thanakrit",
            StudnetLastName : "Phromdej",
            StudentNumber : 3
        }
    ],
    "P1/2": [
        {
            StudentId:"004",
            StudnetFirstName : "Somchai",
            StudnetLastName : "Jaidee",
            StudentNumber : 4
        },
        {
            StudentId:"005",
            StudnetFirstName : "Somsri",
            StudnetLastName : "Deeja",
            StudentNumber : 5
        },
        {
            StudentId:"006",
            StudnetFirstName : "Thanakrit",
            StudnetLastName : "Phromdej",
            StudentNumber : 6
        }
    ],
    "P1/3": [
        {
            StudentId:"007", 
            StudnetFirstName : "Napon",
            StudnetLastName : "Tan",
            StudentNumber : 7
        },
        {
            StudentId:"008",
            StudnetFirstName : "Napan",
            StudnetLastName : "Tan",
            StudentNumber : 8
        },
        {
            StudentId:"009",
            StudnetFirstName : "Thanakrit",
            StudnetLastName : "Phromdej",
            StudentNumber : 9
        }
    ],
}
export const DefultStudent: StudentInfo[] = [
    {
        StudentId: "000",
        StudnetFirstName: "Somchai",
        StudnetLastName: "Jaidee",
        StudentNumber: 1
      },
      {
        StudentId: "001",
        StudnetFirstName: "Somsri",
        StudnetLastName: "Deeja",
        StudentNumber: 2
      },
      {
        StudentId: "002",
        StudnetFirstName: "Thanakrit",
        StudnetLastName: "Phromdej",
        StudentNumber: 3
      },
      {
        StudentId: "003",
        StudnetFirstName: "Kanokwan",
        StudnetLastName: "Wongchai",
        StudentNumber: 4
      },
      {
        StudentId: "004",
        StudnetFirstName: "Pongsakorn",
        StudnetLastName: "Srisuk",
        StudentNumber: 5
      }
]