import Padding from '../padding/padding';
import Image from 'next/image';
import River from '@/assets/assesment/river.png';
import Plane from '@/assets/assesment/plane.svg';

export default function Assesment() {
  return (
    <Padding>
      <div className='mt-[6rem]'>
        <div>
          <div className='flex flex-col items-center'>
            <div
              className='h-[19rem] w-[16rem] p-[1rem] shadow-[0px_9px_43px_0px_#282b6f1a] relative rounded-[1rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <h3 className='h-[2rem] w-[6.5rem] flex justify-center items-center rounded-[2rem] bg-[#CDD8FF] text-[0.8rem] text-[#717FB0]'>
                Question 1
              </h3>
              <p className='text-[1.2rem] text-[#55578D] font-[600] mt-[1rem]'>
                True or false? This play takes place in Italy
              </p>
              <Image
                className='mt-[1.4rem] z-[1] absolute rounded-[1rem]'
                src={River}
                alt=''
              />
              <div className='absolute right-[0rem] bottom-[-1rem] h-[4rem] w-[13rem] rounded-[1rem] z-[2] shadow-[0px_18px_52px_0px_#282b6f14] bg-[#FFFFFF] flex items-center px-[1rem] justify-center'>
                <Image
                  className='h-[2.4rem] w-auto mr-[1rem]'
                  src={Plane}
                  alt=''
                />
                <p className='text-[#41BE90] font-[600] text-[0.8rem]'>
                  Your answer was sent successfully
                </p>
              </div>
            </div>
          </div>
          <div
            className='mt-[2rem] flex flex-col items-center'
            style={{ fontFamily: 'poppins, sans-serif' }}
          >
            <h1 className='text-[#2F327D] font-[600] text-[1.2rem]'>
              Assessments, <span className='text-[#F48C06]'>Quizzes</span>,
              Tests
            </h1>
            <p className='mt-[0.8rem] text-[#696984] text-center'>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </Padding>
  );
}
