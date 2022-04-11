import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  usuario?: Maybe<Usuario>;
};

export type Cliente = {
  __typename?: 'Cliente';
  comentario_post?: Maybe<Array<Maybe<Comentario_Post>>>;
  id?: Maybe<Scalars['Int']>;
  medicamentos?: Maybe<Scalars['String']>;
  nivel?: Maybe<Scalars['String']>;
  notificacao_comentario?: Maybe<Array<Maybe<Notificacao_Comentario>>>;
  usuario?: Maybe<Array<Maybe<Usuario>>>;
};

export type Comentario_Post = {
  __typename?: 'Comentario_Post';
  cliente?: Maybe<Array<Maybe<Cliente>>>;
  coteudo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nota?: Maybe<Scalars['Int']>;
  notificacao_comentario?: Maybe<Array<Maybe<Notificacao_Comentario>>>;
  profissional?: Maybe<Array<Maybe<Profissional>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CadastroUsuario: AuthPayload;
  Cliente?: Maybe<Cliente>;
  Profissional?: Maybe<Profissional>;
  comentarioPost?: Maybe<Comentario_Post>;
  criarImagem?: Maybe<Imagem_Perfil>;
  delatecomentarioPost?: Maybe<Comentario_Post>;
  deleteNotificacao?: Maybe<Notificacao_Comentario>;
  login?: Maybe<AuthPayload>;
  notificacaoComentario?: Maybe<Notificacao_Comentario>;
  updateCliente?: Maybe<Cliente>;
  updateProfissional?: Maybe<Profissional>;
  updateUsuario?: Maybe<Usuario>;
  updatecomentarioPost?: Maybe<Comentario_Post>;
  updateimagem?: Maybe<Imagem_Perfil>;
};


export type MutationCadastroUsuarioArgs = {
  SobreNome?: InputMaybe<Scalars['String']>;
  cidade?: InputMaybe<Scalars['String']>;
  cliente?: InputMaybe<ClienteCreateInput>;
  email: Scalars['String'];
  genero?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  idade?: InputMaybe<Scalars['String']>;
  imgem_perfil?: InputMaybe<ImgemPerfil>;
  name?: InputMaybe<Scalars['String']>;
  profissional?: InputMaybe<ProfissionalCreateInput>;
  senha: Scalars['String'];
  telefone?: InputMaybe<Scalars['String']>;
};


export type MutationClienteArgs = {
  medicamentos?: InputMaybe<Scalars['String']>;
  nivel?: InputMaybe<Scalars['String']>;
};


export type MutationProfissionalArgs = {
  ambiente: Scalars['String'];
  especial: Scalars['String'];
  especialidade: Scalars['String'];
  grupo: Scalars['String'];
  idade: Scalars['String'];
  imagens: Scalars['String'];
  localatendimento: Scalars['String'];
  qualificacao: Scalars['String'];
  raio: Scalars['String'];
  servico: Scalars['String'];
};


export type MutationComentarioPostArgs = {
  coteudo?: InputMaybe<Scalars['String']>;
  nota?: InputMaybe<Scalars['Int']>;
};


export type MutationCriarImagemArgs = {
  imagen?: InputMaybe<Scalars['String']>;
};


export type MutationDelatecomentarioPostArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationDeleteNotificacaoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  senha: Scalars['String'];
};


