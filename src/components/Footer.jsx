import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
    return (
        <div className='bg-grayishBlue'>
            <div className='mx-auto max-w-screen-lg px-8 py-14 lg:px-0'>
                <div className='flex flex-col items-center gap-y-10 md:flex-row md:gap-x-28 md:justify-center'>
                    {/* LOGO */}
                    <div>
                        <img src={logo} alt="" className='px-0 w-20' />
                    </div>

                    {/* FOOTER LINKS */}
                    <ul className='grid gap-y-6 md:grid-cols-3 md:gap-x-8'>
                        <li className='px-0 text-darkGrayishBlue text-center md:text-start hover:text-strongCyan'>
                            <a href="#faq">FAQS</a>
                        </li>
                        <li className='px-0 text-darkGrayishBlue text-center md:text-start md:order-2 hover:text-strongCyan'>
                            <a href="#contact">Contact</a>
                        </li>
                        <li className='px-0 text-darkGrayishBlue text-center md:text-start hover:text-strongCyan'>
                            <a href="#privacy">Privacy Policy</a>
                        </li>
                        <li className='px-0 text-darkGrayishBlue text-center md:text-start md:order-2 hover:text-strongCyan'>
                            <a href="#press">Press Kit</a>
                        </li>
                        <li className='px-0 text-darkGrayishBlue text-center md:text-start hover:text-strongCyan'>
                            <a href="#install">Install Guide</a>
                        </li>
                    </ul>

                    {/* SOCIAL LINKS */}
                    <div className='flex items-center gap-x-6 cursor-pointer'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>

                <div className='pt-10'>
                    <p class="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
                        Coded by <a href="https://pauldev-portfolio.netlify.app/">PAUL OKWULU</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;