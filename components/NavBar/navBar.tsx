import ExportPdf from "./exportPdf";
import ManageNameButton from "./manageNameButton";
import PrintDoc from "./printDoc";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <div className=" flex sticky top-0 w-full items-center justify-between py-5 bg-blue-600 
         shawd mt-10 rounded-t-md z-[50]">
            <div className=" mx-auto w-4/5 flex justify-between items-center">
                 {/* header */}
                <div>
                    <h1 className="text-3xl font-bold text-white">ระบบเช็คชื่อนักเรียน</h1>
                </div>
                {/* button */}
                <div className=" flex space-x-2">
                    <ManageNameButton/>
                    <ExportPdf/>
                    <PrintDoc/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;