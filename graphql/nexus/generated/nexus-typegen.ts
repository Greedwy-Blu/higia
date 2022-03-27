/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ProfissionalWhereUniqueInput: { // input type
    ambiente?: string | null; // String
    especial?: string | null; // String
    especialidade?: string | null; // String
    grupo?: number | null; // Int
    id?: number | null; // Int
    idade?: number | null; // Int
    imagens?: string | null; // String
    localatendimento?: string | null; // String
    qualificacao?: string | null; // String
    raio?: number | null; // Int
  }
  UsuarioCreateInput: { // input type
    email?: string | null; // String
    relacionamentosUsuariom?: Array<NexusGenInputs['profissionalCreateInput'] | null> | null; // [profissionalCreateInput]
    senha?: string | null; // String
  }
  clienteCreateInput: { // input type
    id: number; // Int!
    medicamentos?: string | null; // String
    nivel?: number | null; // Int
  }
  imgemPerfil: { // input type
    id?: number | null; // Int
    imagen?: string | null; // String
  }
  profissionalCreateInput: { // input type
    UsuarioId?: number | null; // Int
    ambiente?: string | null; // String
    especial?: string | null; // String
    especialidade?: string | null; // String
    grupo?: number | null; // Int
    id?: number | null; // Int
    idade?: string | null; // String
    imagens?: string | null; // String
    localatendimento?: string | null; // String
    qualificacao?: string | null; // String
    raio?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    usuario?: NexusGenRootTypes['Usuario'] | null; // Usuario
  }
  Cliente: { // root type
    id?: number | null; // Int
    medicamentos?: string | null; // String
    nivel?: number | null; // Int
  }
  Comentario_Post: { // root type
    coteudo?: string | null; // String
    id?: number | null; // Int
    nota?: number | null; // Int
  }
  Mutation: {};
  Notificacao_Comentario: { // root type
    comentario?: string | null; // String
    id?: number | null; // Int
    imgem_perfil?: string | null; // String
  }
  Profissional: { // root type
    ambiente?: string | null; // String
    especial?: string | null; // String
    especialidade?: string | null; // String
    grupo?: number | null; // Int
    id?: number | null; // Int
    idade?: number | null; // Int
    imagens?: string | null; // String
    localatendimento?: string | null; // String
    qualificacao?: string | null; // String
    raio?: number | null; // Int
  }
  Query: {};
  Usuario: { // root type
    SobreNome?: string | null; // String
    cidade?: string | null; // String
    email?: string | null; // String
    genero?: string | null; // String
    id?: number | null; // Int
    idade?: string | null; // String
    name?: string | null; // String
    senha?: string | null; // String
    telefone?: string | null; // String
  }
  imagem_perfil: { // root type
    id?: number | null; // Int
    imagen?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    usuario: NexusGenRootTypes['Usuario'] | null; // Usuario
  }
  Cliente: { // field return type
    id: number | null; // Int
    medicamentos: string | null; // String
    nivel: number | null; // Int
  }
  Comentario_Post: { // field return type
    coteudo: string | null; // String
    id: number | null; // Int
    nota: number | null; // Int
  }
  Mutation: { // field return type
    CadastroUsuario: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
  }
  Notificacao_Comentario: { // field return type
    comentario: string | null; // String
    id: number | null; // Int
    imgem_perfil: string | null; // String
  }
  Profissional: { // field return type
    ambiente: string | null; // String
    especial: string | null; // String
    especialidade: string | null; // String
    grupo: number | null; // Int
    id: number | null; // Int
    idade: number | null; // Int
    imagens: string | null; // String
    localatendimento: string | null; // String
    qualificacao: string | null; // String
    raio: number | null; // Int
  }
  Query: { // field return type
    TodosUsuario: Array<NexusGenRootTypes['Usuario'] | null> | null; // [Usuario]
    perfil: NexusGenRootTypes['Usuario'] | null; // Usuario
  }
  Usuario: { // field return type
    Profissionais: Array<NexusGenRootTypes['Profissional'] | null> | null; // [Profissional]
    SobreNome: string | null; // String
    cidade: string | null; // String
    clientes: Array<NexusGenRootTypes['Cliente'] | null> | null; // [Cliente]
    email: string | null; // String
    genero: string | null; // String
    id: number | null; // Int
    idade: string | null; // String
    imgem_perfis: Array<NexusGenRootTypes['imagem_perfil'] | null> | null; // [imagem_perfil]
    name: string | null; // String
    senha: string | null; // String
    telefone: string | null; // String
  }
  imagem_perfil: { // field return type
    id: number | null; // Int
    imagen: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    usuario: 'Usuario'
  }
  Cliente: { // field return type name
    id: 'Int'
    medicamentos: 'String'
    nivel: 'Int'
  }
  Comentario_Post: { // field return type name
    coteudo: 'String'
    id: 'Int'
    nota: 'Int'
  }
  Mutation: { // field return type name
    CadastroUsuario: 'AuthPayload'
    login: 'AuthPayload'
  }
  Notificacao_Comentario: { // field return type name
    comentario: 'String'
    id: 'Int'
    imgem_perfil: 'String'
  }
  Profissional: { // field return type name
    ambiente: 'String'
    especial: 'String'
    especialidade: 'String'
    grupo: 'Int'
    id: 'Int'
    idade: 'Int'
    imagens: 'String'
    localatendimento: 'String'
    qualificacao: 'String'
    raio: 'Int'
  }
  Query: { // field return type name
    TodosUsuario: 'Usuario'
    perfil: 'Usuario'
  }
  Usuario: { // field return type name
    Profissionais: 'Profissional'
    SobreNome: 'String'
    cidade: 'String'
    clientes: 'Cliente'
    email: 'String'
    genero: 'String'
    id: 'Int'
    idade: 'String'
    imgem_perfis: 'imagem_perfil'
    name: 'String'
    senha: 'String'
    telefone: 'String'
  }
  imagem_perfil: { // field return type name
    id: 'Int'
    imagen: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    CadastroUsuario: { // args
      SobreNome?: string | null; // String
      cidade?: string | null; // String
      cliente?: NexusGenInputs['clienteCreateInput'] | null; // clienteCreateInput
      email: string; // String!
      genero?: string | null; // String
      id?: string | null; // String
      idade?: string | null; // String
      imgem_perfil?: NexusGenInputs['imgemPerfil'] | null; // imgemPerfil
      name?: string | null; // String
      profissional?: NexusGenInputs['profissionalCreateInput'] | null; // profissionalCreateInput
      senha: string; // String!
      telefone?: string | null; // String
    }
    login: { // args
      email: string; // String!
      senha: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}