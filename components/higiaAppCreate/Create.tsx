import Link from 'next/link';
import Image from 'next/image';

const  img = require('../assets/ph14.jpg');
const Create: React.FC = () => {
 
   
  
  return (
   
<>
<div className="grid grid-cols-3 gap-6 ">
   
<div className=" justify-end">     

<Image  className=" shadow-2xl  bg-no-repeat bg-right-top" width={400}    height={855} src={img}alt="description of image"/>
        
     </div>
    
       <form action="">
         <div className="flex  mt-8  ">
<div className="col-span-2  px-4 mt-2 w-100"> 

<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                       Nome
                      </label>
                      <input
                        type="text"
                        name="nome"
                        id="nome"
                         className=" focus:ring-indigo-500 focus:border-indigo-500 block w-290 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />


</div>

<div className="col-span-2 px-4 "> 

<label htmlFor="sobrenome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sobre nome</label>
    <input type="text" id="sn" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-100 shadow-sm sm:text-sm border-gray-300 rounded-md"  />


</div>
</div>
<div className='flex grid col-span-2 '>
<div className=" px-4 "> 

<label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">cidade</label>
    <input type="text" id="cidade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  />


</div>


<div className=" px-4 "> 

<label htmlFor="endereço" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">endereço</label>
    <input type="text" id="endereço" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  />


</div>


<div className=" px-4 "> 

<label htmlFor="idade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">idade</label>
    <input type="number" id="idade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  />


</div>


<div className='flex'>


<div className=" px-4 col-span-2"> 

<label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
    <input type="text" id="idade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"  />


</div>

<div className="px-4  col-span-2">
  <div className="mb-3 xl:w-96">
  <label htmlFor="genêro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">gênero</label>
 
    <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>gênero</option>
        <option value="1">masculino</option>
        <option value="2">feminino</option>
        <option value="3">não-binário</option>
        <option value="4">transgênero</option>
    </select>
  </div>
</div>


</div>
</div>
</form>
       </div>
       
  </>
  );
}

export default Create;