import { enumType, intArg, objectType, stringArg,arg,scalarType } from 'nexus';
import { extendType } from 'nexus';

import { Usuario } from './Usuario';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';
import { createWriteStream } from 'fs'
import sync from 'mkdirp';
import * as shortid from 'shortid'
import { resolve } from 'path'
import { Upload } from './Upload';



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
      imagen: Upload
     },
    resolve: async (_root, args, context:Context) => {
      const userId = getUserId(context)

      const uploadDir = resolve(__dirname, '../../static/documents')
      sync(uploadDir)

      const { stream, filename, mimetype, encoding } = await args.imagen
      const id = shortid.generate() + '-' + filename
      const path = `${uploadDir}/${id}-${filename}`
      
      const uploadDer = new Promise((resolve, reject) =>
          stream
            .pipe(createWriteStream(path))
            .on('finish', () => resolve({ id, path }))
            .on('error', reject),
        )

      const criarImagem = await context.prisma.imgem_perfil.create({

      data:{
      imagen:filename,
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
           id: intArg(),
           imagen: Upload
        },
        resolve: async (_root, args, ctx) => {
           const updatesImage = await ctx.prisma.imgem_perfil.update({
            imagen :args.imagen,
           where:{
           id:args.id

        },
     })
        }
     })
  }
})