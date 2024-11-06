import { Table } from "flowbite-react";
import LogoPeople from '../../Assests/Images/Ellipse 2.png'

 function TableOne() {
  const theme = {
    "root": {
      "base": "w-full relative z-9 text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "bg-[red] text-[white] px-7 py-6 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    }
  }
  return (
   <>
  <h1 className="text-3xl font-extrabold text-[#2B3C58;]">Child</h1>
    

<div className="overflow-x-auto ">
  <Table theme={theme}>
    <Table.Head>
      <Table.HeadCell className="text-center">Name</Table.HeadCell>
      <Table.HeadCell className="text-center">Email</Table.HeadCell>
      <Table.HeadCell className="text-center">Statua</Table.HeadCell>
      <Table.HeadCell className="text-center">Role</Table.HeadCell>
   
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row  className="bg-[#80808094] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-blue-600/100">Complete</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center "> 
        <div className='w-[170px] bg-[blue] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#F5EDDA] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-red">Pending</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center  "> 
        <div className='w-[130px] bg-[blue] rounded-lg '></div> 
        <div className='w-[40px] bg-[red] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#80808094] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-blue-600/100">Complete</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center  "> 
        <div className='w-[170px] bg-[blue] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#F5EDDA] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell  className="text-blue-600/100">Complete</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center  "> 
        <div className='w-[170px] bg-[blue] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#80808094] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap  font-medium text-gray-900 dark:text-white">
           <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-red">Pending</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center "> 
        <div className='w-[130px] bg-[blue] rounded-lg '></div> 
        <div className='w-[40px] bg-[red] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#F5EDDA] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-blue-600/100">Complete</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center "> 
        <div className='w-[170px] bg-[blue] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#80808094] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-red">Pending</Table.Cell>
        <div className="  h-[10px]  mt-5  flex gap-1 justify-center "> 
        <div className='w-[130px] bg-[blue] rounded-lg '></div> 
        <div className='w-[40px] bg-[red] rounded-lg '></div> 
        </div>
      </Table.Row>
      <Table.Row className="bg-[#F5EDDA] text-center dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <div className="flex justify-center"><img  className="h-[30px] w-[30px] rounded-full  " src={LogoPeople} height="100%"width="100%"alt="" /> <span className="text-1xl ml-3 mt-1">Darlene Robertson</span> </div>
        </Table.Cell>
        <Table.Cell>trungkienspktnd@gamail.com</Table.Cell>
        <Table.Cell className="text-blue-600/100">Complete</Table.Cell>
        <div className="   h-[10px]  mt-5  flex gap-1 justify-center "> 
        <div className='w-[170px] bg-[blue] rounded-lg '></div> 
        </div>
      </Table.Row>
    </Table.Body>
  </Table>
</div>
   </>
  
  );
}

export default TableOne;