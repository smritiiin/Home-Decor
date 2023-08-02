import logo from '../Assets/logo.png';
import {Link} from 'react-router-dom';

export const Footer =()=>{
    return(
        <div className=" flex-col  bg-slate-500 px-10 py-4">
            <div className='flex'>
                <img src={logo} alt='Home' className='h-9 w-9'/>
                <Link to="/" className='text-2xl text-white'>Homely Decor</Link>
              </div>
            <div style={{marginLeft:"auto"}} >
                Contact Us | FAQs
            </div>
            <div className="flex justify-between">
                <div>
                    Follow us on:
                    LINKS
                </div>
                <div>
                    EMail or newletters
                </div>
            </div>
            <div>
                © 2023 All rights reserved.
            </div>
        </div>
    )
}