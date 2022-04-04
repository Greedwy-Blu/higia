import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';
import { Usuario } from './Usuario';
import { Comentario_Post } from './Comentario_post';
import { Notificacao_Comentario } from './Notificacao_comentario';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';


export const Cliente = objectType({
    name: "Cliente",
    definition(t) {
       t.int("id")
      t.string("medicamentos")
      t.int("nivel")
      t.list.field('usuario', {
         type: Usuario,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.cliente
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .usuario();
         },
      });
      t.list.field('comentario_post', {
         type: Comentario_Post,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.cliente
             .findUnique({
               where: {
                 id: _parent.id,
               },
             })
             .comentario_post();
         },
      });
      t.list.field('notificacao_comentario', {
         type: Notificacao_Comentario,
         async resolve(_parent, _args, ctx) {
           return await ctx.prisma.cliente
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


  
export const  ClienteMutation = extendType({
   type:'Mutation',
   definition(t){
      t.field("Cliente",{
         type: Cliente,
            args:{
               medicamentos: stringArg(),
               nivel: intArg()
            },
            resolve: async (_root, args, context:Context) => {
               const userId = getUserId(context)
       
             const notifica = await   context.prisma.cliente.create({
        
               data:{
                  medicamentos:args.medicamentos,
                  nivel:args.nivel,
                  identificacaoCliente: Number(userId),
      
            },
         })
            }
      
   })
}
})

export const  updateClienteMutation = extendType({
   type:'Mutation',
   definition(t){
      t.field("updateCliente",{
         type:  Cliente,
            args:{
              
               id: intArg()
            },
            resolve: async (_root, args, ctx) => {
               const uodateClientesMutation = await ctx.prisma.cliente.update({
        
               where:{
                   id:args.id

            },
         })
            }
      
   })
}
})