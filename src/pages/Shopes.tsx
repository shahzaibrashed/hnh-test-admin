import { PiTimerFill } from "react-icons/pi"
import { PiStarThin } from "react-icons/pi"
import ImgOne from '../../src/Assests/Images/Rectangle 26 (5).png'
import ImgTwo from '../../src/Assests/Images/Rectangle 26.png'
import ImgThree from '../../src/Assests/Images/Rectangle 26 (1).png'
import ImgFour from '../../src/Assests/Images/Rectangle 26 (2).png'
import ImgFive from '../../src/Assests/Images/Rectangle 26 (3).png'
import ImgSix from '../../src/Assests/Images/Rectangle 26 (4).png'
import ImgSeven from '../../src/Assests/Images/Rectangle 26 (5).png'
import ImgEight from '../../src/Assests/Images/Rectangle 26 (6).png'
const Shopes = () => {
    const  Cards = [
        {
          Img : ImgOne,
          description :"Lorem ipsum dolor sit amet consectetur.",
          tittle :"watch",
          point:"4.20",
          ratio :"224.4",
          timer:"20 min"
        
        },
        {
          Img : ImgTwo ,
          description :"Lorem ipsum dolor sit amet consectetur.",
          tittle :"watch",
          point:"4.20",
          ratio :"224.4",
          timer:"20 min"
        
        },{
            Img : ImgThree ,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },
          {
            Img : ImgFour ,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },{
            Img :ImgFive,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },{
            Img : ImgSix ,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },{
            Img : ImgSeven ,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },
          {
            Img : ImgEight ,
            description :"Lorem ipsum dolor sit amet consectetur.",
            tittle :"watch",
            point:"4.20",
            ratio :"224.4",
            timer:"20 min"
          
          },
           ]  
  return (
    <>
    
   <div className="w-[100%] m-0 p-0 bg-[#F5EDDA] ">
   <h1 className="text-3xl font-extrabold text-[#2B3C58;]">Guardian Dashboard</h1>

   <section>
  <div style={{ display:"flex", justifyContent : "space-around",flexWrap:"wrap"}} >
{Cards.map((e,i)=>{
return ( 
<div className="card    rounded-lg m-3 w-[230px] bg-[white]">
<img style={{width:"190px",margin:"auto",marginTop:"3px"}}
            src={e.Img}
            className="card-img-top"
            alt="Laptop"
          />

   <div className="text-1xl m-3 text-[black] ">{e.description}</div>
           <div className="flex justify-between m-3 h-[20px] text-[red]">
              <p>
                  {e.tittle}
              </p>
              <p>
                {e.point}
              </p>
            </div>
            <div className="flex justify-between m-3 h-[20px] text-[red]">
              <p>
                 {e.ratio}
              </p>
              <p>
                 {e.timer}
              </p>
            </div>
            <button className="h-[40px] w-[200px] border border-[red] bg-[red] text-[white] text-center ml-4 mb-2 rounded-lg">Send</button>
</div>
)})} 

      </div>
</section>
   </div>
    </>
  )
}
export default Shopes ;