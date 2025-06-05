import { StudentInfo } from "./user";

interface Dictionary<T> {
    [key: string]: T;
}
export type ClassList = 
{
    EducationLevel : string;
    Level : string;
}

export const AllEducationLevels: ClassList[] = [
    { EducationLevel: "Kindergarten", Level: "K1" },
    { EducationLevel: "Kindergarten", Level: "K2" },
    { EducationLevel: "Kindergarten", Level: "K3" },
    { EducationLevel: "Primary", Level: "P1" },
    { EducationLevel: "Primary", Level: "P2" },
    { EducationLevel: "Primary", Level: "P3" },
    { EducationLevel: "Primary", Level: "P4" },
    { EducationLevel: "Primary", Level: "P5" },
    { EducationLevel: "Primary", Level: "P6" },
    { EducationLevel: "Secondary", Level: "S1" },
    { EducationLevel: "Secondary", Level: "S2" },
    { EducationLevel: "Secondary", Level: "S3" },
    { EducationLevel: "High School", Level: "H1" },
    { EducationLevel: "High School", Level: "H2" },
    { EducationLevel: "High School", Level: "H3" },
];

export const AllClass: Dictionary<string[]> = 
{
    "ประถม1" : ["1", "1", "1"],
    "ประถม2" : ["2", "2", "2"],
    "ประถม3" : ["3","3","3"],
    "ประถม4" : ["P4/1", "P4/2", "P4/3"],
    "ประถม5" : ["P5/1", "P5/2", "P5/3"],
    "ประถม6" : ["P6/1", "P6/2", "P6/3"],
    "มัธยม1" : ["S1/1", "S1/2", "S1/3"],
    "มัธยม2" : ["S2/1", "S2/2", "S2/3"],
    "มัธยม3" : ["S3/1", "S3/2", "S3/3"],
    "มัธยม4" : ["H1/1", "H1/2", "H1/3"],
    "มัธยม5" : ["H2/1", "H2/2", "H2/3"],
    "มัธยม6" : ["H3/1", "H3/2", "H3/3"],
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