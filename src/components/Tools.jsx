import Headings from "./Headings";
import Para from "./Para";
import blacklist from '../images/icon-blacklist.svg';
import text from '../images/icon-text.svg';
import preview from '../images/icon-preview.svg';
import SubHeadings from './SubHeadings';
import SubPara from "./SubPara";

const Tools = () => {
    return (
        <div className="mx-auto max-w-screen-lg">
            <div className='text-center max-w-screen-sm mx-auto px-8 lg:px-0'>
                <Headings title={'Supercharge your workflow'} />
                <Para para={'We’ve got the tools to boost your productivity.'} />
            </div>

            {/* SERVICES */}
            <div className="md:flex md:items-center md:gap-x-6">
                <div className="flex flex-col items-center pb-14 px-8 md:px-0 md:pb-0">
                    <img src={blacklist} alt="" className="pb-10" />
                    <SubHeadings title={'Create blacklists'} />
                    <SubPara para={'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'} />
                </div>
                <div className="flex flex-col items-center pb-14 px-8 md:px-0 md:pb-0">
                    <img src={text} alt="" className="pb-10" />
                    <SubHeadings title={'Plain text snippets'} />
                    <SubPara para={'Remove unwanted formatting from copied text for a consistent look.'} />
                </div>
                <div className="flex flex-col items-center px-8 md:px-0">
                    <img src={preview} alt="" className="pb-10" />
                    <SubHeadings title={'Sneak preview'} />
                    <SubPara para={'Quick preview of all snippets on your Clipboard for easy access.'} />
                </div>
            </div>
        </div>
    );
}

export default Tools;