export type MutationNotificacaoComentarioArgs = {
  comentario?: InputMaybe<Scalars['String']>;
  imagem_perfil?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateClienteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateProfissionalArgs = {
  ambiente?: InputMaybe<Scalars['String']>;
  especial?: InputMaybe<Scalars['String']>;
  especialidade?: InputMaybe<Scalars['String']>;
  grupo?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  idade?: InputMaybe<Scalars['String']>;
  imagens?: InputMaybe<Scalars['String']>;
  localatendimento?: InputMaybe<Scalars['String']>;
  qualificacao?: InputMaybe<Scalars['String']>;
  raio?: InputMaybe<Scalars['String']>;
  servico?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUsuarioArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdatecomentarioPostArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateimagemArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Notificacao_Comentario = {
  __typename?: 'Notificacao_Comentario';
  cliente?: Maybe<Array<Maybe<Cliente>>>;
  comentario?: Maybe<Scalars['String']>;
  comentario_post?: Maybe<Array<Maybe<Comentario_Post>>>;
  id?: Maybe<Scalars['Int']>;
  imgem_perfil?: Maybe<Scalars['String']>;
};

export type Profissional = {
  __typename?: 'Profissional';
  ambiente?: Maybe<Scalars['String']>;
  comentario_post?: Maybe<Array<Maybe<Comentario_Post>>>;
  especial?: Maybe<Scalars['String']>;
  especialidade?: Maybe<Scalars['String']>;
  grupo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  idade?: Maybe<Scalars['String']>;
  imagens?: Maybe<Scalars['String']>;
  localatendimento?: Maybe<Scalars['String']>;
  qualificacao?: Maybe<Scalars['String']>;
  raio?: Maybe<Scalars['String']>;
  servico?: Maybe<Scalars['String']>;
  usuario?: Maybe<Array<Maybe<Usuario>>>;
};

export type ProfissionalWhereUniqueInput = {
  ambiente?: InputMaybe<Scalars['String']>;
  especial?: InputMaybe<Scalars['String']>;
  especialidade?: InputMaybe<Scalars['String']>;
  grupo?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  idade?: InputMaybe<Scalars['Int']>;
  imagens?: InputMaybe<Scalars['String']>;
  localatendimento?: InputMaybe<Scalars['String']>;
  qualificacao?: InputMaybe<Scalars['String']>;
  raio?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  TodosUsuario?: Maybe<Array<Maybe<Usuario>>>;
  perfil?: Maybe<Usuario>;
  test?: Maybe<Array<Maybe<Usuario>>>;
};

export type Usuario = {
  __typename?: 'Usuario';
  Profissionais?: Maybe<Array<Maybe<Profissional>>>;
  SobreNome?: Maybe<Scalars['String']>;
  cidade?: Maybe<Scalars['String']>;
  clientes?: Maybe<Array<Maybe<Cliente>>>;
  email?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  idade?: Maybe<Scalars['String']>;
  imgem_perfis?: Maybe<Array<Maybe<Imagem_Perfil>>>;
  name?: Maybe<Scalars['String']>;
  senha?: Maybe<Scalars['String']>;
  telefone?: Maybe<Scalars['String']>;
};

export type UsuarioCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  relacionamentosUsuariom?: InputMaybe<Array<InputMaybe<ProfissionalCreateInput>>>;
  senha?: InputMaybe<Scalars['String']>;
};

export type ClienteCreateInput = {
  id: Scalars['Int'];
  medicamentos?: InputMaybe<Scalars['String']>;
  nivel?: InputMaybe<Scalars['Int']>;
};

export type Imagem_Perfil = {
  __typename?: 'imagem_perfil';
  id?: Maybe<Scalars['Int']>;
  imagen?: Maybe<Scalars['String']>;
  usuario?: Maybe<Array<Maybe<Usuario>>>;
};

export type ImgemPerfil = {
  id?: InputMaybe<Scalars['Int']>;
  imagen?: InputMaybe<Scalars['String']>;
};

export type ProfissionalCreateInput = {
  UsuarioId?: InputMaybe<Scalars['Int']>;
  ambiente?: InputMaybe<Scalars['String']>;
  especial?: InputMaybe<Scalars['String']>;
  especialidade?: InputMaybe<Scalars['String']>;
  grupo?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  idade?: InputMaybe<Scalars['String']>;
  imagens?: InputMaybe<Scalars['String']>;
  localatendimento?: InputMaybe<Scalars['String']>;
  qualificacao?: InputMaybe<Scalars['String']>;
  raio?: InputMaybe<Scalars['Int']>;
};

export type CadastroUsuarioMutationVariables = Exact<{
  email: Scalars['String'];
  senha: Scalars['String'];
  sobreNome?: InputMaybe<Scalars['String']>;
  cidade?: InputMaybe<Scalars['String']>;
  genero?: InputMaybe<Scalars['String']>;
  idade?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  telefone?: InputMaybe<Scalars['String']>;
}>;


export type CadastroUsuarioMutation = { __typename?: 'Mutation', CadastroUsuario: { __typename?: 'AuthPayload', token?: string | null, usuario?: { __typename?: 'Usuario', telefone?: string | null, senha?: string | null, name?: string | null, idade?: string | null, genero?: string | null, email?: string | null, cidade?: string | null, SobreNome?: string | null } | null } };

export type ClienteMutationMutationVariables = Exact<{
  medicamentos?: InputMaybe<Scalars['String']>;
  nivel?: InputMaybe<Scalars['String']>;
}>;


export type ClienteMutationMutation = { __typename?: 'Mutation', Cliente?: { __typename?: 'Cliente', id?: number | null, medicamentos?: string | null, usuario?: Array<{ __typename?: 'Usuario', id?: number | null } | null> | null, comentario_post?: Array<{ __typename?: 'Comentario_Post', id?: number | null } | null> | null, notificacao_comentario?: Array<{ __typename?: 'Notificacao_Comentario', id?: number | null } | null> | null } | null };

export type UpdateClienteMutationMutationVariables = Exact<{
  updateClienteId?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateClienteMutationMutation = { __typename?: 'Mutation', updateCliente?: { __typename?: 'Cliente', id?: number | null, medicamentos?: string | null, nivel?: string | null } | null };

export type DelatecomentarioPostMutationVariables = Exact<{
  delatecomentarioPostId?: InputMaybe<Scalars['Int']>;
}>;


export type DelatecomentarioPostMutation = { __typename?: 'Mutation', delatecomentarioPost?: { __typename?: 'Comentario_Post', id?: number | null } | null };

export type ComentarioPostMutationVariables = Exact<{
  coteudo?: InputMaybe<Scalars['String']>;
  nota?: InputMaybe<Scalars['Int']>;
}>;


export type ComentarioPostMutation = { __typename?: 'Mutation', comentarioPost?: { __typename?: 'Comentario_Post', id?: number | null } | null };

export type UpdatecomentarioPostMutationVariables = Exact<{
  updatecomentarioPostId?: InputMaybe<Scalars['Int']>;
}>;


export type UpdatecomentarioPostMutation = { __typename?: 'Mutation', updatecomentarioPost?: { __typename?: 'Comentario_Post', id?: number | null } | null };

export type CriarImagemMutationVariables = Exact<{
  imagen?: InputMaybe<Scalars['String']>;
}>;


export type CriarImagemMutation = { __typename?: 'Mutation', criarImagem?: { __typename?: 'imagem_perfil', id?: number | null, usuario?: Array<{ __typename?: 'Usuario', id?: number | null } | null> | null } | null };

export type UpdateimagemMutationVariables = Exact<{
  updateimagemId?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateimagemMutation = { __typename?: 'Mutation', updateimagem?: { __typename?: 'imagem_perfil', id?: number | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  senha: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null, usuario?: { __typename?: 'Usuario', telefone?: string | null, senha?: string | null, name?: string | null, idade?: string | null, id?: number | null, genero?: string | null, email?: string | null, cidade?: string | null, SobreNome?: string | null } | null } | null };

export type DeleteNotificacaoMutationVariables = Exact<{
  deleteNotificacaoId?: InputMaybe<Scalars['Int']>;
}>;


export type DeleteNotificacaoMutation = { __typename?: 'Mutation', deleteNotificacao?: { __typename?: 'Notificacao_Comentario', id?: number | null } | null };

export type NotificacaoComentarioMutationVariables = Exact<{
  comentario?: InputMaybe<Scalars['String']>;
  imagemPerfil?: InputMaybe<Scalars['String']>;
}>;


export type NotificacaoComentarioMutation = { __typename?: 'Mutation', notificacaoComentario?: { __typename?: 'Notificacao_Comentario', id?: number | null, comentario_post?: Array<{ __typename?: 'Comentario_Post', id?: number | null } | null> | null, cliente?: Array<{ __typename?: 'Cliente', id?: number | null } | null> | null } | null };

export type ProfissionalMutationMutationVariables = Exact<{
  ambiente: Scalars['String'];
  especial: Scalars['String'];
  servico: Scalars['String'];
  especialidade: Scalars['String'];
  grupo: Scalars['String'];
  idade: Scalars['String'];
  imagens: Scalars['String'];
  localatendimento: Scalars['String'];
  qualificacao: Scalars['String'];
  raio: Scalars['String'];
}>;


export type ProfissionalMutationMutation = { __typename?: 'Mutation', Profissional?: { __typename?: 'Profissional', id?: number | null } | null };

export type UpdateProfissionalMutationVariables = Exact<{
  ambiente?: InputMaybe<Scalars['String']>;
  especial?: InputMaybe<Scalars['String']>;
  grupo?: InputMaybe<Scalars['String']>;
  especialidade?: InputMaybe<Scalars['String']>;
  idade?: InputMaybe<Scalars['String']>;
  imagens?: InputMaybe<Scalars['String']>;
  localatendimento?: InputMaybe<Scalars['String']>;
  qualificacao?: InputMaybe<Scalars['String']>;
  servico?: InputMaybe<Scalars['String']>;
  raio?: InputMaybe<Scalars['String']>;
  updateProfissionalId?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateProfissionalMutation = { __typename?: 'Mutation', updateProfissional?: { __typename?: 'Profissional', id?: number | null } | null };

export type PerfilQueryVariables = Exact<{ [key: string]: never; }>;


export type PerfilQuery = { __typename?: 'Query', perfil?: { __typename?: 'Usuario', id?: number | null } | null };

export type TodosUsuarioQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosUsuarioQuery = { __typename?: 'Query', TodosUsuario?: Array<{ __typename?: 'Usuario', id?: number | null } | null> | null };


export const CadastroUsuarioDocument = gql`
    mutation cadastroUsuario($email: String!, $senha: String!, $sobreNome: String, $cidade: String, $genero: String, $idade: String, $name: String, $telefone: String) {
  CadastroUsuario(
    email: $email
    senha: $senha
    SobreNome: $sobreNome
    cidade: $cidade
    genero: $genero
    idade: $idade
    name: $name
    telefone: $telefone
  ) {
    usuario {
      telefone
      senha
      name
      idade
      genero
      email
      cidade
      SobreNome
    }
    token
  }
}
    `;
export type CadastroUsuarioMutationFn = Apollo.MutationFunction<CadastroUsuarioMutation, CadastroUsuarioMutationVariables>;

/**
 * __useCadastroUsuarioMutation__
 *
 * To run a mutation, you first call `useCadastroUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCadastroUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cadastroUsuarioMutation, { data, loading, error }] = useCadastroUsuarioMutation({
 *   variables: {
 *      email: // value for 'email'
 *      senha: // value for 'senha'
 *      sobreNome: // value for 'sobreNome'
 *      cidade: // value for 'cidade'
 *      genero: // value for 'genero'
 *      idade: // value for 'idade'
 *      name: // value for 'name'
 *      telefone: // value for 'telefone'
 *   },
 * });
 */
export function useCadastroUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CadastroUsuarioMutation, CadastroUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CadastroUsuarioMutation, CadastroUsuarioMutationVariables>(CadastroUsuarioDocument, options);
      }
export type CadastroUsuarioMutationHookResult = ReturnType<typeof useCadastroUsuarioMutation>;
export type CadastroUsuarioMutationResult = Apollo.MutationResult<CadastroUsuarioMutation>;
export type CadastroUsuarioMutationOptions = Apollo.BaseMutationOptions<CadastroUsuarioMutation, CadastroUsuarioMutationVariables>;
export const ClienteMutationDocument = gql`
    mutation ClienteMutation($medicamentos: String, $nivel: String) {
  Cliente(medicamentos: $medicamentos, nivel: $nivel) {
    id
    medicamentos
    usuario {
      id
    }
    comentario_post {
      id
    }
    notificacao_comentario {
      id
    }
  }
}
    `;
export type ClienteMutationMutationFn = Apollo.MutationFunction<ClienteMutationMutation, ClienteMutationMutationVariables>;

/**
 * __useClienteMutationMutation__
 *
 * To run a mutation, you first call `useClienteMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClienteMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clienteMutationMutation, { data, loading, error }] = useClienteMutationMutation({
 *   variables: {
 *      medicamentos: // value for 'medicamentos'
 *      nivel: // value for 'nivel'
 *   },
 * });
 */
export function useClienteMutationMutation(baseOptions?: Apollo.MutationHookOptions<ClienteMutationMutation, ClienteMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClienteMutationMutation, ClienteMutationMutationVariables>(ClienteMutationDocument, options);
      }
export type ClienteMutationMutationHookResult = ReturnType<typeof useClienteMutationMutation>;
export type ClienteMutationMutationResult = Apollo.MutationResult<ClienteMutationMutation>;
export type ClienteMutationMutationOptions = Apollo.BaseMutationOptions<ClienteMutationMutation, ClienteMutationMutationVariables>;
export const UpdateClienteMutationDocument = gql`
    mutation updateClienteMutation($updateClienteId: Int) {
  updateCliente(id: $updateClienteId) {
    id
    medicamentos
    nivel
  }
}
    `;
export type UpdateClienteMutationMutationFn = Apollo.MutationFunction<UpdateClienteMutationMutation, UpdateClienteMutationMutationVariables>;

/**
 * __useUpdateClienteMutationMutation__
 *
 * To run a mutation, you first call `useUpdateClienteMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClienteMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClienteMutationMutation, { data, loading, error }] = useUpdateClienteMutationMutation({
 *   variables: {
 *      updateClienteId: // value for 'updateClienteId'
 *   },
 * });
 */
export function useUpdateClienteMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClienteMutationMutation, UpdateClienteMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClienteMutationMutation, UpdateClienteMutationMutationVariables>(UpdateClienteMutationDocument, options);
      }
export type UpdateClienteMutationMutationHookResult = ReturnType<typeof useUpdateClienteMutationMutation>;
export type UpdateClienteMutationMutationResult = Apollo.MutationResult<UpdateClienteMutationMutation>;
export type UpdateClienteMutationMutationOptions = Apollo.BaseMutationOptions<UpdateClienteMutationMutation, UpdateClienteMutationMutationVariables>;
export const DelatecomentarioPostDocument = gql`
    mutation DelatecomentarioPost($delatecomentarioPostId: Int) {
  delatecomentarioPost(id: $delatecomentarioPostId) {
    id
  }
}
    `;
export type DelatecomentarioPostMutationFn = Apollo.MutationFunction<DelatecomentarioPostMutation, DelatecomentarioPostMutationVariables>;

/**
 * __useDelatecomentarioPostMutation__
 *
 * To run a mutation, you first call `useDelatecomentarioPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelatecomentarioPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delatecomentarioPostMutation, { data, loading, error }] = useDelatecomentarioPostMutation({
 *   variables: {
 *      delatecomentarioPostId: // value for 'delatecomentarioPostId'
 *   },
 * });
 */
export function useDelatecomentarioPostMutation(baseOptions?: Apollo.MutationHookOptions<DelatecomentarioPostMutation, DelatecomentarioPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DelatecomentarioPostMutation, DelatecomentarioPostMutationVariables>(DelatecomentarioPostDocument, options);
      }
export type DelatecomentarioPostMutationHookResult = ReturnType<typeof useDelatecomentarioPostMutation>;
export type DelatecomentarioPostMutationResult = Apollo.MutationResult<DelatecomentarioPostMutation>;
export type DelatecomentarioPostMutationOptions = Apollo.BaseMutationOptions<DelatecomentarioPostMutation, DelatecomentarioPostMutationVariables>;
export const ComentarioPostDocument = gql`
    mutation ComentarioPost($coteudo: String, $nota: Int) {
  comentarioPost(coteudo: $coteudo, nota: $nota) {
    id
  }
}
    `;
export type ComentarioPostMutationFn = Apollo.MutationFunction<ComentarioPostMutation, ComentarioPostMutationVariables>;

/**
 * __useComentarioPostMutation__
 *
 * To run a mutation, you first call `useComentarioPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useComentarioPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [comentarioPostMutation, { data, loading, error }] = useComentarioPostMutation({
 *   variables: {
 *      coteudo: // value for 'coteudo'
 *      nota: // value for 'nota'
 *   },
 * });
 */
export function useComentarioPostMutation(baseOptions?: Apollo.MutationHookOptions<ComentarioPostMutation, ComentarioPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ComentarioPostMutation, ComentarioPostMutationVariables>(ComentarioPostDocument, options);
      }
export type ComentarioPostMutationHookResult = ReturnType<typeof useComentarioPostMutation>;
export type ComentarioPostMutationResult = Apollo.MutationResult<ComentarioPostMutation>;
export type ComentarioPostMutationOptions = Apollo.BaseMutationOptions<ComentarioPostMutation, ComentarioPostMutationVariables>;
export const UpdatecomentarioPostDocument = gql`
    mutation UpdatecomentarioPost($updatecomentarioPostId: Int) {
  updatecomentarioPost(id: $updatecomentarioPostId) {
    id
  }
}
    `;
export type UpdatecomentarioPostMutationFn = Apollo.MutationFunction<UpdatecomentarioPostMutation, UpdatecomentarioPostMutationVariables>;

/**
 * __useUpdatecomentarioPostMutation__
 *
 * To run a mutation, you first call `useUpdatecomentarioPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatecomentarioPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatecomentarioPostMutation, { data, loading, error }] = useUpdatecomentarioPostMutation({
 *   variables: {
 *      updatecomentarioPostId: // value for 'updatecomentarioPostId'
 *   },
 * });
 */
export function useUpdatecomentarioPostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatecomentarioPostMutation, UpdatecomentarioPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatecomentarioPostMutation, UpdatecomentarioPostMutationVariables>(UpdatecomentarioPostDocument, options);
      }
export type UpdatecomentarioPostMutationHookResult = ReturnType<typeof useUpdatecomentarioPostMutation>;
export type UpdatecomentarioPostMutationResult = Apollo.MutationResult<UpdatecomentarioPostMutation>;
export type UpdatecomentarioPostMutationOptions = Apollo.BaseMutationOptions<UpdatecomentarioPostMutation, UpdatecomentarioPostMutationVariables>;
export const CriarImagemDocument = gql`
    mutation CriarImagem($imagen: String) {
  criarImagem(imagen: $imagen) {
    id
    usuario {
      id
    }
  }
}
    `;
export type CriarImagemMutationFn = Apollo.MutationFunction<CriarImagemMutation, CriarImagemMutationVariables>;

/**
 * __useCriarImagemMutation__
 *
 * To run a mutation, you first call `useCriarImagemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCriarImagemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [criarImagemMutation, { data, loading, error }] = useCriarImagemMutation({
 *   variables: {
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCriarImagemMutation(baseOptions?: Apollo.MutationHookOptions<CriarImagemMutation, CriarImagemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CriarImagemMutation, CriarImagemMutationVariables>(CriarImagemDocument, options);
      }
export type CriarImagemMutationHookResult = ReturnType<typeof useCriarImagemMutation>;
export type CriarImagemMutationResult = Apollo.MutationResult<CriarImagemMutation>;
export type CriarImagemMutationOptions = Apollo.BaseMutationOptions<CriarImagemMutation, CriarImagemMutationVariables>;
export const UpdateimagemDocument = gql`
    mutation Updateimagem($updateimagemId: Int) {
  updateimagem(id: $updateimagemId) {
    id
  }
}
    `;
export type UpdateimagemMutationFn = Apollo.MutationFunction<UpdateimagemMutation, UpdateimagemMutationVariables>;

/**
 * __useUpdateimagemMutation__
 *
 * To run a mutation, you first call `useUpdateimagemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateimagemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateimagemMutation, { data, loading, error }] = useUpdateimagemMutation({
 *   variables: {
 *      updateimagemId: // value for 'updateimagemId'
 *   },
 * });
 */
export function useUpdateimagemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateimagemMutation, UpdateimagemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateimagemMutation, UpdateimagemMutationVariables>(UpdateimagemDocument, options);
      }
