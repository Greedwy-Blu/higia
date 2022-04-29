import Link from 'next/link';
import React, { useState } from 'react'

import Router, { useRouter } from "next/router"
import { usePerfilQuery } from '../../../graphql/generated/graphql';

import Image from 'next/image';

const  imgicon2 = require('../../assets/ph2.jpg');




export const UsuarioPerfil:React.FC =()=>{
    
const {client,  data: PerfilQuery, } = usePerfilQuery();

    return (
     <div className="flex justify-center mb-80 pb-40 ">
  <div className="rounded-md shadow-lg bg-zinc-50 h-50 max-w-4xl">
  <a href="#!" className="overflow-hidden">
  <Image className="rounded-tl-lg  rounded-r-md bg-gray   object-left  absolute mr-4 mt-1" width={110}    height={100} src={imgicon2} alt=""/></a>
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