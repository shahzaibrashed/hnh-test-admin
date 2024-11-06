import PeopleImg1 from '../../src/Assests/Images/girl1.png'
import PeopleImg2 from '../../src/Assests/Images/girl1.png'
import { FaPlay } from "react-icons/fa";
const Villagers = () => {
  return (
    <>
     
     <h1 className="text-3xl font-extrabold text-[#2B3C58;]">Villagers</h1>

<section className='container'>

        <div className='flex flex-wrap mt-10 justify-center '>
         
        <div className='backgroundPic1 relative m-5 h-45 w-67 '>
           <img className='rounded-lg' src={PeopleImg1} height="100%" width="100%" alt="" />
           <div className='w-[45px] h-[45px] flex justify-center items-center  bg-white rounded-full absolute top-[37%] left-[40%] right-auto m-auto '>
              <FaPlay size={'30px'} className='text-red-600 ' />
           </div>
          </div>
         
         
           <div className='backgroundPic1 relative m-5 h-45 w-67 '>
           <img className='rounded-lg' src={PeopleImg2} height="100%" width="100%" alt="" />
           <div className='w-[45px] h-[45px] flex justify-center items-center  bg-white rounded-full absolute top-[37%] left-[40%] right-auto m-auto '>
              <FaPlay size={'30px'} className='text-red-600 ' />
           </div>
          </div>

          <div className='backgroundPic1 relative m-5 h-45 w-67 '>
           <img className='rounded-lg' src={PeopleImg1} height="100%" width="100%" alt="" />
           <div className='w-[45px] h-[45px] flex justify-center items-center  bg-white rounded-full absolute top-[37%] left-[40%] right-auto m-auto '>
              <FaPlay size={'30px'} className='text-red-600 ' />
           </div>
          </div>

        </div>

      </section>

    </>
  );
};

export default Villagers;