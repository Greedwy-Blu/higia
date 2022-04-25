import { enumType, intArg, objectType, stringArg, nonNull, arg,
  } from 'nexus';
import { extendType } from 'nexus';
import { Cliente } from './Cliente';
import { profissionalCreateInput,clienteCreateInput,imgemPerfilInput } from './input';
import {AuthPayload} from './AuthPayload'

import { Profissional } from './Profissional';
import { imagem_perfil } from './Imagem_perfil';

import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';


export const Usuario = objectType({
    name: "Usuario",
    definition(t) {
      t.string("SobreNome")
      t.string("cidade")
      t.string("email")
      t.string("genero")
      t.int("id")
      t.string("idade")
      t.string("name")
      t.string("senha")
      t.string("telefone")
      t.list.field('cliente', {
        type: Cliente,
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.usuario
            .findUnique({
              where: {
                id: Number(_parent.id),
              },
            })
            .cliente();
        },
      });
      t.list.field('profissional', {
        type: Profissional,
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.usuario
            .findUnique({
              where: {
                id: Number(_parent.id),
              },
            })
            .profissional();
        },
      });

      t.list.field('imgem_perfis', {
        type: imagem_perfil,
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.usuario
            .findUnique({
              where: {
                id:Number(_parent.id),
              },
            }).imgem_perfil();
           
        },
      });

    }
   
})



export const cadastroUsuarioMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field("CadastroUsuario", {
      type: AuthPayload,
      args: {
        SobreNome: stringArg(),
        cidade: stringArg(),
        email: nonNull(stringArg()),
        genero: stringArg(),
        idade: stringArg(),
        name: stringArg(),
        senha: nonNull(stringArg()),
        telefone: stringArg(),
        id: stringArg(),
        profissional: arg({
          type: profissionalCreateInput,

      }),
      cliente: arg({
        type: clienteCreateInput,
    }),
    imgem_perfil: arg({
      type: imgemPerfilInput,
  }),

      },
      resolve: async (_root, args, ctx) => {
        const hashedPassword = await hash(args.senha, 10)
        
        const usuarios = await ctx.prisma.usuario.create({
         
          data: {
            name: args.name,
            email: args.email,
            senha: hashedPassword,
            cidade: args.cidade,
            SobreNome: args.SobreNome,
            idade: args.idade,
            telefone: args.telefone,
            genero:args.genero,

          
          },

         
          
        
        })
      
        return {
          token: sign({ userId: usuarios.id }, APP_SECRET,  { expiresIn: '1m' }),
          usuarios,
        }
    
      }
    })
}
    })


    export const loginMutation = extendType({
      type: 'Mutation',
      definition(t) {

        t.field("login", {
          type: AuthPayload,
          args: {
            email: nonNull(stringArg()),
            senha: nonNull(stringArg()),
          },
    
          resolve: async (_root,  { email,senha }, ctx) => {
              
            const { ...usuario} = await ctx.prisma.usuario.findUnique({
              where: {
                email
              },
              include:{
                profissional:{select:{id:true}}
                }
            })
    
    
            if (!usuario) {
              throw new Error(`No user found for email`)
            }
             const passwordValid = await compare(senha, usuario.senha)
            if (!passwordValid) {
              throw new Error('Invalid password')
            }
            
            return {
              token: sign({ userId: usuario.id }, APP_SECRET,  { expiresIn: '30m' }),
              usuario:usuario,
            }
          },
        })

      }

    })

    
export const UsuarioQuery = extendType({
  type: 'Query',
  definition(t) {
   
    t.nullable.field("perfil", { type: 'Usuario', 
      resolve:async (parent, args,context:Context) => {
        const userId = getUserId(context)
        console.log(userId)
        return await  context.prisma.usuario.findUnique({
        where: {
        id:  Number(userId),
      
        },
        include: {
          profissional: true,
        },
       
      }) 
    
     
    }, })
      t.list.field("TodosUsuario", { type: Usuario, resolve:(_parent, _args, context:Context)=>{         const userId = getUserId(context)
        console.log(userId)
          return context.prisma.usuario.findMany({where: {
            id:  Number(userId),
          
            },})}, })
  }
})


      
export const  updateUsuarioMutation =extendType({
  type:'Mutation',
  definition(t){
     t.field("updateUsuario",{
        type:  Usuario,
           args:{
             
              id: intArg()
           },
           resolve: async (_root, args, ctx) => {
              const updatesUsuarioMutation = await ctx.prisma.usuario.update({
       
              where:{
                  id:args.id

           },
        })
           }
     
  })
}
})