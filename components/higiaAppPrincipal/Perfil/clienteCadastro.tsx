
import { gql, useMutation, useQuery } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import React, { useState } from 'react'

const clienteMutation = gql`
mutation ($medicamentos: String, $nivel: String) {
  Cliente(medicamentos: $medicamentos, nivel: $nivel) {
    id
  }
}`

  export const Cliente:React.FC = ()=> {
   
    
  const [ Cliente, { data:ClienteMutationData, loading,error}] = useMutation(clienteMutation);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
     
      const onSubmit = async (ClienteMutationData) => {
        const { medicamentos, nivel  } =ClienteMutationData;
        
      const variables ={medicamentos, nivel};
        try {
          toast.promise(Cliente({ variables }), {
            loading: 'criando um novo usuario',
            success: 'criado com sucesso!🎉',
            error: `Something went wrong 😥 Please try again - ${error} `,
          });
        
        } catch (err) {
          console.log('onSubmit ~ err', err);
      }
      };
    return(
    <div className="flex justify-center mb-40 pb-40 ml-24">
    <Toaster />
    <form    onSubmit={handleSubmit(onSubmit)}
    className="grid justify-items-center">
    <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medicamentos</label>
    <input type="text" id="medicamentos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  name="medicamentos"      {...register('medicamentos', { required: true })}/>
    </div>
    <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nivel</label>
    <input type="text" id="nivel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nivel"    {...register('nivel', { required: true })}/>
    </div>
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
    
    </form>
    
    </div>);
    }