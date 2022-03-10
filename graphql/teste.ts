import { DateTimeResolver } from 'graphql-scalars';
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
  scalarType,
  extendType,
  queryType,
  floatArg,
  fieldAuthorizePlugin,
} from 'nexus';
import path from 'path';
import cors from 'micro-cors';
import { Context, createContext } from './context';
import { APP_SECRET, getUserId } from './utils';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')



const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
      t.string("token")
      t.field("usuario", { type: Usuario })
    }
  })

  
const Cliente = objectType({
    name: "Cliente",
    definition(t) {
        t.nonNull.int("id")
        t.string("medicamentos")
        t.int("nivel")
        t.int("Comentario_PostsCliente")
        t.nonNull.int("Notificacao_ComentariosCliente")
        t.nonNull.int("UsuarioId")


      t.nonNull.list.nonNull.field("Comentario_PostsCliente", { type: Comentario_Post,  
                   resolve: (parent, _,  context: Context) => {
        return context.prisma.cliente
            .findUnique({
                where: { id: Number(parent.id) },
            })
            .Comentario_PostsCliente();
        }
})
    
      t.list.nonNull.field("Notificacao_ComentariosCliente", { type: Usuario,
        resolve: (parent, _,  context: Context) => {
            return context.prisma.cliente
                .findUnique({
                    where: { id: Number(parent.id) },
                })
                .Notificacao_ComentariosCliente();
            }
    })
     
    t.list.nonNull.field("UsuarioId", { type: Usuario,
        resolve: (parent, _,  context: Context) => {
            return context.prisma.cliente
                .findUnique({
                    where: { id: Number(parent.id) },
                })
                .UsuarioId();
            }
    })
   







    }
  })




  
  const Usuario = objectType({
    name: "Usuario",
    definition(t) {
      t.string("SobreNome")
      t.string("cidade")
      t.string("email")
      t.string("genero")
      t.int("id")
      t.int("idade")
      t.int("UsuarioId")
     
      t.int("UsuarioPerfil")
      t.string("name")
      t.string("senha")
      t.string("telefone")

      t.nonNull.list.nonNull.field("clientes", { type: Cliente, resolve: (parent) =>{
       
        return  prisma.cliente
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .UsuarioId()},   
         })

      t.nonNull.list.nonNull.field("Profissionais", { type: Profissional, resolve: (parent) =>{
       
        return  prisma.profissional
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .UsuarioId()},
        
        })
      t.nonNull.list.nonNull.field("usuario_perfil", { type: imgem_perfil,  resolve: (parent) =>{
       
        return  prisma.imgem_perfil
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .UsuarioPerfil()}, 
        })





    }
  })




  const Notificacao_Comentario = objectType({
    name: "Notificacao_Comentario",
    definition(t) {
       t.string("comentario")
      t.int("id")
      t.string("imgem_perfil")
      t.nonNull.int("notificacoes")
      t.nonNull.int("clientedados")


      t.nonNull.list.nonNull.field("notificacoes", { type: Notificacao_Comentario,
        resolve: (parent) =>{
         
        return  prisma.notificacao_Comentario
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .notificacoes()},   
         })

         t.nonNull.list.nonNull.field("clientedados", { type: Notificacao_Comentario,
            resolve: (parent) =>{
             
            return  prisma.notificacao_Comentario
                .findUnique({
                  where: {  id: Number(parent.id) },
                })
                .clientedados()},   
             })



     }
  })
  const Profissional = objectType({
    name: "Profissional",
    definition(t) {
        t.string("ambiente")
        t.string("especial")
        t.string("especialidade")
        t.int("grupo")
        t.int("id")
        t.int("Comentario_PostsProfissionsl")
        t.int("idade")
        t.string("imagens")
        t.string("localatendimento")
        t.string("qualificacao")
        t.int("raio")
        t.int("UsuarioId")

      t.nonNull.list.nonNull.field("Comentario_PostsProfissionsl", { type: Comentario_Post,   resolve: (parent) =>{
       
        return  prisma.profissional
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .Comentario_PostsProfissionsl()}, 
        }) 

  t.nonNull.list.nonNull.field("identificacaoProfissionalId", { type: Comentario_Post, resolve: (parent) =>{
       
        return  prisma.profissional
            .findUnique({
              where: {  id: Number(parent.id) },
            })
            .UsuarioId()},   
         })
   
    }
  })


  const Comentario_Post = objectType({
    name: "Comentario_Post",
    definition(t) {
        t.string("coteudo")
     t.int("id")
      t.int("nota")
      t.int("profissionaisID")
      t.int("clienteID")
      t.nonNull.int("Notificacao_Comentarios")
      t.nonNull.list.nonNull.field("profissionaisID", { type: Notificacao_Comentario,
    
        resolve: (parent) =>{
       
            return  prisma.comentario_Post
                .findUnique({
                  where: {  id: Number(parent.id) },
                })
                .profissionaisID()},   
             })

             t.nonNull.list.nonNull.field("clienteID", { type: Notificacao_Comentario,
    
                resolve: (parent) =>{
               
                    return  prisma.comentario_Post
                        .findUnique({
                          where: {  id: Number(parent.id) },
                        })
                        .clienteID()},   
                     })

                     t.nonNull.list.nonNull.field("Notificacao_Comentarios", { type: Notificacao_Comentario,
    
                        resolve: (parent) =>{
                       
                            return  prisma.comentario_Post
                                .findUnique({
                                  where: {  id: Number(parent.id) },
                                })
                                .Notificacao_Comentarios()},   
                             })
     
    }
  })

  
