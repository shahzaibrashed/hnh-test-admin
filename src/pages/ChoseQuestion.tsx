import CareerImg from '../../src/Assests/Images/Career.png'
import FinanceImg from '../../src/Assests/Images/Finance.png'
import RelationImg from '../../src/Assests/Images/Relationship.png'
import SexImg from '../../src/Assests/Images/Sex.png'
import HealthImg from '../../src/Assests/Images/Health.png'
import SpiritualityImg from '../../src/Assests/Images/Spirituality.png'
import './Child.css'
const ChoseQuestion = () => {
  return (
    <>
     <div className="border   bg-slate-600 m-auto rounded-lg">
      
      <div className=" h-[10px] mr-5 mt-5  flex  float-right">
        
<div className='w-[140px] bg-[blue] rounded-l-lg '></div>
<div className='w-[30px] bg-[red] border-[red]  rounded-r-lg '></div>
      </div>

      <h1  className="text-3xl font-extrabold text-[#ffffff] pt-5 pl-5">Choose Questions</h1>

      <div className=" flex flex-wrap mt-5  justify-center">
      <div className="h-[240px] w-[300px]  justify-center md:border-b-0 border-b-2 border-r-2 border-gray-500   ">
        <img className=' mt-2 ml-12 h-[200px] w-[200px]' src={CareerImg} height="100%" width="100%"  alt="" />
        <p className='text-center text-2xl text-[white]'>Career</p>
        </div>

        <div className="h-[240px] w-[300px] justify-center md:border-b-0 border-b-2 border-r-2 border-gray-500"> 
    <img className='ml-12 mt-2 h-[200px] w-[200px]' src={FinanceImg} height="100%" width="100%" alt="" />
    <p className='text-center text-2xl text-[white]'>Finance</p>
</div>


        <div className=" relation h-[240px] w-[300px]  justify-center  md:border-b-0 border-b-2 border-gray-500 ">
        <img className='ml-12 mt-2 h-[200px] w-[200px]' src={RelationImg} height="100%" width="100%"  alt="" />
        <p className='text-center text-2xl text-[white]'>RelationShip</p>
        </div>
      </div>

      <div className=" flex flex-wrap mb-5 justify-center ">
      <div className="h-[240px] w-[300px]  justify-center border-t-2 border-r-2   border-gray-500">
        <img className='ml-12 mt-2 h-[200px] w-[200px]' src={HealthImg} height="100%" width="100%"  alt="" />
        <p className='text-center text-2xl text-[white]'>Health</p>
        </div>

        <div className="h-[240px] w-[300px]  justify-center  border-t-2 border-r-2  border-gray-500  ">
        <img className='ml-12 mt-2 h-[200px] w-[200px]' src={SexImg} height="100%" width="100%"  alt="" />
        <p className='text-center text-2xl text-[white]'>Sex</p>
        </div>

        <div className="sprit h-[240px] w-[300px]  justify-center border-t-2  border-gray-500  ">
        <img className='ml-12 mt-2 h-[200px] w-[200px]' src={SpiritualityImg} height="100%" width="100%"  alt="" />
        <p className='text-center text-2xl text-[white]'>Spirituality</p>
        </div>
      </div>


     </div>
    </>
  );
};

export default ChoseQuestion;
