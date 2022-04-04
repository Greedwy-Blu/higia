import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';

import { Cliente } from './Cliente';
import { Comentario_Post } from './Comentario_post';

export const Notificacao_Comentario = objectType({
  name: "Notificacao_Comentario",
  definition(t) {
     t.string("comentario")
    t.int("id")
    t.string("imgem_perfil")
    t.list.field('comentario_post', {
      type: Comentario_Post,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.notificacao_comentario
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .comentario_post();
      },
   });

   t.list.field('cliente', {
      type: Cliente,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.notificacao_comentario
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .cliente();
      },
   });

  },

})


export const  notificacaoMutation = extendType({
   type:'Mutation',
   definition(t){
      t.field("notificacaoComentario",{
         type: Notificacao_Comentario,
            args:{
comentario: stringArg(),
imagem_perfil: stringArg()
            },
            resolve: async(parent, args,context:Context) => {
               const userId = getUserId(context)
                  const notifica = await context.prisma.notificacao_comentario.create({
        
               data:{
               comentario:args.comentario,
               imgem_perfil:args.imagem_perfil,
               notificacaoID: Number(userId),
               cliente_id: Number(userId), 
            },
         })
            }
      
   })
}
})

export const  deleteMutationNotificacao = extendType({
   type:'Mutation',
   definition(t){
      t.field("deleteNotificacao",{
         type: Notificacao_Comentario,
         args:{
            id: intArg()
         },
         resolve: async (_root, args, ctx) => {
            const notifica = await ctx.prisma.notificacao_comentario.delete({
     
            where:{
            id:args.id

         },
      })
         }
      })
   }
})