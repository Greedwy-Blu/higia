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
  id?: Maybe<Scalars['Int']>;
  medicamentos?: Maybe<Scalars['String']>;
  nivel?: Maybe<Scalars['Int']>;
};

export type Comentario_Post = {
  __typename?: 'Comentario_Post';
  coteudo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nota?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CadastroUsuario: AuthPayload;
  login?: Maybe<AuthPayload>;
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


export type MutationLoginArgs = {
  email: Scalars['String'];
  senha: Scalars['String'];
};

export type Notificacao_Comentario = {
  __typename?: 'Notificacao_Comentario';
  comentario?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  imgem_perfil?: Maybe<Scalars['String']>;
};

export type Profissional = {
  __typename?: 'Profissional';
  ambiente?: Maybe<Scalars['String']>;
  especial?: Maybe<Scalars['String']>;
  especialidade?: Maybe<Scalars['String']>;
  grupo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  idade?: Maybe<Scalars['Int']>;
  imagens?: Maybe<Scalars['String']>;
  localatendimento?: Maybe<Scalars['String']>;
  qualificacao?: Maybe<Scalars['String']>;
  raio?: Maybe<Scalars['Int']>;
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  senha: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null, usuario?: { __typename?: 'Usuario', telefone?: string | null, senha?: string | null, name?: string | null, idade?: string | null, id?: number | null, genero?: string | null, email?: string | null, cidade?: string | null, SobreNome?: string | null } | null } | null };

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