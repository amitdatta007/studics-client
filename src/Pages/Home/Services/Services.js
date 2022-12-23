import React from 'react';
import serviceBg from '../../../Assets/Pattern.png';
import video1 from '../../../Assets/video1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faCirclePlay, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Services = () => {
    return (
        <div className='flex flex-col items-center gap-4 overflow-hidden'>
            <h1 className='text-center font-bold text-[45px] leading-[55px]'>High quality video, audio <br /> & live classes</h1>
            <p className='text-center text-neutral'>High-definition video is video of higher resolution and quality than standard-definition. While there is no <br /> standardized meaning for high-definition, generally any video image with considerably more than <br /> 480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
            <button type="submit" className='bg-primary px-[30px] py-[20px] text-[17px] font-medium rounded-[10px] text-white leading-[20px] hover:bg-primary-focus'>Visit Courses</button>
            <div className='max-w-[1136px] w-[88%]' style={{ backgroundImage: `url(${serviceBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right top' }}>
                <motion.div
                    className='max-w-[1060px] w-[92%] bg-white mt-24 p-[10px] md:p-[30px] rounded-[20px] shadow-xl'
                    initial={{ scale: '0.1' }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={video1} className='w-full rounded-[16px]' alt="" />
                </motion.div>

                <div className='max-w-[1060px] w-[92%] my-12 flex flex-col md:flex-row gap-8'>
                    <motion.div
                        className='w-full bg-white p-4 rounded-[10px] flex gap-5 items-center shadow-xl'
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='w-[70px] h-[70px] bg-secondary/10 rounded-[10px] flex justify-center items-center text-[30px] text-secondary'>
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </div>
                        <p className='text-2xl font-semibold'>Audio Classes</p>
                    </motion.div>

                    <motion.div
                        className='w-full bg-white p-4 rounded-[10px] flex gap-5 items-center shadow-xl'
                        initial={{y: 100}}
                        whileInView={{y: 0}}
                        transition={{duration: 1}}
                    >
                        <div className='w-[70px] h-[70px] bg-primary/10 rounded-[10px] flex justify-center items-center text-[30px] text-primary'>
                            <FontAwesomeIcon icon={faTowerBroadcast} />
                        </div>
                        <p className='text-2xl font-semibold'>Live Classes</p>
                    </motion.div>

                    <motion.div 
                    className='w-full bg-white p-4 rounded-[10px] flex gap-5 items-center shadow-xl'
                    initial={{x: 100}}
                    whileInView={{x: 0}}
                    transition={{duration: 1}}
                    >
                        <div className='w-[70px] h-[70px] bg-accent/10 rounded-[10px] flex justify-center items-center text-[30px] text-accent'>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                        <p className='text-2xl font-semibold'>Recorded Class</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;