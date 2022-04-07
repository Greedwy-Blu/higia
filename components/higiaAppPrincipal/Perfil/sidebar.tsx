import Script from 'next/script'
import Link from 'next/link';
import React, { useState } from 'react'

import Image from 'next/image';
import sidebar from '../../sidebar.module.scss'
import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { GoGear, GoPerson } from "react-icons/go";
import { BsFillPersonBadgeFill, BsArrowBarLeft } from "react-icons/bs";
import { FaBell, FaCameraRetro } from "react-icons/fa";

import { usePerfilQuery, usePerfilQuery } from '../../../graphql/generated/graphql';
const  imgicon = require('../../assets/zyro-image_2_.ico');
const  imgicon2 = require('../../assets/ph2.jpg');

import { gql, useMutation } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';
import { Context } from '../../../graphql/context';

import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const clienteMutation = gql`
mutation ClienteMutation($medicamentos: String, $nivel: Int) {
  Cliente(medicamentos: $medicamentos, nivel: $nivel) {
    id
  }
}`
const PerfilPage:React.FC = ()=>{

  const [medicamentos, setMedicamentos] = useState('');
  const [nivel, setNivel] = useState('');
  const [show, setShow] = useState(false)

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(false);


  const [ ClienteMutation, { data:ClienteMutationData, loading}] =
  useMutation(clienteMutation);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { medicamentos, nivel  } =data;
    
  const variables ={medicamentos, nivel};
    try {
      toast.promise(ClienteMutation({ variables }), {
        loading: 'criando um novo usuario',
        success: 'criado com sucesso!🎉',
        error: `Something went wrong 😥 Please try again -  `,
      });
    
    } catch (error) {
      console.error(error);
    }
  };

const {data, error} = usePerfilQuery()
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
const [toggleViewMode, setToggleViewMode] = useState(false);
const contentClassname = toggleViewMode

 const usuarioPerfil =()=>{
       return (
        <div className="flex justify-center mb-80 pb-40">
  <div className="rounded-md shadow-lg bg-zinc-50 max-w-sm h-50 w-50">
    <a href="#!" className="overflow-hidden">
     <Image className="rounded-tl-lg  rounded-r-md bg-gray   object-left  absolute mr-4 mt-1" width={110}    height={100} src={imgicon2} alt=""/></a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the cars
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-teal-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>)
 }


 const notificacao = () =>{
   return(
     <div className="flex justify-center mb-80 pb-40 mt-4 -mb-3">
      <div id="alert-1" className="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
  <svg className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
    A simple info alert with an <a href="#" className="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
  </div>
  <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
    <span className="sr-only">Close</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>

     </div>
   )
 }


const cliente = () =>{
<div className="flex justify-center mb-80 pb-40">

<form>
  <div className="relative z-0 mb-6 w-full group">
      <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>

  </form>

</div>
}

const [datas, setDatas] = useState([usuarioPerfil(), notificacao(),cliente()]);

     
    
      return (
      
     //@ts-nocheck
      <div className="">
  
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
<a  onClick={() => setToggleViewMode(!toggleViewMode)} className="flex items-center p-2 pl-11 w-full  text-base font-normal text-gray-900  transition duration-75 group hover:bg-gray-100 border-r-4 border-transparent hover:border-emerald-700 transition duration-75 "><FaCameraRetro className="mr-2 h-7 w-7 text-stone-400"/>post</a>
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
<a onClick={() => setCurrent(2)} className="mb-3 mr-2 flex items-center p-2 text-base font-normal hover:bg-slate-100 text-gray-900 border-r-4 border-transparent hover:border-emerald-500 transition duration-75  ">
<span className="flex ml-1 whitespace-nowrap"><GoPerson className="mr-4 h-7 w-7 text-stone-400"/>Cadastro cliente</span>
</a>
</li>
<li className="mb-4">
<a href="#" className="flex items-center p-2 text-base font-normal hover:bg-slate-100 text-gray-900 border-r-4 border-transparent hover:border-emerald-500 transition duration-75">
<span className="flex ml-1 whitespace-nowrap"><BsFillPersonBadgeFill className="mr-4 h-7 w-7 text-stone-400"/>Cadastro profissional</span>
</a>
</li>
<li className="mb-3 mt-4">
<a href="#" className="flex items-center p-2 text-base font-normal  hover:bg-slate-100 text-gray-900  border-r-4 border-transparent hover:border-emerald-500 transition duration-75">
<span className="flex ml-1 whitespace-nowrap"><BsArrowBarLeft className="mr-4 h-7 w-7 text-stone-400"/>  logout</span>
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