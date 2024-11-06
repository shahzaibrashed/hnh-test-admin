

import { FaPlay } from "react-icons/fa";
import PeopleImg1 from '../..//Assests/Images/girl1.png'
import PeopleImg2 from '../..//Assests/Images/girl2.png'
import { Link } from "react-router-dom";
const Villagers = () => {

  return (
  <>
  
  <h1 className="text-3xl font-extrabold text-[#2B3C58;]">Guardian Dashboard</h1>
  <div className="m-auto mt-30 flex justify-center">
    <button className='btn bg-[#E30613] h-[50px] w-[200px] m-2 text-white outline-none text-2xl  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[1px] rounded-tr-[20px]'>
       <Link to='/Child'>Add Child Info</Link>
    </button>
</div>
  
  <hr className="h-[3px] border bg-[gray] border-[gray] m-auto mt-10" />
  
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
  
  </>
  )
}
export default Villagers