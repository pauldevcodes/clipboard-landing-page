import logo from '../images/logo.svg';
import ButtoniOS from './ButtoniOS';
import ButtonMac from './ButtonMac';
import Headings from './Headings';
import Para from './Para';

const Header = () => {
    return (
        <div id='bgHeader' className='flex flex-col items-center px-8 py-32'>
            {/* LOGO */}
            <div className='pb-20'>
                <img src={logo} alt="" />
            </div>

            {/* TEXT */}
            <div className='text-center max-w-screen-sm mx-auto'>
                <Headings title={'A history of everything you copy'} />
                <Para para={'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'} />
            </div>

            {/* BUTTONS */}
            <div className='flex flex-col items-center sm:flex-row sm:gap-x-6'>
                <ButtoniOS name={'Download for iOS'} />
                <ButtonMac name={'Download for Mac'} />
            </div>
        </div>
    );
}

export default Header;