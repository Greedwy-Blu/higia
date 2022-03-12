import Link from 'next/link';
import Image from 'next/image';

const  img = require('../assets/ph14.jpg');
import Router, { useRouter } from "next/router"
import  { useState  } from "react"
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';


const usuarioMutation = gql`
mutation ($email: String!, $senha: String!, $SobreNome: String, $cidade: String, $genero: String, $idade: String, $name: String, $telefone: String) {
  CadastroUsuario(email: $email, senha: $senha, SobreNome: $SobreNome, cidade: $cidade, genero: $genero, idade: $idade, name: $name, telefone: $telefone) {
    token
    usuario {
      cidade
      SobreNome
      genero
    email
      id
      idade
      name
      senha
      telefone
    }
  }
}

`;
const Create: React.FC = (props) => {

  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [senha, setSenha] = useState('');
  const [SobreNome, setSobreNome] = useState('');
  
  const [genero, setGenero] = useState('');
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  

  const [CadastroUsuario, { data, loading, error }] =
    useMutation(usuarioMutation);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      const { cidade,SobreNome,genero,email,idade,name,senha,telefone  } =data;
      
    const variables ={cidade,SobreNome,genero,email,idade,name,senha,telefone};
      try {
        toast.promise(CadastroUsuario({ variables }), {
          loading: 'criando novo usuario',
          success: 'criado com sucesso!🎉',
          error: `Something went wrong 😥 Please try again -  ${error}`,
        });
        Router.push('/Login')
      } catch (error) {
        console.error(error);
      }
    };
  

return (
<>

<div className="grid grid-cols-3 gap-6 ">
<Toaster />
<div className=" justify-end">     

<Image  className=" shadow-2xl  bg-no-repeat bg-right-top" width={400}    height={855} src={img}alt="description of image"/>
      
   </div>
  
     <form 
     
     onSubmit={handleSubmit(onSubmit)}

     
     >
       <div className="flex  mt-8  ">
<div className="col-span-2  px-4 mt-2 w-100"> 

<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                     Nome
                    </label>
                    <input
                      type="text"
                     id="name"
                       className=" focus:ring-indigo-500 focus:border-indigo-500 block w-290 shadow-sm sm:text-sm border-gray-300 rounded-md"
                       {...register('name', { required: true })}
                       name="name"
                    />


</div>

<div className="col-span-2 px-4 "> 

<label htmlFor="sobrenome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sobre nome</label>
  <input type="text" id="sn"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-100 shadow-sm sm:text-sm border-gray-300 rounded-md"     
              name="SobreNome"         
              {...register('SobreNome', { required: true })}
                    
                       />


</div>
</div>
<div className='flex grid col-span-2 '>
<div className=" px-4 "> 

<div className="pr-8 px-4 mt-2 mr-8 "> 

<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
  <input type="text" id="sn"   className=" mr-8 pr-8 focus:ring-indigo-500 focus:border-indigo-500 block w-50 shadow-sm sm:text-sm w-full border-gray-300 rounded-md" 
  
  name="email"      
  {...register('email', { required: true })}
                
  />


</div>

<label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">cidade</label>
  <input type="text" id="cidade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  
  name="cidade"    
 
  {...register('cidade', { required: true })}
           
/>


</div>

<div className=" px-4 "> 

<label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">senha</label>
  <input type="text" id="senha"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"      
  
  name="senha"    
 
  {...register('senha', { required: true })}
  />


</div>



<div className=" px-4 "> 

<label htmlFor="idade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">idade</label>
  <input type="number" id="idade" className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"    
  
  
  name="idade"     
 
  {...register('idade', { required: true })}

  />


</div>


<div className='flex'>


<div className=" px-4 col-span-2"> 

<label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
  <input type="text" id="celular"  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"   
  
  
  name="telefone"      
 
  {...register('telefone', { required: true })}


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


    name="genero"         

    {...register('genero', { required: true })}
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

<div className="  justify-items-center ml-48 mt-16">
<input  type="submit" value="cadastro" className="h-12  px-12 w-2/3 m-2 bg-emerald-700 shadow text-lg text-center text-white" />
</div>

</form>
     </div>
     
</>
);
}

export default Create;