export type UpdateimagemMutationHookResult = ReturnType<typeof useUpdateimagemMutation>;
export type UpdateimagemMutationResult = Apollo.MutationResult<UpdateimagemMutation>;
export type UpdateimagemMutationOptions = Apollo.BaseMutationOptions<UpdateimagemMutation, UpdateimagemMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $senha: String!) {
  login(email: $email, senha: $senha) {
    token
    usuario {
      telefone
      senha
      name
      idade
      id
      genero
      email
      cidade
      SobreNome
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      senha: // value for 'senha'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const DeleteNotificacaoDocument = gql`
    mutation DeleteNotificacao($deleteNotificacaoId: Int) {
  deleteNotificacao(id: $deleteNotificacaoId) {
    id
  }
}
    `;
export type DeleteNotificacaoMutationFn = Apollo.MutationFunction<DeleteNotificacaoMutation, DeleteNotificacaoMutationVariables>;

/**
 * __useDeleteNotificacaoMutation__
 *
 * To run a mutation, you first call `useDeleteNotificacaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNotificacaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNotificacaoMutation, { data, loading, error }] = useDeleteNotificacaoMutation({
 *   variables: {
 *      deleteNotificacaoId: // value for 'deleteNotificacaoId'
 *   },
 * });
 */
export function useDeleteNotificacaoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNotificacaoMutation, DeleteNotificacaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNotificacaoMutation, DeleteNotificacaoMutationVariables>(DeleteNotificacaoDocument, options);
      }
export type DeleteNotificacaoMutationHookResult = ReturnType<typeof useDeleteNotificacaoMutation>;
export type DeleteNotificacaoMutationResult = Apollo.MutationResult<DeleteNotificacaoMutation>;
export type DeleteNotificacaoMutationOptions = Apollo.BaseMutationOptions<DeleteNotificacaoMutation, DeleteNotificacaoMutationVariables>;
export const NotificacaoComentarioDocument = gql`
    mutation NotificacaoComentario($comentario: String, $imagemPerfil: String) {
  notificacaoComentario(comentario: $comentario, imagem_perfil: $imagemPerfil) {
    id
    comentario_post {
      id
    }
    cliente {
      id
    }
  }
}
    `;
export type NotificacaoComentarioMutationFn = Apollo.MutationFunction<NotificacaoComentarioMutation, NotificacaoComentarioMutationVariables>;

/**
 * __useNotificacaoComentarioMutation__
 *
 * To run a mutation, you first call `useNotificacaoComentarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotificacaoComentarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notificacaoComentarioMutation, { data, loading, error }] = useNotificacaoComentarioMutation({
 *   variables: {
 *      comentario: // value for 'comentario'
 *      imagemPerfil: // value for 'imagemPerfil'
 *   },
 * });
 */
export function useNotificacaoComentarioMutation(baseOptions?: Apollo.MutationHookOptions<NotificacaoComentarioMutation, NotificacaoComentarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NotificacaoComentarioMutation, NotificacaoComentarioMutationVariables>(NotificacaoComentarioDocument, options);
      }
export type NotificacaoComentarioMutationHookResult = ReturnType<typeof useNotificacaoComentarioMutation>;
export type NotificacaoComentarioMutationResult = Apollo.MutationResult<NotificacaoComentarioMutation>;
export type NotificacaoComentarioMutationOptions = Apollo.BaseMutationOptions<NotificacaoComentarioMutation, NotificacaoComentarioMutationVariables>;
export const ProfissionalMutationDocument = gql`
    mutation profissionalMutation($ambiente: String!, $especial: String!, $servico: String!, $especialidade: String!, $grupo: String!, $idade: String!, $imagens: String!, $localatendimento: String!, $qualificacao: String!, $raio: String!) {
  Profissional(
    ambiente: $ambiente
    especial: $especial
    servico: $servico
    especialidade: $especialidade
    grupo: $grupo
    idade: $idade
    imagens: $imagens
    localatendimento: $localatendimento
    qualificacao: $qualificacao
    raio: $raio
  ) {
    id
  }
}
    `;
export type ProfissionalMutationMutationFn = Apollo.MutationFunction<ProfissionalMutationMutation, ProfissionalMutationMutationVariables>;

/**
 * __useProfissionalMutationMutation__
 *
 * To run a mutation, you first call `useProfissionalMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProfissionalMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [profissionalMutationMutation, { data, loading, error }] = useProfissionalMutationMutation({
 *   variables: {
 *      ambiente: // value for 'ambiente'
 *      especial: // value for 'especial'
 *      servico: // value for 'servico'
 *      especialidade: // value for 'especialidade'
 *      grupo: // value for 'grupo'
 *      idade: // value for 'idade'
 *      imagens: // value for 'imagens'
 *      localatendimento: // value for 'localatendimento'
 *      qualificacao: // value for 'qualificacao'
 *      raio: // value for 'raio'
 *   },
 * });
 */
export function useProfissionalMutationMutation(baseOptions?: Apollo.MutationHookOptions<ProfissionalMutationMutation, ProfissionalMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProfissionalMutationMutation, ProfissionalMutationMutationVariables>(ProfissionalMutationDocument, options);
      }
export type ProfissionalMutationMutationHookResult = ReturnType<typeof useProfissionalMutationMutation>;
export type ProfissionalMutationMutationResult = Apollo.MutationResult<ProfissionalMutationMutation>;
export type ProfissionalMutationMutationOptions = Apollo.BaseMutationOptions<ProfissionalMutationMutation, ProfissionalMutationMutationVariables>;
export const UpdateProfissionalDocument = gql`
    mutation UpdateProfissional($ambiente: String, $especial: String, $grupo: String, $especialidade: String, $idade: String, $imagens: String, $localatendimento: String, $qualificacao: String, $servico: String, $raio: String, $updateProfissionalId: Int) {
  updateProfissional(
    ambiente: $ambiente
    especial: $especial
    grupo: $grupo
    especialidade: $especialidade
    idade: $idade
    imagens: $imagens
    localatendimento: $localatendimento
    qualificacao: $qualificacao
    servico: $servico
    raio: $raio
    id: $updateProfissionalId
  ) {
    id
  }
}
    `;
export type UpdateProfissionalMutationFn = Apollo.MutationFunction<UpdateProfissionalMutation, UpdateProfissionalMutationVariables>;

/**
 * __useUpdateProfissionalMutation__
 *
 * To run a mutation, you first call `useUpdateProfissionalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfissionalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfissionalMutation, { data, loading, error }] = useUpdateProfissionalMutation({
 *   variables: {
 *      ambiente: // value for 'ambiente'
 *      especial: // value for 'especial'
 *      grupo: // value for 'grupo'
 *      especialidade: // value for 'especialidade'
 *      idade: // value for 'idade'
 *      imagens: // value for 'imagens'
 *      localatendimento: // value for 'localatendimento'
 *      qualificacao: // value for 'qualificacao'
 *      servico: // value for 'servico'
 *      raio: // value for 'raio'
 *      updateProfissionalId: // value for 'updateProfissionalId'
 *   },
 * });
 */
export function useUpdateProfissionalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfissionalMutation, UpdateProfissionalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfissionalMutation, UpdateProfissionalMutationVariables>(UpdateProfissionalDocument, options);
      }
