
import { gql, useMutation, useQuery, useApolloClient } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';

import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';


import { useCriarImagemMutation } from '../../../graphql/generated/graphql';

export function UploadFile() {
  const [CriarImagem, {data:CriarImagemMutation}] = useCriarImagemMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
 
  const onSubmit = async (CriarImagemMutation) => {
    const {imagen } =CriarImagemMutation;
        
  const variables ={imagen};
    try {
      toast.promise(CriarImagem({ variables }), {
        loading: 'criando um novo usuario',
        success: 'criado com sucesso!🎉',
        error: `Something went wrong 😥 Please try again - ${error} `,
      });
    
    } catch (err) {
      console.log('onSubmit ~ err', err);
  }
  };

  return(<div> <Toaster /><form   onSubmit={handleSubmit(onSubmit)}> <input type="file" className="opacity-100" required  /></form></div>);
}