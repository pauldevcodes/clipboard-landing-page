const SubPara = (props) => {
    return (
        <div>
            <p className='text-grayishBlue text-center px-8 lg:px-0 lg:text-start'>
                {props.para}
            </p>
        </div>
    );
}

export default SubPara;