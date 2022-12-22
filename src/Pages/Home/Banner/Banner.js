import React from 'react';
import bannerBg from '../../../Assets/banner.png';
import book from '../../../Assets/icon/book.png';
import blub from '../../../Assets/icon/blub.png';
import group from '../../../Assets/icon/group.png';
import presentation from '../../../Assets/icon/presentation.png';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    const transition = { duration: 2, type: "spring" };

    return (
        <div className='flex gap-20 flex-col md:flex-row items-center my-10 text-center md:text-left'>
            <div className='w-full flex flex-col gap-7 relative'>
                <div className='flex flex-col gap-2 items-start'>
                    <div className='bg-white px-[20px] py-[15px] leading-5 font-medium text-[20px] text-secondary rounded-[10px]'>Never Stop Learning</div>
                    <h1 className='text-[65px] font-bold leading-[75px]'>Grow up your skills by online courses with Eduvi</h1>
                </div>
                <p className='text-neutral'>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
                <form className='bg-white h-[60px] p-[5px] pl-3 flex  items-center gap-[16px] rounded-[10px]'>
                    <select className="text-primary text-[17px] font-medium focus:outline-none">
                        <option className='text-base-content'>Course</option>
                        <option className='text-base-content'>Book</option>
                    </select>
                    <div className='w-[2.5px] h-8 bg-neutral opacity-50'></div>
                    <input type="text" placeholder="Type here" className="font-medium text-[17px] focus:outline-none w-full" />
                    <button type="submit" className='bg-primary px-[30px] py-[15px] text-[17px] font-medium flex justify-center items-center rounded-[10px] gap-[5px] text-white leading-[20px]'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        Search
                    </button>
                </form>
                <div className='absolute w-3/5 h-3/5 blur-[325px] opacity-30 rounded-[50%] bg-secondary top-[40%] left-[25%] -z-20'></div>
            </div>
            <div className='w-full relative'>

                <motion.div
                    className='h-16 w-16 bg-white rounded-[10px] p-[15px] shadow-2xl absolute'
                    initial={{ left: "-25%", top: "-3%" }}
                    whileInView={{ left: "-5%" }}
                    transition={transition}
                >
                    <img src={book} alt="" />
                </motion.div>

                <motion.div
                    className='h-16 w-16 bg-white rounded-[10px] p-[15px] shadow-2xl absolute'
                    initial={{ left: "100%", top: "5%" }}
                    whileInView={{ left: "78%" }}
                    transition={transition}
                >
                    <img src={blub} alt="" />
                </motion.div>

                <motion.div
                    className='h-16 w-16 bg-white rounded-[10px] p-[15px] shadow-2xl absolute'
                    initial={{ left: "-15%", top: "45%" }}
                    whileInView={{ left: "6%" }}
                    transition={transition}
                >
                    <img src={presentation} alt="" />
                </motion.div>

                <motion.div
                    className='h-16 w-16 bg-white rounded-[10px] p-[15px] shadow-2xl absolute'
                    initial={{ right: "-25%", top: "80%" }}
                    whileInView={{ right: "-2%" }}
                    transition={transition}
                >
                    <img src={group} alt="" />
                </motion.div>

                <img src={bannerBg} className="w-full" alt="" />
            </div>
        </div>
    );
};

export default Banner;