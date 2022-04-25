
import * as React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import Script from 'next/script'


import { gql, useMutation,useQuery  } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

import  { useState  } from "react"
import { useForm } from 'react-hook-form';

import { Context } from '../../graphql/context';
import { useParams } from "react-router";

import { usePerfilQuery } from '../../graphql/generated/graphql';
import { request } from 'graphql-request'
import useSWR from 'swr'
import Link from 'next/link';

import Image from 'next/image';
const  imgicon = require('../assets/zyro-image_2_.ico');
import styles from '../geral.module.scss';
import WithAuth from '../Hoc/WithAuth';
  const TePage: NextPage = ()=>{

const{data, error,loading } = usePerfilQuery();




if(loading) return <p>Loading...</p>;



  return (
    <React.Fragment>
<nav className=" flex bg-white px-2 sm:px-4 py-2.5 rounded-none   tracking-wide ">
  
  <a href="#" className="flex justify-start ">
  <Image  className="rounded-full mr-4 border-transparent" width={110}    height={100} src={imgicon}alt="description of image"/>
  
        <span className="self-center text-2xl font-bold whitespace-nowrap text-emerald-900">Higia</span>
    </a>
    <div className="container flex flex-wrap justify-center  items-center mx-auto">
    
   
    <div className="hidden  items-center  w-full md:flex md:w-auto md:order-1 text-base " id="mobile-menu-2">
      <ul className="flex  items-center justify-center   justify-center  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0  md:mr-28">
        <li>
          <a href="#sobre" className="block py-2 pr-4 pl-3 my-4 text-teal-800  text-lg font-medium border-b-2  border-emerald-500 p-1 hover:text-emerald-500  active:text-teal-900 " aria-current="page">inicio</a>
        </li>
        <li>
        <Link href="/Perfil" passHref>
          <a  className="block py-2 pr-4 pl-3 my-4 text-teal-800  text-lg font-medium border-b-2  border-transparent hover:border-emerald-500  p-1  hover:text-emerald-500  active:text-teal-900 transition  duration-300 delay-150">Perfil</a>
       </Link>
        </li>
        <li>
          <a href="#ProdutoOforecido" className="block py-2 pr-4 pl-3  my-4 text-lg font-medium border-b-2   border-transparent hover:border-emerald-500  p-1  text-teal-800  hover:text-emerald-500 active:text-teal-900 transition  duration-300 delay-150">sugestão</a>
        </li>
       
      </ul>
    </div>
    </div>
  
  </nav>
    <form>

	<div className="mt-12 sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input className="w-max text-base text-gray-400 flex-grow 
           px-2 rounded-lg  outline outline-offset-2 outline-0 outline-emerald-500 border-none bg-emerald-100 shadow-sm" type="text" placeholder="Search your domain name" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
					
						<button className="bg-teal-500 shadow-sm text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
        </form>
<div className="text-center mt-24"><p className="text-emerald-900 text-4xl">Explore as novidades de varios profissionais</p></div>
 
  </React.Fragment>
   
  );
}



export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { params } = ctx
  return {
    props: {
      params
    }
  }
}
export default TePage;