import computer from '../images/image-computer.png';
import Headings from './Headings';
import Para from './Para';
import SubHeadings from './SubHeadings';
import SubPara from './SubPara';

const About = () => {
    return (
        <div className='px-8 py-20 lg:px-0'>
            <div className="mx-auto max-w-screen-sm text-center">
                <Headings title={'Keep track of your snippets'} />
                <Para para={'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'} />
            </div>

            {/* ABOUT LIST */}
            <div className='flex flex-col items-center lg:flex-row lg:gap-x-24 '>
                {/* IMAGE */}
                <div className='mb-16 lg:-ml-10'>
                    <img src={computer} alt="" />
                </div>

                {/* LISTS */}
                <div className='flex flex-col gap-y-12 lg:pr-32'>
                    <div>
                        <SubHeadings title={'Quick Search'} />
                        <SubPara para={'Easily search your snippets by content, category, web address, application, and more.'} />
                    </div>

                    <div>
                        <SubHeadings title={'iCloud Sync'} />
                        <SubPara para={'Instantly saves and syncs snippets across all your devices.'} />
                    </div>

                    <div>
                        <SubHeadings title={'Complete History'} />
                        <SubPara para={'Retrieve any snippets from the first moment you started using the app.'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;