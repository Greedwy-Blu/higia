import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

import { Usuario } from './Usuario';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';


export const imagem_perfil = objectType({
    name: "imagem_perfil",
    definition(t) {
     t.int("id")
      t.string("imagen")
      t.list.field('usuario', {
         type: Usuario,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.imgem_perfil
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .usuario();
         },
      });
    }
  })

  export const imagemPerfilMutation = extendType({
    type: 'Mutation',
    definition(t){
   t.field("criarImagem",{
    type:imagem_perfil,
    args:{
      imagen:stringArg()
    },
    resolve: async (_root, args, context:Context) => {
      const userId = getUserId(context)
       
      const criarImagem = await context.prisma.imgem_perfil.create({

      data:{
      imagem:args.imagem,
      identificacao_perfil:   Number(userId),
      
   },
})
   }
   })
    }
  })

  export  const updateImage = extendType({
      type:'Mutation',
  definition(t){
     t.field("updateimagem",{
        type:imagem_perfil,
        args:{
           id: intArg()
        },
        resolve: async (_root, args, ctx) => {
           const updatesImage = await ctx.prisma.imgem_perfil.update({
    
           where:{
           id:args.id

        },
     })
        }
     })
  }
})