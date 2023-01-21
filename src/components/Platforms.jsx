import ButtoniOS from "./ButtoniOS";
import ButtonMac from "./ButtonMac";
import Headings from "./Headings";
import Para from "./Para";

const Platforms = () => {
    return (
        <div className="pb-32 max-w-screen-lg mx-auto flex flex-col items-center">
            <div className='text-center max-w-screen-sm mx-auto px-8 lg:px-0'>
                <Headings title={'Clipboard for iOS and Mac OS'} />
                <Para para={'Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'} />
            </div>
            <div className='flex flex-col items-center sm:flex-row sm:gap-x-6'>
                <ButtoniOS name={'Download for iOS'} />
                <ButtonMac name={'Download for Mac'} />
            </div>
        </div>
    );
}
 
export default Platforms;