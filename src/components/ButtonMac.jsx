const ButtonMac = (props) => {
    return (
        <div>
            <button className='bg-lightBlue rounded-full py-2 px-16 shadow-md shadow-lightBlue duration-300 md:hover:opacity-90 md:px-8 md:hover:relative md:hover:bottom-1'>
                <a href="#Mac" className='text-white text-xs md:text-base'>
                    {props.name}
                </a>
            </button>
        </div>
    );
}

export default ButtonMac;