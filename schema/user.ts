
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

export const AllStudent: Student[] = [
    {
      StudnetName: 'ด.ช. กิตติพงศ์ สมบูรณ์',
      AttendInfo: {
        StudentId: 'S001',
        AttendType: 'Present',
        Note: null,
        LastAttendId: 'A1001',
      },
    },
    {
      StudnetName: 'ด.ญ. นภัสสร วงศ์สุวรรณ',
      AttendInfo: {
        StudentId: 'S002',
        AttendType: 'Absent',
        Note: 'ลาป่วย',
        LastAttendId: 'A1002',
      },
    },
    {
      StudnetName: 'ด.ช. ธนกฤต พรหมเดช',
      AttendInfo: {
        StudentId: 'S003',
        AttendType: 'Late',
        Note: 'รถติด',
        LastAttendId: 'A1003',
      },
    },
    {
      StudnetName: 'ด.ช. ภูมิพัฒน์ ศรีวิชัย',
      AttendInfo: {
        StudentId: 'S004',
        AttendType: 'Present',
        Note: null,
        LastAttendId: 'A1004',
      },
    },
    {
      StudnetName: 'ด.ญ. ปาริชาติ สุขสวัสดิ์',
      AttendInfo: {
        StudentId: 'S005',
        AttendType: 'Leave',
        Note: 'ลากิจ',
        LastAttendId: 'A1005',
      },
    },
  ];

export type StudentInfo = 
{
    StudentId: string;
    StudnetFirstName: string;
    StudnetLastName: string;
    StudentNumber: number;
}

export type AttendanceStatus = "Present" | "Absent" | "Late" | "Leave";