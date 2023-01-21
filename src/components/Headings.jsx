const Headings = (props) => {
    return (
        <div>
            <h2 className='text-3xl text-darkGrayishBlue pb-5 font-semibold md:text-4xl'>
                {props.title}
            </h2>
        </div>
    );
}

export default Headings;