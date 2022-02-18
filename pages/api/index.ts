import { DateTimeResolver } from 'graphql-scalars'
import { NextApiHandler } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} from 'nexus'
import path from 'path'
import cors from 'micro-cors'
import { Context } from './context'
import { APP_SECRET, getUserId } from './utils'
import { compare, hash } from 'bcryptjs'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')


const Usuario = objectType({
    name: 'Usuario',
    definition(t){
    t.nonNull.int('id')
    t.string('email')
    t.nonNull.string('name')
    t.nonNull.string('cidade')
    t.nonNull.string('SobreNome')
    t.nonNull.string('idade')
    t.nonNull.string('telefone')
    t.nonNull.string('genero')
    t.nonNull.string('senha')   
    
      t.nonNull.list.nonNull.field('relacionamentosUsuario', {
      type: 'Profissional',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.usuario
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Profissionais()
        },
      })
      t.nonNull.list.nonNull.field('relacionamentosUsuario2', {
        type: 'Cliente',
        resolve: (parent,  _, context: Context) =>{
     
        return  context.prisma.usuario
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .clientes()
          },
        })
        t.nonNull.list.nonNull.field('relacionamentosUsuario3', {
          type: 'imgem_perfil',
          resolve: (parent,  _, context: Context) =>{
       
          return  context.prisma.usuario
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .usuario_perfil()
            },
          })
    },
})



const Profissional = objectType({
  name: 'Profissional',
  definition(t){
  t.nonNull.int('id')
  t.string('imagens')
  t.nonNull.float('raio')
  t.nonNull.int('grupo')
  t.nonNull.string('ambiente')
  t.nonNull.string('localatendimento')
  t.nonNull.string('especial')
  t.nonNull.string('idade')
  t.nonNull.string('especialidade')   
  t.nonNull.string('qualificacao')   
  
    t.nonNull.list.nonNull.field('UsuarioId', {
    type: 'Usuario',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.profissional
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .UsuarioId()
      },
    })
   
    t.nonNull.list.nonNull.field('Comentario_PostsProfissionsl', {
      type: 'Comentario_Post',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.profissional
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Comentario_PostsProfissionsl()
        },
      })
  },
})






const Comentario_Post = objectType({
  name: 'Comentario_Post',
  definition(t){
  t.nonNull.int('id')
  t.int('nota')
  t.nonNull.string('coteudo')
  t.nonNull.field('createdAt', { type: 'DateTime' })
 
  t.nonNull.list.nonNull.field('profissionaisID', {
    type: 'Profissional',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.comentario_Post
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .profissionaisID()
      },
    })
   
    t.nonNull.list.nonNull.field('Notificacao_Comentarios', {
      type: 'Comentario_Post',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.comentario_Post
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Notificacao_Comentarios()
        },
      })
   
  },
})


const Notificacao_Comentario = objectType({
  name: 'Notificacao_Comentario',
  definition(t){
  t.nonNull.int('id')
  t.string('comentario')
  t.nonNull.string('imgem_perfil')
  
  
    t.nonNull.list.nonNull.field('notificacoes', {
    type: 'Comentario_Post',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.notificacao_Comentario
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .notificacoes()
      },
    })
   
    
    t.nonNull.list.nonNull.field('clientedados', {
      type: 'Cliente',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.notificacao_Comentario
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .clientedados()
        },
      })



  },
})





const Cliente = objectType({
  name: 'Cliente',
  definition(t){
  t.nonNull.int('id')
  t.string('nivel')
  t.nonNull.string('medicamentos')
  
    t.nonNull.list.nonNull.field('UsuarioId', {
    type: 'Usuario',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.cliente
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .UsuarioId()
      },
    })
   
    t.nonNull.list.nonNull.field('Comentario_PostsCliente', {
      type: 'Comentario_Post',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.cliente
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Comentario_PostsCliente()
        },
      })
     
      t.nonNull.list.nonNull.field('Notificacao_ComentariosCliente', {
        type: 'Notificacao_Comentario',
        resolve: (parent,  _, context: Context) =>{
     
        return  context.prisma.cliente
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .Notificacao_ComentariosCliente()
          },
        })

  },
})


const imgem_perfil = objectType({
  name: 'imgem_perfil',
  definition(t){
  t.nonNull.int('id')
  t.string('email')
   
  
    t.nonNull.list.nonNull.field('UsuarioPerfil', {
    type: 'Usuario',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.imgem_perfil
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .UsuarioPerfil()
      },
    })
   
  },
})

















const UsuarioWhereUniqueInput = inputObjectType({
  name: 'UsuarioWhereUniqueInput',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('name')
    t.string('cidade')
    t.string('SobreNome')
    t.string('idade')
    t.string('telefone')
    t.string('genero')
    t.nonNull.string('senha')   
    
  },
})

const  ProfissionalWhereUniqueInput = inputObjectType({
  name: 'ProfissionalWhereUniqueInput',
  definition(t) {
  t.nonNull.int('id')
  t.string('imagens')
  t.nonNull.float('raio')
  t.nonNull.int('grupo')
  t.nonNull.string('ambiente')
  t.nonNull.string('localatendimento')
  t.nonNull.string('especial')
  t.nonNull.string('idade')
  t.nonNull.string('especialidade')   
  t.nonNull.string('qualificacao')   
  
  },
})

const UsuarioCreateInput = inputObjectType({
  name: 'UsuarioCreateInput',
  definition(t) {
    t.nonNull.string('email')
    t.string('name')
    t.list.nonNull.field('relacionamentosUsuario', { type: 'ProfissionalCreateInput' })
  },
})




const ProfissionalCreateInput = inputObjectType({
  name: 'ProfissionalCreateInput',
  definition(t) {
    t.nonNull.int('id')
    t.string('imagens')
    t.nonNull.float('raio')
    t.nonNull.int('grupo')
    t.nonNull.string('ambiente')
    t.nonNull.string('localatendimento')
    t.nonNull.string('especial')
    t.nonNull.string('idade')
    t.nonNull.string('especialidade')   
    t.nonNull.string('qualificacao')   
    
  },
})



const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('usuario', { type: 'Usuario' })
  },
})