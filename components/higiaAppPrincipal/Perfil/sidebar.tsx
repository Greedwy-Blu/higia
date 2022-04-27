import Script from 'next/script'
import Link from 'next/link';
import React, { useState } from 'react'

import Image from 'next/image';
import sidebar from '../../sidebar.module.scss'
import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { GoGear, GoPerson } from "react-icons/go";
import { BsFillPersonBadgeFill, BsArrowBarLeft } from "react-icons/bs";
import { FaBell, FaCameraRetro } from "react-icons/fa";

import Router, { useRouter } from "next/router"
import { usePerfilQuery } from '../../../graphql/generated/graphql';

import { useTodosUsuarioQuery } from '../../../graphql/generated/graphql';

import { useProfissionalMutationMutation } from '../../../graphql/generated/graphql';
const  imgicon = require('../../assets/zyro-image_2_.ico');
const  imgicon2 = require('../../assets/ph2.jpg');

import { gql, useMutation, useQuery } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import WithAuth from '../../Hoc/WithAuth'
import { UsuarioPerfil } from './usuarioPerfil';
import { Notificacao } from './notifica';
import { Cliente } from './clienteCadastro';
import { Profissional } from './profissionalCadastro';


const clienteMutation = gql`
mutation ($medicamentos: String, $nivel: String) {
  Cliente(medicamentos: $medicamentos, nivel: $nivel) {
    id
  }
}`



const PerfilPage:React.FC = ()=>{
  
 const [show, setShow] = useState(false)


  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);

 const {data:TodosUsuario} = useTodosUsuarioQuery()
  const {client,  data: PerfilQuery  } = usePerfilQuery();

  const handleShow = () => {
    (show ? setShow(false) : setShow(true))
}


const toggleAll = () => {
  setShowAll(val => !val);
  setShowCurrent(false);
};

const toggleCurrent = () => {
  if (!showCurrent) {
    setShowCurrent(true);
    setShowAll(false);
    return;
  }
};

const setCurrent = index => {
  setCurrentIdx(index);
  toggleCurrent();
};




{(() => {
  

 

})()}

 

function Logout(){

  client.resetStore()
  localStorage.removeItem(APP_SECRET)
Router.push('/Login')
}

       
const [datas, setDatas] = useState([UsuarioPerfil(), Notificacao(),Cliente(), Profissional()]);
  
    
    return (
     <div>   
    
<nav className=" flex bg-white px-2 sm:px-4 py-2.5 rounded-none    tracking-wide ">
  
  <a href="#" className="flex justify-start ">
  <Image  className="rounded-full mr-4 border-transparent" width={110}    height={100} src={imgicon}alt="description of image"/>
  
        <span className="self-center text-2xl font-bold whitespace-nowrap text-emerald-900">Higia</span>
    </a>
    <div className="container flex flex-wrap justify-center  items-center mx-auto">
    
   
    <div className="hidden  items-center  w-full md:flex md:w-auto md:order-1 text-base " id="mobile-menu-2">
      <ul className="flex  items-center justify-center   justify-center  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:mr-28">
        <li>
              <Link href="/AppPrincipal">
          <a  className="block py-2 pr-4 pl-3 my-4 text-teal-800  text-lg font-medium border-b-2   border-transparent hover:border-emerald-500 p-1 hover:text-emerald-500  active:text-teal-900 transition  duration-300 delay-150" aria-current="page">inicio</a>
        </Link>
        </li>
        <li>
        <Link href="/Perfil" passHref>
          <a  className="block py-2 pr-4 pl-3 my-4 text-teal-800  text-lg font-medium border-b-2  border-b-2  border-emerald-500 p-1  hover:text-emerald-500  active:text-teal-900 transition  duration-300 delay-150">Perfil</a>
       </Link>
        </li>
        <li>
          <a href="#ProdutoOforecido" className="block py-2 pr-4 pl-3  my-4 text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1  text-teal-800  hover:text-emerald-500 active:text-teal-900 transition  duration-300 delay-150">sugestão</a>
        </li>
       
      </ul>
    </div>
    </div>
  
  </nav>
 


   



<aside  className="w-64 h-400 max-w-full max-h-full inline-flex  " aria-label="Sidebar"  >

<div className="overflow-y-auto py-4 px-3 bg-transparent  ">
<ul className="space-y-2">


<li className="mb-3">

<button onClick={handleShow} className="flex items-center hover:bg-slate-100 p-2 w-full text-base font-normal text-gray-900 border-r-4 border-transparent hover:border-emerald-500 transition duration-75 mb-4" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" >
<span className="flex ml-1 text-left whitespace-nowrap" sidebar-toggle-item=""><GoGear className="mr-2 h-7 w-7 text-stone-400"/>Configuração</span>
<svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
<div className={show ? "block" : "hidden"}>
<ul id="submenu" className="  py-2 space-y-2">
<li>
<a onClick={() => setCurrent(1)} className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 border-r-4 border-transparent hover:border-emerald-700 transition duration-75"><FaBell className="mr-2 h-7 w-7 text-stone-400"/>notificação</a>
</li>
<li>
<a   className="flex items-center p-2 pl-11 w-full  text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 border-r-4 border-transparent hover:border-emerald-700 transition duration-75 "><FaCameraRetro className="mr-2 h-7 w-7 text-stone-400"/>post</a>
</li>
<li>
<a  onClick={() => setCurrent(0)} className="pl-11 w-full  flex items-center p-2 text-base font-normal hover:bg-slate-100 text-gray-900 border-r-4 border-transparent hover:border-emerald-700 transition duration-75  ">
<span  className="flex ml-1 whitespace-nowrap"><GoPerson className="mr-4 h-7 w-7 text-stone-400"/> usuario</span>

</a>
</li>
</ul>
</div>

</li>



<li className="mb-3">
<a  className="mb-3 mr-2 flex items-center p-2 text-base font-normal hover:bg-slate-100 text-gray-900 border-r-4 border-transparent hover:border-emerald-500 transition duration-75  ">
<span onClick={() => setCurrent(2)} className="flex ml-1 whitespace-nowrap"><GoPerson className="mr-4 h-7 w-7 text-stone-400"/>Cadastro cliente</span>
</a>
</li>
<li className="mb-4">
<a onClick={() => setCurrent(3)} className="flex items-center p-2 text-base font-normal hover:bg-slate-100 text-gray-900 border-r-4 border-transparent hover:border-emerald-500 transition duration-75">
<span className="flex ml-1 whitespace-nowrap"><BsFillPersonBadgeFill className="mr-4 h-7 w-7 text-stone-400"/>Cadastro profissional</span>
</a>
</li>
<li className="mb-3 mt-4">
<a  className="flex items-center p-2 text-base font-normal  hover:bg-slate-100 text-gray-900  border-r-4 border-transparent hover:border-emerald-500 transition duration-75">
<span             onClick={() =>  Logout()   }
 className="flex ml-1 whitespace-nowrap"><BsArrowBarLeft className="mr-4 h-7 w-7 text-stone-400"/>  logout</span>
</a>
</li>

</ul>
</div>
</aside>

{showCurrent ? <div className="mb-80 pb-40 inline-block pl-40 ml-20 fixed ">{datas[currentIdx]}</div> : null}

     </div>
   
   );
    
    
    }



    export default  PerfilPage;