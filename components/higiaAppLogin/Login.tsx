import Link from 'next/link';
import Image from 'next/image';
import {APP_SECRET} from '../../graphql/utils';
const img = require('../assets/ph15.png');

import Router, { useRouter } from "next/router"
import  { useState  } from "react"
import { useForm } from 'react-hook-form';
import { gql, useMutation,useQuery  } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';


const loginMutation = gql`
mutation Login($email: String!, $senha: String!) {
  login(email: $email, senha: $senha) {
    usuario {
      email
      senha
    }
    token
  }
}
`;


const Login: React.FC = () => {

  const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [login, { data, loading, error }] = useMutation(loginMutation);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  



    const onSubmit = async () => {
      try {
          const response = await login({
              variables: {
                  email,
                  senha,
              },
          });
          console.log('onSubmit ~ response', response);
          const token = response.data?.login.token;

          if (token) {
              localStorage.setItem(APP_SECRET, token);
           Router.push('/AppPrincipal')
          }

          // TODO handle failed case
          // if (!accessToken) {

          // }
      } catch (err) {
          console.log('onSubmit ~ err', err);
      }
  };



  return (

    <>


        <div className=" mt-24 sm:mt-24 ">




          <div className="grid   justify-items-start ml-36 pl-32 mb-12">
            <div className="">
              <a className="text-2xl">Faça o login no Higia</a>
              <p className="flex whitespace-nowrap tracking-wide mt-3  ">
                <a>Não tem conta no higia então</a>
                <Link href="/Create">
                  <a className='text-teal-400 ml-2 italic hover:not-italic'>crie uma</a>
                </Link>
              </p>
            </div>
          </div>

         


          <div className="md:grid md:grid-cols-3 md:gap-6 ">
          <div className="grid justify-items-end   text-teal-900">
          <Image className=" max-h-full  "  src={img} alt="description of image" />

            </div>
       
            <div className="mt-24 md:mt-24 md:col-span-2">


              <form    onSubmit={handleSubmit(onSubmit)}
>
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     
                        onChange={(e) => {
                          setEmail(e.target.value);
                      }}
                     />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="senha"
                        id="senha"
                        onChange={(e) => {
                          setSenha(e.target.value);
                      }}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>



                  </div>

                  <div className="  justify-items-center ml-28 mt-8">
                    <div>
                      <button className="h-8  px-6 w-1/3 m-2 bg-emerald-700 shadow text-lg text-center text-white">login</button>
                    </div>

                  </div>


                  


                </div>
               
        
              
              </form>

            </div>
        

          </div>

        </div>

       
              
       
    </>
  );
}

export default Login;