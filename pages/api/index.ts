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
  floatArg,
} from 'nexus'
import path from 'path'
import cors from 'micro-cors'
import { Context } from './context'
import { APP_SECRET, getUserId } from './utils'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
export const GQLDate = asNexusMethod(DateTimeResolver, 'date')


const Usuario = objectType({
    name: 'Usuario',
    definition(t){
    t.int('id')
    t.string('email')
    t.nonNull.string('name')
    t.nonNull.string('cidade')
    t.nonNull.string('SobreNome')
    t.nonNull.int('idade')
    t.nonNull.string('telefone')
    t.nonNull.string('genero')
    t.string('senha')   
    
    
    t.list.field('identificacaoProfissionalId', {
      type: 'Profissional',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.usuario
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Profissionais()
        },
      })

      t.nonNull.list.nonNull.field('identificacaoCliente', {
        type: 'Cliente',
        resolve: (parent,  _, context: Context) =>{
     
        return  context.prisma.usuario
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .clientes()
          },
        })

      t.nonNull.list.nonNull.field('identificacao_perfil', {
        type: 'imgem_perfil',
        resolve: (parent,  _, context: Context) =>{
     
        return  context.prisma.usuario
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .usuario_perfil()
          },
        })

        t.nonNull.list.nonNull.field('identificacaoProfissionalId', {
          type: 'Usuario',
          resolve: (parent,  _, context: Context) =>{
       
          return  context.prisma.profissional
              .findUnique({
                where: { id: parent.id || undefined },
              })
              .UsuarioId()
            },
          })



    },
})

const Profissional = objectType({
  name: 'Profissional',
  definition(t){
  t.int('id')
  t.nonNull.string('imagens')
  t.float('raio')
  t.int('grupo')
  t.string('ambiente')
  t.string('localatendimento')
  t.string('especial')
  t.int('idade')
  t.string('especialidade')   
  t.string('qualificacao')   
  
  t.nonNull.list.nonNull.field('ComentarioProfissinalID', {
    type: 'Comentario_Post',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.profissional
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .Comentario_PostsProfissionsl()
      },
    })


    t.nonNull.list.nonNull.field('ComentarioProfissinalID', {
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
  t.string('coteudo')
  t.field('createdAt', { type: 'DateTime' })
 
  t.nonNull.list.nonNull.field('ComentarioProfissinalID', {
    type: 'Profissional',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.comentario_Post
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .profissionaisID()
      },
    })
   
    t.nonNull.list.nonNull.field('notificacaoID', {
      type: 'Notificacao_Comentario',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.comentario_Post
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Notificacao_Comentarios()
        },
      })
      t.nonNull.list.nonNull.field('ComentariosClienteID', {
        type: 'Comentario_Post',
        resolve: (parent,  _, context: Context) =>{
     
        return  context.prisma.comentario_Post
            .findUnique({
              where: { id: parent.id || undefined },
            })
            .clienteID()
          },
        })
     
  },
})


