import google from '../images/logo-google.png';
import ibm from '../images/logo-ibm.png';
import microsoft from '../images/logo-microsoft.png';
import hp from '../images/logo-hp.png';
import vectorGraphics from '../images/logo-vector-graphics.png';

const Companies = () => {
    return (
        <div className='py-32 max-w-screen-lg mx-auto'>
            <div className='flex flex-col items-center gap-y-16 lg:flex-row lg:gap-x-16'>
                <img src={google} alt="" />
                <img src={ibm} alt="" />
                <img src={microsoft} alt="" />
                <img src={hp} alt="" />
                <img src={vectorGraphics} alt="" />
            </div>
        </div>
    );
}
 
export default Companies;