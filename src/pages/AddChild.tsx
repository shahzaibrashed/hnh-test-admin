import { useRef, useState } from 'react';
import Range from '../../src/Assests/Images/Group 37318.png'
import Range1 from '../../src/Assests/Images/Group 37318 (1).png'
import Swal from 'sweetalert2'

const AddChild = () => {
const  [inndexHandle , setindexHandle] = useState(0)

const handleSubmit = ()=>{
  Swal.fire({
    text: "Completed!",
    icon: "success"
  });
}

const fileInputRef = useRef(null);


const handleClick = () => {
  fileInputRef.current.click(); 
};

  return (
    <>   
    {
inndexHandle == 0 ?
<>
<h1 className="text-3xl font-extrabold text-[#2B3C58;]">Guardian Dashboard</h1>
<img className='m-auto h-[40px] mt-2 w-[200px]' src={Range} alt="" />

<div className='mainbody w-[100%] bg-[#2B3C58] m-auto mt-5 rounded-lg p-5'>

<h1 className="text-3xl font-extrabold text-[white] mb-5">Add Your Child Info</h1>
                 
                 <label  className=' text-[white] pt-3'>Child's Name </label> <br />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Enter child name' name="" id="" />


                 <label  className=' text-[white] pt-3'>Child's Doe</label> <br />
                 <div style={{ display: "flex", justifyContent: "space-between",gap:'5px'  }}>
                     <select className='w-[100%] p-2 rounded-lg outline-none mt-2 text-[gray]' name="" id="" >
                         <option  value="Monday">Month</option>
                         <option value="Monday">January</option>
                         <option value="Monday">febuary</option>
                     </select>
                     <select className='w-[100%] p-3 rounded-lg outline-none mt-2'  name="" id="" >
                         <option value="Monday">Year</option>
                         <option value="Monday">2006</option>
                         <option value="Monday">2007</option>
                     </select>
                 </div>

               <label className=' text-[white] pt-3'>School Grades</label> <br />

                 <select className='w-[100%] p-3 rounded-lg outline-none mt-2'  name="" id="" >
                         <option value="Monday">A+</option>
                         <option value="Monday">B</option>
                         <option value="Monday">C</option>
                     </select>
                


                 <label className=' text-[white] pt-3'>Children Email Address</label> <br />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Enter  Children email' name="" id="" />


                 <label className=' text-[white] pt-3'>Ascention Date</label> <br />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2'type="text" placeholder='Ascention Date' name="" id="" />


                 

                 <div className="m-auto flex justify-center">
                <button onClick={()=>setindexHandle(1)} className='btn bg-[#E30613] h-[40px] w-[180px] m-2 text-white outline-none text-2xl  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[1px] rounded-tr-[20px]'>
                Next
               </button>
               </div>



             </div>
</> 
:
 <> 
   <h1 className="text-3xl font-extrabold text-[#2B3C58;]">Guardian Dashboard</h1>
    <img className='m-auto h-[40px] mt-2 w-[200px]' src={Range1} alt="" />
    
 <div className='mainbody w-[100%] bg-[#2B3C58] m-auto mt-5 rounded-lg p-5'>

<h1 className="text-3xl font-extrabold text-[white] mb-5">Add Villagers</h1>


                 <label  className=' text-[white]'>Identify Time Keeper</label> 
                 <div className='flex justify-between gap-[5px] mb-3'>
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="" />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="" />
                 </div>

                 <label  className=' text-[white]'>Identify Candle Reader</label> 
                 <div className='flex justify-between gap-[5px] '>
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="" />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="" />
                 </div>


             <hr className='mb-5 mt-5' />


             <div className='flex justify-between'><label  className=' text-[white]'>Vloger</label> <p className='text-[gray]'>1/24</p></div>
                 <div className='flex justify-between gap-[5px] '>
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="" />
                 <input className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="" />
                 </div>

                <input type="file" className='hidden' id='in.p' ref={fileInputRef} />
                <div className='mt-3 bg-[gray] rounded-lg border-dashed cursor-pointer text-center h-[60px] border border-[white]'  onClick={handleClick} >
                <p  className='mt-3  text-[white]'>Add more Vlogers</p>
                </div>
                 

                 <div className="m-auto  mt-3 flex justify-center">
               <button onClick={()=>setindexHandle(0)} className='btn bg-[#766C6C] h-[50px] w-[250px] m-2 text-white outline-none text-2xl  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[1px] rounded-tr-[20px]'>
              Previous
               </button>
               <button onClick={handleSubmit} className='btn bg-[#E30613] h-[50px] w-[250px] m-2 text-white outline-none text-2xl  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[1px] rounded-tr-[20px]'>
                Next
               </button>
               </div>

             </div>

 
</>
    }   
    </>
  )
}
export default AddChild;