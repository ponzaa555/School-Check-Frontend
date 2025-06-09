
export type AttendInfo = {
    StudentId: string;
    AttendType : AttendanceStatus;
    Note : string | null;
    LastAttendId : string | null;
}
export type Student = {
    StudnetName: string;
    AttendInfo : AttendInfo;
}

export type StudentInfo = 
{
    StudentId: string;
    StudnetFirstName: string;
    StudnetLastName: string;
    StudentNumber: number;
}

export type AttendanceStatus = "Present" | "Absent" | "Late" | "Leave" | "NONE";