const imgem_perfil = objectType({
    name: "imgem_perfil",
    definition(t) {
        
      t.nonNull.int("id")
      
      t.nonNull.int("UsuarioPerfil")
      t.string("imagen")
       t.nonNull.list.nonNull.field("UsuarioPerfil", { type: Usuario,
    
        
    }
  )

}
})
  

const Query = extendType({
  type: 'Query',
  definition(t) {
    t.field("IdPosts", {
      type: Profissional,
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.profissional.findUnique({
          where: { id: args.id || undefined },
        })
      },
    })
    t.field('MeusPost', {
      type: Profissional,
      args: {
        id: intArg(),
        
      },
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.profissional.findUnique({
          where: { id: args.id || undefined},
       
        })
        
      },
})
    t.field("Perfil", { type: Usuario,       resolve: (parent, args, context: Context) => {
      const userId = getUserId(context)
      return context.prisma.usuario.findUnique({
        where: {
          id: Number(userId),
        },
      }) }, })
    t.list.field("TodosUsuario", { type: Usuario, resolve:(_parent, _args, context: Context)=>{  return context.prisma.usuario.findMany()}, })
  }
})

const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field("CadastroUsuario", {
      type: AuthPayload,
      args: {
        SobreNome: stringArg(),
        cidade: stringArg(),
        email: nonNull(stringArg()),
        genero: stringArg(),
        idade: intArg(),
        name: stringArg(),
        senha: nonNull(stringArg()),
        telefone: stringArg(),
        
        UsuarioPerfil: nonNull(intArg()),
        Profissionais: arg({
          type: 'profissionalCreateInput',
      }),
      usuario_perfil: arg({
        type: 'clienteCreateInput',
    }),
    clientes: arg({
      type: 'imgemPerfilInput',
  }),

      },
      resolve: async (_root, args, ctx) => {
        const hashedPassword = await hash(args.senha, 10)
        const userId = getUserId(ctx)
      
        const usuarios = await ctx.prisma.usuario.create({
         
          data: {
            name: args.name,
            email: args.email,
            senha: hashedPassword,
            cidade: args.cidade,
            SobreNome: args.SobreNome,
            idade: args.idade,
            telefone: args.telefone,
            

            Profissionais: {
              connect: [{ id: Number(userId) || undefined }],
          },
          usuario_perfil:{
            connect: [{ id: Number(userId) || undefined }],
          },
          clientes:{
            connect: [{ id: Number(userId) || undefined }],
          }
          },
        
        })
      
        return {
          token: sign({ userId: usuarios.id }, APP_SECRET),
          usuarios,
        }
    
      }
    })
    t.field("CriarComentario", {
      type: Comentario_Post,
      args: {
         coteudo: nonNull(stringArg()),
        createdAt: nonNull(stringArg()),
        nota: nonNull(intArg()),
      },

      resolve: async (_, args, context: Context) => {
        const userId = getUserId(context)
      
        return context.prisma.comentario_Post.create({
         data: {
           coteudo: args.coteudo,
           nota: args.nota,
           createdAt: args.createdAt,
           profissionaisID: { connect:{id: Number(userId) }},
           clienteID:{connect:{id:  Number(userId)  }}
         },
       })
      },
    })
    t.field("CriarImgem_perfil", {
      type: imgem_perfil,
      args: {
        identificacao_perfil: intArg(),
        imagen: stringArg(),
      },
      resolve: async (_, args, context: Context) => {
        return context.prisma.imgem_perfil.create({
         data: {
           imagen: args.imagen,
           UsuarioPerfil: { connect:{id: args.identificacao_perfil || undefined}},
         },
       })
      },
    })

    t.field("CriarNotificacao_Comentario", {
      type: Notificacao_Comentario,
      args: {
        cliente_id:nonNull(intArg()),
        comentario: nonNull(stringArg()),
        imgem_perfil: nonNull(stringArg()),
        notificacaoID: nonNull(intArg()),
      },

      resolve: async (_, args, context: Context) => {
        return context.prisma.notificacao_Comentario.create({
         data: {
           comentario: args.comentario,
           imgem_perfil: args.imgem_perfil,
           clientedados: { connect:{id: args.cliente_id }},
           notificacoes:{connect:{id: args.notificacaoID }}
         },
       })
      },
    })

    t.field("CriarPost", {
      type: Profissional,
      args: {
        ambiente: nonNull(stringArg()),
        especial: nonNull(stringArg()),
        especialidade: nonNull(stringArg()),
        grupo:nonNull(intArg()),
        idade: nonNull(intArg()),
        identificacaoProfissionalId:  nonNull(intArg()),
        imagens: nonNull(stringArg()),
        localatendimento: nonNull(stringArg()),
        qualificacao: nonNull(stringArg()),
        raio: nonNull(intArg()),
        servico: nonNull(stringArg()),
      },

      resolve: async (_, args, context: Context) => {
        const userId = getUserId(context)
        return context.prisma.profissional.create({
          data: {
            imagens:args.imagens, 
            raio: args.raio, 
            grupo: args.grupo || undefined,  
            ambiente: args.ambiente, 
            localatendimento: args.localatendimento, 
            especial: args.especial, 
            idade: args.idade  ,
            especialidade: args.especialidade,
            qualificacao: args.qualificacao,
            servico: args.servico,
            identificacaoProfissionalId: userId,
          },
        })
      }
    })


    t.field("login", {
      type: AuthPayload,
      args: {
        email: nonNull(stringArg()),
        senha: nonNull(stringArg()),
      },

      resolve: async (_parent,args, context: Context) => {
          
        const {...usuario} = await context.prisma.usuario.findUnique({
          where: {
            email:args.email  ,
         
          },
        })


        if (!usuario) {
          throw new Error(`No user found for email`)
        }
       
        const passwordValid = await compare(args.senha, usuario.senha)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: usuario.id }, APP_SECRET),
          usuario,
        }
      },
    })




  }
})



