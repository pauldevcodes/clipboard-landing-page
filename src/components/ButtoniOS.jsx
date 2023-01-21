const ButtoniOS = (props) => {
    return (
        <div>
            <button className='bg-strongCyan rounded-full py-2 px-16 shadow-md shadow-strongCyan duration-300 mb-6 sm:mb-0 md:hover:opacity-90 md:hover:relative md:hover:bottom-1 md:px-8'>
                <a href="#iOS" className='text-white text-xs md:text-base'>
                    {props.name}
                </a>
            </button>
        </div>
    );
}

export default ButtoniOS;