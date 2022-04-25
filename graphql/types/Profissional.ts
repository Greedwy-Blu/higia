
import { enumType, intArg, objectType, stringArg, nonNull } from 'nexus';
import { extendType } from 'nexus';
import {profissional} from '@prisma/client'
import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';
import { Comentario_Post } from './Comentario_post';

import { Usuario } from './Usuario';

export const Profissional = objectType({
    name: "Profissional",
    definition(t) {
      t.string("ambiente")
      t.string("especial")
      t.string("especialidade")
      t.string("grupo")
      t.string("servico")
      t.int("id")
      t.int("identificacaoProfissionalId")
     
      t.string("idade")
      t.string("imagens")
      t.string("localatendimento")
      t.string("qualificacao")
      t.string("raio")
      t.list.field('usuario', {
        type: Usuario,
        async resolve(_parent, _args, ctx) {
          return await ctx.prisma.profissional
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
          return await ctx.prisma.profissional
            .findUnique({
              where: {
                id: _parent.id,
              },
            })
            .comentario_post();
        },
     });


    }
  })


  export const ProfissionalMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.field("Profissional", {
        type: Profissional,
        args: {
          ambiente:  nonNull(stringArg()),
          especial: nonNull(stringArg()),
          especialidade: nonNull(stringArg()),
          grupo: nonNull(stringArg()),
          idade:  nonNull(stringArg()),
          imagens:  nonNull(stringArg()),
          qualificacao:nonNull(stringArg()),
          localatendimento:  nonNull(stringArg()),
          servico: nonNull(stringArg()),
          raio:nonNull(stringArg())
  
        },
        resolve: async (_root, args, context:Context) => {
          const userId = getUserId(context)
      
          const Profissional = await context.prisma.profissional.create({
           
            data: {
              ambiente: args.ambiente,
              especial: args.especial,
              especialidade: args.especialidade,
              grupo: args.grupo,
              idade: args.idade,
              raio: args.raio,
              imagens: args.imagens,
              qualificacao:args.qualificacao,
              servico:args.servico,
              localatendimento:args.localatendimento,
              
 identificacaoProfissionalId: Number(userId)
       
               },
           
            
          
          })
        
          
      
        }
      })
  }
      })

      

    
export const ProfissionalQuery = extendType({
  type: 'Query',
  definition(t) {
   
      t.nullable.field("todosPro", { type: Profissional, resolve:(_parent, _args, ctx)=>{  return ctx.prisma.profissional.findMany()}, })
  
     
  }
})


 export const  updateProfissionalMutation = extendType({
  type:'Mutation',
  definition(t){
     t.field("updateProfissional",{
        type:  Profissional,
           args:{
            ambiente: stringArg(),
            especial: stringArg(),
            especialidade: stringArg(),
            grupo: stringArg(),
            idade: stringArg(),
            imagens: stringArg(),
            localatendimento: stringArg(),
            qualificacao: stringArg(),
            servico: stringArg(),
            raio: stringArg(),
              id: intArg()
           },
           resolve: async (_root, args, ctx) => {
              const updatesProfissionalMutation = await ctx.prisma.profissional.update({
       
              where:{
                  id:args.id

           },
           data:{
            ambiente: args.ambiente,
            especial: args.especial,
            especialidade: args.especialidade,
            grupo: args.grupo,
            idade: args.idade,
            raio: args.raio,
            imagens: args.imagens,
            qualificacao:args.qualificacao,
            servico:args.servico,
            localatendimento:args.localatendimento,
           }
        })
           }
     
  })
}
})