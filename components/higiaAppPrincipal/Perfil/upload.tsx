
import { gql, useMutation, useQuery, useApolloClient } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';

import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';


import { useCriarImagemMutation } from '../../../graphql/generated/graphql';

export const FileUPload = () =>  {
  const [CriarImagem, {data:CriarImagemMutation}] = useCriarImagemMutation();
 
  const handleFileChange = (e) => {
    const file = e.target.files;
    if (!file) return;
    CriarImagem({ variables: { file } });
  };

  return <input type="file" className="opacity-100" required   onChange={handleFileChange} />;
}