export type UpdateProfissionalMutationHookResult = ReturnType<typeof useUpdateProfissionalMutation>;
export type UpdateProfissionalMutationResult = Apollo.MutationResult<UpdateProfissionalMutation>;
export type UpdateProfissionalMutationOptions = Apollo.BaseMutationOptions<UpdateProfissionalMutation, UpdateProfissionalMutationVariables>;
export const PerfilDocument = gql`
    query Perfil {
  perfil {
    id
  }
}
    `;

/**
 * __usePerfilQuery__
 *
 * To run a query within a React component, call `usePerfilQuery` and pass it any options that fit your needs.
 * When your component renders, `usePerfilQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePerfilQuery({
 *   variables: {
 *   },
 * });
 */
export function usePerfilQuery(baseOptions?: Apollo.QueryHookOptions<PerfilQuery, PerfilQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PerfilQuery, PerfilQueryVariables>(PerfilDocument, options);
      }
export function usePerfilLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PerfilQuery, PerfilQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PerfilQuery, PerfilQueryVariables>(PerfilDocument, options);
        }
export type PerfilQueryHookResult = ReturnType<typeof usePerfilQuery>;
export type PerfilLazyQueryHookResult = ReturnType<typeof usePerfilLazyQuery>;
export type PerfilQueryResult = Apollo.QueryResult<PerfilQuery, PerfilQueryVariables>;
export const TodosUsuarioDocument = gql`
    query TodosUsuario {
  TodosUsuario {
    id
  }
}
    `;

/**
 * __useTodosUsuarioQuery__
 *
 * To run a query within a React component, call `useTodosUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosUsuarioQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosUsuarioQuery(baseOptions?: Apollo.QueryHookOptions<TodosUsuarioQuery, TodosUsuarioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosUsuarioQuery, TodosUsuarioQueryVariables>(TodosUsuarioDocument, options);
      }
export function useTodosUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosUsuarioQuery, TodosUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosUsuarioQuery, TodosUsuarioQueryVariables>(TodosUsuarioDocument, options);
        }
export type TodosUsuarioQueryHookResult = ReturnType<typeof useTodosUsuarioQuery>;
export type TodosUsuarioLazyQueryHookResult = ReturnType<typeof useTodosUsuarioLazyQuery>;
export type TodosUsuarioQueryResult = Apollo.QueryResult<TodosUsuarioQuery, TodosUsuarioQueryVariables>;