import Link from 'next/link';
import React, { useEffect, useRef, useState , Fragment} from 'react'
import ReactDOM from "react-dom";

import Router, { useRouter } from "next/router"
import { usePerfilQuery } from '../../../graphql/generated/graphql';

import Image from 'next/image';

const  imgicon2 = require('../../assets/ph2.jpg');
import { gql, useApolloClient, useMutation } from "@apollo/client";
import styled from "styled-components";
import { Dialog, Transition } from '@headlessui/react'

import { useCriarImagemMutation } from '../../../graphql/generated/graphql';



function MyModal() {
  const [CriarImagem, {data:CriarImagemMutation}] = useCriarImagemMutation();
 
const handleFileChange = (e) => {

  const imagen = e.target.files[0];
  if (!imagen) return;
  CriarImagem({ variables: { imagen } });
};

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className=" rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >

<div className="fixed inset-0 bg-black/30 blur-sm" aria-hidden="true" />


      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
        <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                    x
                    </button>
          <Dialog.Title><input type="file" className="" required   onChange={handleFileChange} /></Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>

    </>
  )
}

export const UsuarioPerfil:React.FC =()=>{
  
 const [CriarImagem, {data:CriarImagemMutation}] = useCriarImagemMutation();
  const apolloClient = useApolloClient();

 
  

  

const {client,  data: PerfilQuery, } = usePerfilQuery();

    return (
     
     <div className="flex justify-center mb-80 pb-40 ">
    
  <div className="rounded-md shadow-lg bg-zinc-50 h-50 max-w-4xl">
  <a href="#!" className="overflow-hidden">


  {(() => {

  const idimagem = () =>{
    const r = PerfilQuery?.perfil?.imgem_perfis?.map(n => n?.id)
    return Number(r)
  
  }

 
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) =>
    validity.valid &&
    CriarImagem({ variables: { file } }).then(() => {
      apolloClient.resetStore();
    });

if(idimagem() == 0){
 
  

return(
    <div>

      <Image   
      className="rounded-tl-lg  rounded-r-md bg-gray   object-left  absolute mr-4 mt-1" width={110}    height={100} src={imgicon2} alt="" /> 




</div>
)
}else{
    return(
        <div>
        
        <Image     className="rounded-tl-lg  rounded-r-md bg-gray   object-left  absolute mr-4 mt-1" width={110}    height={100} src={imgicon2} alt="" /> 
        <MyModal/>


       
        </div>

    )
}
 

})()}
</a>
  <div className="p-6">
   <h5 className="text-zinc-900 text-xl font-medium mb-2">Perfil</h5>
   <p className="text-zinc-400 text-base mb-4 mr-4 space-x-4">
   <div className="flex text-lg">
  <div className="flex-auto w-42 space-x-4 mx-2"><span  className="text-zinc-700  text-center ml-4 mr-2"><a>Nome:</a></span>{PerfilQuery?.perfil?.name}</div>
  <div className="flex-auto w-42  space-x-4 mx-2"><span className="text-zinc-700  text-center ml-4 mr-2"><a>SobreNome:</a></span>{PerfilQuery?.perfil?.SobreNome}</div>
  <div className="flex-auto w-42 space-x-4 mx-2"><span  className="text-zinc-700 text-center ml-12 mr-2"><a>Idade:</a></span>{PerfilQuery?.perfil?.idade}</div>
  
   </div>
  
  <div className="flex text-lg">
  <div className="flex-auto w-42 space-x-4 mx-2 ml-2"><span  className="text-zinc-700  text-center mr-2"><a>Telefone:</a></span>{PerfilQuery?.perfil?.telefone}</div>
  <div className="flex-auto w-42 space-x-4 mx-2 ml-2"><span className="text-zinc-700  text-center ml-3 mr-3"><a>Cidade:</a></span>{PerfilQuery?.perfil?.cidade}</div>
  <div className="flex-auto w-42 space-x-4 mx-2 ml-2 mr-2"><span  className="text-zinc-700 text-center ml-2 mr-2"><a className="ml-2">Genero:</a></span>{PerfilQuery?.perfil?.genero}</div>
  
  </div>
   </p>
    
  <div className="grid justify-items-center ">
   <button type="button" className=" inline-block px-6 py-2.5 bg-teal-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Atualizar conta</button>
  </div>
  </div>
  </div>
  </div>)
  }