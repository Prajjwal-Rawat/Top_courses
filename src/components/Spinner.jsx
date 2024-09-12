import './Spinner.css'


function Spinner(){
    return(
        <div className='flex flex-col gap-9 items-center space-y-2 my-auto'>
            <div className="spinner"></div>
            <h2 className='text-lg font-semibold text-white'>Loading...</h2>
        </div>
    )
}

export default Spinner;