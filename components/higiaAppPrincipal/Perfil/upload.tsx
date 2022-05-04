
import { gql, useMutation, useQuery, useApolloClient } from '@apollo/client';
import { APP_SECRET, getUserId} from '../../../graphql/utils';


import { useCriarImagemMutation } from '../../../graphql/generated/graphql';

export function UploadFile() {
  const [CriarImagem, {data:CriarImagemMutation}] = useCriarImagemMutation();
  const apolloClient = useApolloClient();

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

  return <input type="file" className="opacity-100" required onChange={onChange} />;
}