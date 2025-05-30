
export type Student = {
    StudnetName: string;
    AttendanceStatus: 'Present' | 'Absent' | 'Late' | 'Leave';
}

export const AllStudent: Student[] = [
    { StudnetName: 'ด.ช. กิตติพงศ์ สมบูรณ์', AttendanceStatus: 'Present' },
    { StudnetName: 'ด.ญ. นภัสสร วงศ์สุวรรณ', AttendanceStatus: 'Absent' },
    { StudnetName: 'ด.ช. ธนกฤต พรหมเดช', AttendanceStatus: 'Late' },
    { StudnetName: 'ด.ญ. ปาริชาติ สุขสวัสดิ์', AttendanceStatus: 'Leave' },
    { StudnetName: 'ด.ช. ภูมิพัฒน์ ศรีวิชัย', AttendanceStatus: 'Present' },
]