const Notificacao_Comentario = objectType({
  name: 'Notificacao_Comentario',
  definition(t){
  t.int('id')
  t.string('comentario')
  t.string('imgem_perfil')
  
  
    t.nonNull.list.nonNull.field('notificacaoID', {
    type: 'Comentario_Post',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.notificacao_Comentario
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .notificacoes()
      },
    })
   
    
    t.nonNull.list.nonNull.field('cliente_id', {
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
  t.int('id')
  t.int('nivel')
  t.string('medicamentos')
  
  t.nonNull.list.nonNull.field('identificacaoCliente', {
    type: 'Usuario',
    resolve: (parent,  _, context: Context) =>{
 
    return  context.prisma.cliente
        .findUnique({
          where: { id: parent.id || undefined },
        })
        .UsuarioId()
      },
    })
   
    t.nonNull.list.nonNull.field('ComentarioProfissinalID', {
      type: 'Comentario_Post',
      resolve: (parent,  _, context: Context) =>{
   
      return  context.prisma.cliente
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .Comentario_PostsCliente()
        },
      })
     
      t.nonNull.list.nonNull.field('notificacaoID', {
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
  t.int('id')
  t.nonNull.string('imagen')
   
  
  t.list.field('UsuarioPerfil', {
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


const Query  = objectType({
  name: 'Query',
  definition(t) {

    t.nonNull.list.nonNull.field('TodosUsuario', {
      type: 'Usuario',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.usuario.findMany()
      },
    })

    t.nullable.field('Perfil', {
      type: 'Usuario',
      resolve: (parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.usuario.findUnique({
          where: {
            id: Number(userId),
          },
        })


      },
    })

   
    t.list.field('MeusPost', {
      type: 'Profissional',
      args: {
        usuarioWhereUniqueInput: nonNull(
          arg({
            type: 'UsuarioWhereUniqueInput',
          }),
        ),
      },
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.usuario
          .findUnique({
            where: {
              id: args.usuarioWhereUniqueInput.id || undefined,
              email: args.usuarioWhereUniqueInput.email || undefined,
            },
          })
          .Profissionais({
            where: {
              id: Number(userId),
            },
          })

  },
})


t.nullable.field('IdPosts', {
  type: 'Profissional',
  args: {
    id: intArg(),
  },
  resolve: (_parent, args, context: Context) => {
    return context.prisma.profissional.findUnique({
      where: { id: args.id || undefined },
    })
  },
})



  },

})



const UsuarioWhereUniqueInput = inputObjectType({
  name: 'UsuarioWhereUniqueInput',
  definition(t) {
    t.int('id')
    t.string('email')
   
    t.string('cidade')
    t.string('SobreNome')
    t.int('idade')
    t.string('telefone')
    t.string('genero')
    t.string('senha')   
    
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
  t.nonNull.int('idade')
  t.nonNull.string('especialidade')   
  t.nonNull.string('qualificacao')   
  
  },
})

const UsuarioCreateInput = inputObjectType({
  name: 'UsuarioCreateInput',
  definition(t) {
    t.nonNull.string('email')
    t.string('senha')
    t.list.nonNull.field('relacionamentosUsuariom', { type: 'ProfissionalCreateInput' })
  },
})




const ProfissionalCreateInput = inputObjectType({
  name: 'ProfissionalCreateInput',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('imagens')
   
    t.float('raio')
    t.int('grupo')
    t.string('ambiente')
    t.string('localatendimento')
    t.string('especial')
    t.string('idade')
    t.string('especialidade')   
    t.string('qualificacao')   
    
  },
})



const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('usuario', { type: 'Usuario'})
  },
})



const Mutation  = objectType({
  name: 'Mutation',
 
  definition(t) {
   
    t.field('CadastroUsuario', {
      type: 'AuthPayload',
      args: {
        name:  nonNull(stringArg()),
        cidade: stringArg(),
        SobreNome: stringArg(),
        telefone: stringArg(),
        genero: stringArg(),
        idade: intArg(),
        email: nonNull(stringArg()),
        senha: stringArg()
      },
      resolve: async (_parent, args, context: Context) => {
        const hashedPassword = await hash(args.senha, 10)
        
        const usuarios = await context.prisma.usuario.create({
         
          data: {
            name: args.name,
            email: args.email,
            senha: hashedPassword,
            cidade: args.cidade,
            SobreNome: args.SobreNome,
            idade: args.idade,
            telefone: args.telefone,

          },
        })
      
        return {
          token: sign({ userId: usuarios.id }, APP_SECRET),
          usuarios,
        }
    
      }

      }) 
      
      t.field('login', {
        type: 'AuthPayload',
        args: {
          email: nonNull(stringArg()),
          senha:nonNull(stringArg()), 
        },
        resolve: async (_parent,{email, senha}, context: Context) => {
          
          const {...usuario} = await context.prisma.usuario.findUnique({
            where: {
              email,
           
            },
          })


          if (!usuario) {
            throw new Error(`No user found for email`)
          }
         
          const passwordValid = await compare(senha, usuario.senha)
          if (!passwordValid) {
            throw new Error('Invalid password')
          }
          return {
            token: sign({ userId: usuario.id }, APP_SECRET),
            usuario,
          }
        },
      })

      t.field('CriarPost', {
        type: 'Profissional',
        args: {
          imagens: nonNull(stringArg()),
          raio:nonNull(floatArg()),
          grupo:nonNull(intArg()),
          ambiente:nonNull(stringArg()),
          localatendimento:nonNull(stringArg()),
          especial:nonNull(stringArg()),
          idade:nonNull(stringArg()),
          especialidade: nonNull(stringArg()),
          qualificacao:nonNull(stringArg()),
          servico : stringArg(),
          identificacaoProfissionalId: intArg(),
        },
        resolve: (_, {imagens, raio, grupo,  ambiente, localatendimento, especial, idade,especialidade,qualificacao, servico, identificacaoProfissionalId   }, context: Context) => {
          const userId = getUserId(context)
          return context.prisma.profissional.create({
            data: {
              imagens, 
              raio, 
              grupo,  
              ambiente, 
              localatendimento, 
              especial, 
              idade,
              especialidade,
              qualificacao,
              servico,
              identificacaoProfissionalId: userId,
            },
          })
        },
      })

      t.field('CriarNotificacao_Comentario', { 
        type: 'Notificacao_Comentario',
        args:{
          comentario:stringArg(),
          imgem_perfil: nonNull(stringArg()),
          cliente_id: intArg(),
          notificacaoID: intArg(),
        },
        resolve: (_, {comentario,imgem_perfil,cliente_id,  notificacaoID }, context: Context) => {
           return context.prisma.notificacao_Comentario.create({
            data: {
              comentario,
              imgem_perfil,
              clientedados: { connect:{id: cliente_id}},
              notificacoes:{connect:{id:notificacaoID}}
            },
          })
        },
        })


        t.field('CriarComentario', { 
          type: 'Comentario_Post',
          args:{
            coteudo:stringArg(),
            nota: intArg(),
            createdAt:stringArg(),
            ComentarioProfissinalID: intArg(),
            ComentariosClienteID: intArg(),
          },
          resolve: (_, {coteudo,nota,createdAt, ComentarioProfissinalID,  ComentariosClienteID }, context: Context) => {
             return context.prisma.comentario_Post.create({
              data: {
                coteudo,
                nota,
                createdAt,
                profissionaisID: { connect:{id: ComentarioProfissinalID}},
                clienteID:{connect:{id:ComentariosClienteID}}
              },
            })
          },
          })
  

          t.field('CriarImgem_perfil', { 
            type: 'imgem_perfil',
            args:{
              imagen:stringArg(),
             
              identificacao_perfil: intArg(),

            },
            resolve: (_, {imagen, identificacao_perfil }, context: Context) => {
               return context.prisma.imgem_perfil.create({
                data: {
                  imagen,
                  UsuarioPerfil: { connect:{id: identificacao_perfil}},
                },
              })
            },
            })
    



  },
})





export const schema = makeSchema({
  types: [ 
    Usuario,
    Profissional,
    imgem_perfil,
    Comentario_Post,
    Notificacao_Comentario,
    Cliente,
    Query,
    UsuarioWhereUniqueInput,
    ProfissionalWhereUniqueInput,
    UsuarioCreateInput,
    ProfissionalCreateInput,
    AuthPayload,
    Mutation,
    GQLDate,],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}