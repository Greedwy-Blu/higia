
import * as React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'


import { gql, useMutation,useQuery  } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

import  { useState  } from "react"
import { useForm } from 'react-hook-form';
import Image from 'next/image';

import { Context } from '../../graphql/context';
import { ParamTypes } from "../../graphql/ParamTypes.type";
import { Usuario } from "../../graphql/Usuario.type";
import { useParams } from "react-router";

import { usePerfilQuery } from '../../graphql/generated/graphql';
import { request } from 'graphql-request'
import useSWR from 'swr'

  const TePage: NextPage = ()=>{

const{data, error } = usePerfilQuery();







  return (
    <React.Fragment>
 
<nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <div className="container-fluid">
      <a className="text-xl text-black font-semibold" href="#">Navbar</a>
    </div>
  </div>
</nav>
<div>{ data?.perfil?.id }</div>

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