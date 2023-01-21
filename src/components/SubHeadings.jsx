const SubHeadings = (props) => {
    return (
        <div>
            <h3 className='text-xl text-darkGrayishBlue text-center pb-2 font-semibold md:text-2xl lg:text-start'>
                {props.title}
            </h3>
        </div>
    );
}

export default SubHeadings;