const profissionalCreateInput = inputObjectType({
  name: "profissionalCreateInput",
  definition(t) {
    t.string("ambiente")
    t.string("especial")
    t.string("especialidade")
    t.int("grupo")
    t.int("id")
    t.string("idade")
    t.string("imagens")
    t.string("localatendimento")
    t.string("qualificacao")
    t.int("raio")
    t.int("UsuarioId")
  }
});
const profissionalWhereUniqueInput = inputObjectType({
  name: "ProfissionalWhereUniqueInput",
  definition(t) {
    t.string("ambiente")
    t.string("especial")
    t.string("especialidade")
    t.int("grupo")
    t.int("id")
    t.int("idade")
    t.string("imagens")
    t.string("localatendimento")
    t.string("qualificacao")
    t.int("raio")
  }
});
const usuarioCreateInput = inputObjectType({
  name: "UsuarioCreateInput",
  definition(t) {
    t.string("email")
    t.list.field("relacionamentosUsuariom", { type: profissionalCreateInput })
    t.string("senha")
  }
});

const clienteCreateInput = inputObjectType({
name: 'clienteCreateInput',

definition(t){
  t.nonNull.int("id")
  t.string("medicamentos")
  t.int("nivel")
 

}



});

const imgemPerfilInput = inputObjectType({
  name:'imgemPerfil',
  definition(t){
         
    t.nonNull.int("id")
    t.string("imagen")
  
  }
});