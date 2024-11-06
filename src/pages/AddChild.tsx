import { useRef, useState } from 'react';
import Range from '../../src/Assests/Images/Group 37318.png'
import Range1 from '../../src/Assests/Images/Group 37318 (1).png'
import Swal from 'sweetalert2'

const AddChild = () => {
const  [inndexHandle , setindexHandle] = useState(0)

const [authData, setAuthData] = useState({
  inputField1: '',
  inputField2: '',
  inputField3: '',
  inputField4: '',
  inputField5: '',
  inputField6: '',
});

const firstInputHandler = (e) => {
  setAuthData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
  }));
};

const nextPage = ()=>{
  if (authData.inputField1 == '' || authData.inputField2 == "" || authData.inputField3 == "" || authData.inputField4 == "" || authData.inputField5 == "" || authData.inputField6 == "") {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all Fields",
      });
}else{
  setAuthData({
    inputField1: '',
    inputField2: '',
    inputField3: '',
    inputField4: '',
    inputField5: '',
    inputField6: '',
  })
      setindexHandle(1)
}
}

const [autSubmited, setAutSubmited] = useState({
  inpfield0: '',
  inpfield1: '',
  inpfield2: '',
  inpfield3: '',
  inpfield4: '',
  inpfield5: '',
  inpfield6: '',
});

const secondInputhandler = (e) => {
  setAutSubmited((prev) => ({
    ...prev,
    [e.target.id]: e.target.value,
    [e.target.id]: e.target.value,
}));
};


const handleSubmit = ()=>{
  if (autSubmited.inpfield0 == '' || autSubmited.inpfield1 == '' || autSubmited.inpfield2 == "" || autSubmited.inpfield3 == "" || autSubmited.inpfield4 == "" || autSubmited.inpfield5 == "" || autSubmited.inpfield6 == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all Fields",
    });
}else{  
      Swal.fire({
        icon: "success",
        title: "Complete Submited",       
      });
      setAutSubmited({
        inpfield0: '',
        inpfield1: '',
        inpfield2: '',
        inpfield3: '',
        inpfield4: '',
        inpfield5: '',
        inpfield6: '',
      })
      setindexHandle(0)
}
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
                 <input onChange={firstInputHandler} value={authData.inputField1} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Enter child Name' name="" id="inputField1" />


                 <label  className=' text-[white] pt-3'>Child's Doe</label> <br />
                 <div style={{ display: "flex", justifyContent: "space-between",gap:'5px'  }}>
                     <select onChange={firstInputHandler} value={authData.inputField2} className='w-[100%] p-2 rounded-lg outline-none mt-2 text-[gray]' name="" id="inputField2" >
                         <option >Month</option>
                         <option>January</option>
                         <option>febuary</option>
                     </select>
                     <select onChange={firstInputHandler} value={authData.inputField3} className='w-[100%] p-3 rounded-lg outline-none mt-2'  name="" id="inputField3" >
                         <option>Year</option>
                         <option>2006</option>
                         <option>2007</option>
                     </select>
                 </div>

               <label className=' text-[white] pt-3'>School Grades</label> <br />

                 <select onChange={firstInputHandler} value={authData.inputField4} className='w-[100%] p-3 rounded-lg outline-none mt-2'  name="" id="inputField4" >
                         <option>A+</option>
                         <option>B</option>
                         <option>C</option>
                     </select>
                


                 <label className=' text-[white] pt-3'>Children Email Address</label> <br />
                 <input onChange={firstInputHandler} value={authData.inputField5} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Enter  Children Email' name="" id="inputField5" />


                 <label className=' text-[white] pt-3'>Ascention Date</label> <br />
                 <input onChange={firstInputHandler} value={authData.inputField6} className='w-[100%] p-3 rounded-lg outline-none mt-2'type="text" placeholder='Ascention Date' name="" id="inputField6" />


                 

                 <div className="m-auto flex justify-center">
                <button onClick={nextPage} className='btn bg-[#E30613] h-[40px] w-[180px] m-2 text-white outline-none text-2xl  rounded-bl-[20px] rounded-br-[20px] rounded-tl-[1px] rounded-tr-[20px]'>
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
                 <input onChange={secondInputhandler} value={autSubmited.inpfield0} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="inpfield0" />
                 <input onChange={secondInputhandler} value={autSubmited.inpfield1} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="inpfield1" />
                 </div>

                 <label  className=' text-[white]'>Identify Candle Reader</label> 
                 <div className='flex justify-between gap-[5px] '>
                 <input onChange={secondInputhandler} value={autSubmited.inpfield2} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="inpfield2" />
                 <input onChange={secondInputhandler} value={autSubmited.inpfield3} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="inpfield3" />
                 </div>


             <hr className='mb-5 mt-5' />


             <div className='flex justify-between'><label  className=' text-[white]'>Vloger</label> <p className='text-[gray]'>1/24</p></div>
                 <div className='flex justify-between gap-[5px] '>
                 <input onChange={secondInputhandler} value={autSubmited.inpfield4} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="text" placeholder='Full Name' name="" id="inpfield4" />
                 <input onChange={secondInputhandler} value={autSubmited.inpfield5} className='w-[100%] p-3 rounded-lg outline-none mt-2' type="email" placeholder='Email' name="" id="inpfield5" />
                 </div>

                <input onChange={secondInputhandler} value={autSubmited.inpfield6} type="file" className='hidden'  id='inpfield6' ref={fileInputRef} />
                <div className='mt-3 bg-[gray] rounded-lg border-dashed cursor-pointer text-center h-[60px] border border-[white]'  onClick={handleClick} >
                <p id='inpfield7'  className='mt-3  text-[white]'>Add more Vlogers</p>
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