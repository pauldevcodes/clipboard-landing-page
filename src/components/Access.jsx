import devices from '../images/image-devices.png';
import Headings from './Headings';
import Para from './Para';

const Access = () => {
    return (
        <div className='py-20 flex flex-col items-center gap-y-6'>
            <div className='text-center max-w-screen-sm mx-auto px-8 lg:px-0'>
                <Headings title={'Access Clipboard anywhere'} />
                <Para para={'Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'} />
            </div>

            <div>
                <img src={devices} alt="" />
            </div>
        </div>
    );
}

export default Access;