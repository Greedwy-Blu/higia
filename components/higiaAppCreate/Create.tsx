import Link from 'next/link';
import Image from 'next/image';

const  img = require('../assets/ph14.jpg');
import Router, { useRouter } from "next/router"
import  { useState } from "react"

import { gql, useMutation } from '@apollo/client';


const usuarioMutation = gql`
mutation ($email: String!, $senha: String!, $sobreNome: String, $cidade: String, $genero: String, $idade: Int, $name: String, $telefone: String) {
  CadastroUsuario(email: $email, senha: $senha, SobreNome: $sobreNome, cidade: $cidade, genero: $genero, idade: $idade, name: $name, telefone: $telefone) {
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
 
    const [name, setName] = useState("")
  const [email, setEmail] = useState("")
 const [SobreNome, setSobreNome] = useState("")
  const [cidade, setCidade] = useState("")
const [genero, setGenero] = useState("")
const [idade, setIdade] = useState("")
const [senha, setSenha] = useState("")
const [telefone, setTelefone] = useState("")


  const [cadastro] = useMutation(usuarioMutation)

  
  return (
   
<>
<div className="grid grid-cols-3 gap-6 ">
   
<div className=" justify-end">     

<Image  className=" shadow-2xl  bg-no-repeat bg-right-top" width={400}    height={855} src={img}alt="description of image"/>
        
     </div>
    
       <form 
       
        onSubmit={async e => {
            e.preventDefault()
            console.log("submit",   SobreNome,  cidade,  email,  genero,  idade,  name,  senha,  telefone)

            await cadastro({
              variables: {
              SobreNome:SobreNome,
      cidade:cidade,
      email:email,
      genero:genero,
      idade:idade,
      name:name,
      senha:senha,
      telefone:telefone,
              },
            })
            Router.push("/Login")
          }}
       
       >
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
                     onChange={e => setName(e.target.value)}
                        value={name}
                      />


</div>

<div className="col-span-2 px-4 "> 

<label htmlFor="sobrenome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sobre nome</label>
    <input type="text" id="sn"  onChange={e => setSobreNome(e.target.value)} className="  focus:ring-indigo-500 focus:border-indigo-500 block w-100 shadow-sm sm:text-sm border-gray-300 rounded-md"     value={SobreNome} />


</div>
</div>
<div className='flex grid col-span-2 '>
<div className=" px-4 "> 

<div className="col-span-2 px-4 "> 

<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
    <input type="text" id="sn"  onChange={e => setEmail(e.target.value)} className="  focus:ring-indigo-500 focus:border-indigo-500 block w-100 shadow-sm sm:text-sm border-gray-300 rounded-md"     value={email} />


</div>

<label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">cidade</label>
    <input type="text" id="cidade"  onChange={e => setCidade(e.target.value)} className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"     value={cidade} />


</div>

<div className=" px-4 "> 

<label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">senha</label>
    <input type="text" id="senha"  onChange={e => setSenha(e.target.value)}  className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"     value={senha} />


</div>



<div className=" px-4 "> 

<label htmlFor="idade" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">idade</label>
    <input type="number" id="idade"  onChange={e => setIdade(e.target.value)} className="  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"     value={idade}  />


</div>


<div className='flex'>


<div className=" px-4 col-span-2"> 

<label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">telefone</label>
    <input type="text" id="celular"  onChange={e => setTelefone(e.target.value)} className="  focus:ring-indigo-500 focus:border-indigo-500 block w-600 shadow-sm sm:text-sm border-gray-300 rounded-md"     value={telefone}  />


</div>

<div className="px-4  col-span-2">
  <div className="mb-3 xl:w-96">
  <label htmlFor="genêro"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">gênero</label>
 
    <select  onChange={e => setGenero(e.target.value)} className="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"     value={genero}>
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

<div className="  justify-items-center ml-28 mt-8">
  <input disabled={!name || !email} type="submit" value="cadastro" className="h-8  px-6 w-1/3 m-2 bg-emerald-700 shadow text-lg text-center text-white" />
</div>

</form>
       </div>
       
  </>
  );
}

export default Create;