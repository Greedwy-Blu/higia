import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';
import { Cliente } from './Cliente';
import { Profissional } from './Profissional';
import { Notificacao_Comentario } from './Notificacao_comentario';

export const Comentario_Post = objectType({
    name: "Comentario_Post",
    definition(t) {
        t.string("coteudo")
     t.int("id")
      t.int("nota")
      t.list.field('cliente', {
         type: Cliente,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.comentario_post
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .cliente();
         },
       });
       t.list.field('profissional', {
         type: Profissional,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.comentario_post
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .profissional();
         },
       });
      
       t.list.field('notificacao_comentario', {
         type: Notificacao_Comentario,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.comentario_post
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .notificacao_comentario();
         },
       });

   }
  })

  export const  comentarioPostMutation = extendType({
    type:'Mutation',
    definition(t){
       t.field("comentarioPost",{
          type:  Comentario_Post,
             args:{
                coteudo: stringArg(),
                nota: intArg()
             },
             resolve: async (parent, args,context:Context) => {
               const userId = getUserId(context)
               return await  context.prisma.comentario_post.create({
         
                data:{
                    coteudo:args.coteudo,
                    nota:args.nota,
                    ComentarioProfissinalID:Number(userId),
                    ComentariosClienteID:Number(userId),
             },
          })
             }
       
    })
 }
 })

 export const  updatecomentarioPostMutation = extendType({
    type:'Mutation',
    definition(t){
       t.field("updatecomentarioPost",{
          type:  Comentario_Post,
             args:{
               
                id: intArg()
             },
             resolve: async (_root, args, ctx) => {
                const updateComentariosPostMutation = await ctx.prisma.comentario_post.update({
         
                where:{
                    id:args.id
 
             },
          })
             }
       
    })
 }
 })

 
 export const  deletacomentarioPostMutation = extendType({
  type:'Mutation',
  definition(t){
     t.field("delatecomentarioPost",{
        type:  Comentario_Post,
           args:{
             
              id: intArg()
           },
           resolve: async (_root, args, ctx) => {
              const delateComentariosPostMutation = await ctx.prisma.comentario_post.delete({
       
              where:{
                  id:args.id

           },
        })
           }
     
  })
}
})