import { useState } from "react";
import Swal from 'sweetalert2'

const Carrer = () => {
    const [authData, setAuthData] = useState({
        inputField1: '',
        inputField2: '',
        inputField3: '',
        inputField4: '',

    });

    const inputHandler = (e) => {
        setAuthData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const sendData = () => {
        
        if (Object.values(authData).some(value => value === '')) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all Fields",
              });
            return;
        }else{
            Swal.fire({
                icon: "success",
                title: "Complete Submited",       
              });

              setAuthData({
                inputField1: '',
                inputField2: '',
                inputField3: '',
                inputField4: '',
              })
        }
        console.log(authData);
    };

    return (
      <>
      
                   
      <div className="border container p-7   bg-slate-600 m-auto rounded-lg">
  
      <div className="  h-[10px]  mt-5  flex  float-right"> 
          <div className='w-[130px] bg-[blue] rounded-l-lg '></div>
          <div className='w-[20px] bg-[red] border-[red]  rounded-r-lg '></div>
      </div>
      <h1 className="text-3xl font-extrabold text-[#ffffff] mt-5 ">Carrer</h1>
  
      <p className=" mt-5 text-[#ffffff]">Lorem ipsum dolor sit amet consectetur. Ipsum velit a dignissim tempor vivamus etiam nibh non.?</p>
      <div className="m-auto w-[100%]">
      <textarea  onChange={inputHandler} value={authData.inputField1}  className=" rounded-lg h-[70px]  mt-3 w-[100%]" name="text" id="inputField1"></textarea>
      </div>
  
   <p className=" mt-5 text-[#ffffff]">Lorem ipsum dolor sit amet consectetur. Ipsum velit a dignissim tempor vivamus etiam nibh non.?</p>
      <div className="m-auto w-[100%]">
      <textarea id="inputField2" value={authData.inputField2} onChange={inputHandler}  className=" rounded-lg h-[70px]  mt-3 w-[100%]" name="text" ></textarea>
      </div>
  
      <p className=" mt-5 text-[#ffffff]">Lorem ipsum dolor sit amet consectetur. Ipsum velit a dignissim tempor vivamus etiam nibh non.?</p>
      <div className="m-auto w-[100%]">
      <textarea onChange={inputHandler} value={authData.inputField3}  className=" rounded-lg h-[70px]  mt-3 w-[100%]" name="text" id="inputField3"></textarea>
      </div>
  
      <p className=" mt-5 text-[#ffffff]">Lorem ipsum dolor sit amet consectetur. Ipsum velit a dignissim tempor vivamus etiam nibh non.?</p>
      <div className="m-auto w-[100%]">
      <textarea onChange={inputHandler} value={authData.inputField4}  className=" rounded-lg h-[70px]  mt-3 w-[100%]" name="text" id="inputField4"></textarea>
      </div>
      
      <div className="m-auto flex justify-center">
      <button onClick={sendData} className='btn  bg-[#E30613] h-[50px] w-[200px] m-2 text-white outline-none text-2xl  rounded-bl-[18px] rounded-br-[18px] rounded-tl-[1px] rounded-tr-[18px]'>
          Submit
      </button>
                   
  </div>
      </div>    
      </>
    )
  }
  
  export default Carrer ;