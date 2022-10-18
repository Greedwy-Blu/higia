
import { useProfissionalMutationMutation } from '../../../graphql/generated/graphql';

import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';



export const Profissional:React.FC = () =>{

  const [Profissional, {  data, loading:p  }] = useProfissionalMutationMutation()
 
  const {
    register: register2,
    handleSubmit:handleSubmit2,
    formState: { errors:errors2 },
  } = useForm();
  
  const onSubmit2 = async (data) => {
    const { ambiente, especial, especialidade,grupo, idade,  raio,imagens,qualificacao,localatendimento, servico} = data;
    const  variables ={ambiente, especial, especialidade,grupo, idade,  raio,imagens,qualificacao,localatendimento, servico};
  
    try{
    
   
  toast.promise(Profissional({
    variables
  }), {
    loading: 'Loading',
    success: 'Got the data',
    error: 'Error when fetching',
  });
   }catch(err){
     console.log(err)
   }
  }
  
 
  return(
  <div className="flex justify-center mb-40 pb-40  -translate-x-32">
  <Toaster />
  <div className="grid grid-cols-3 gap-6 ">
  
  
  
  <form 
  
  onSubmit={handleSubmit2(onSubmit2)}
  
  
  > <div className="flex  mt-8  ">
  <div className="col-span-2  px-4 mt-2 w-100"> 
  
  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                       Nome
                      </label>
                      <input
                        type="text"
                       id="name"
                        className=" focus:ring-indigo-500 focus:border-indigo-500 block w-290 shadow-sm sm:text-sm border-gray-300 rounded-md"
                         name="ambiente"        {...register2('ambiente', { required: true })}
                           />
  
  
  </div>
  
  <div className="col-span-2 px-4  "> 
  
  <label htmlFor="sobrenome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sobre nome</label>
    <input type="text" id="sn"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-100 shadow-sm sm:text-sm border-gray-300 rounded-md"     
                name="especial"         
                {...register2('especial', { required: true })}
                      
                         />
  
  
  </div>
  </div>
  <div className='flex grid col-span-2 '>
  <div className=" px-4"> 
   
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
    <input type="text" id="sn"   className=" mr-12 pr-12 focus:ring-indigo-500 focus:border-indigo-500 block w-90 shadow-sm sm:text-sm w-full border-gray-300 rounded-md" 
    
    name="localatendimento"      
    {...register2('localatendimento', { required: true })}
                  
    />
  
  
  <label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">cidade</label>
    <input type="text" id="cidade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  
    name="especialidade"    
   
    {...register2('especialidade', { required: true })}
             
  />
  
  
  </div>
  
  <div className=" px-4 "> 
  
  <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">senha</label>
    <input type="text" id="senha"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"      
    
    name="grupo"    
   
    {...register2('grupo', { required: true })}
    />
  
  
  </div>
  
  
  
  <div className=" px-4 "> 
  
  <label htmlFor="idade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">idade</label>
    <input type="text" id="idade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"    
    
    
    name="idade"     
   
    {...register2('idade', { required: true })}
  
    />
  
  
  </div>
  
  
  <div className='flex'>
  
  
  <div className=" px-4 col-span-2"> 
  
  <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
    <input type="text" id="celular"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"   
    
    
    name="imagens"      
   
    {...register2('imagens', { required: true })}
  
  
    />
  
  
  </div>
  <div className=" px-4 col-span-2"> 
  
  <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
    <input type="text" id="celular"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"   
    
    
    name="servico"      
   
    {...register2('servico', { required: true })}
  
  
    />
  
  
  </div>
  
  
  
  <div className=" px-4 col-span-2"> 
  
  <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
    <input type="text" id="celular"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"   
    
    
    name="qualificacao"      
   
    {...register2('qualificacao', { required: true })}
  
  
    />
  
  
  </div>
  
  <div className="px-4  col-span-2">
  <div className="mb-3 xl:w-96">
  <label htmlFor="genêro"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">gênero</label>
  
    <select  className="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"     
  
  
      name="raio"         
  
      {...register2('raio', { required: true })}
  >
        <option selected>gênero</option>
        <option value="masculino">masculino</option>
        <option value="feminino">feminino</option>
        <option value="não-binário">não-binário</option>
        <option value="transgênero">transgênero</option>
    </select>
  </div>
  </div>
  </div>
  </div>
  
  
  
  <div className="  justify-items-center ml-48 mt-16 w-full">
  <input  type="submit" value="cadastro" className="h-12  px-12 w-2/3 m-2 bg-emerald-700 shadow text-lg text-center text-white" />
  </div>
  
  </form>
  </div>
  
  </div>
  )
  }
  