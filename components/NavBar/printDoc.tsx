
interface PrintDocProps {

}

const PrintDoc :  React.FC<PrintDocProps> = () => {
    return(
        <button className=" cursor-pointer">
            <div className='flex items-center justify-center p-2 bg-white text-md text-blue-400 font-bold rounded-md'>
                พิมพ์เอกสาร
            </div>
        </button>
    )
}

export default PrintDoc;