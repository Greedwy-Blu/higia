import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

import { Usuario } from './Usuario';

import { APP_SECRET, getUserId} from '../utils';
import {Context } from '../context';

import { Upload } from './Upload'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { createWriteStream, unlinkSync, statSync } from 'fs'
import * as mkdirp from 'mkdirp'
import * as cuid from 'cuid'
import * as sharp from 'sharp'

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


  const uploadDir = '../../static/documents'
  mkdirp.sync(uploadDir)

  const processUpload = async (upload: Promise<any>) => {
    const { createReadStream, filename, mimetype, encoding } = await upload
    const stream = createReadStream()
    return await storeUpload({ stream, filename })
  }
  
  const storeUpload = async ({
    stream,
    filename
  }: {
    stream: any
    filename: any
  }): Promise<any> => {
    const id = cuid()
    const path = `${uploadDir}/${id}-${filename}`
    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(path))
        .on('finish', () => resolve({ id, path }))
        .on('error', reject)
    )
  }
  


  export const imagemPerfilMutation = extendType({
    type: 'Mutation',
    definition(t){
   t.field("criarImagem",{
    type:imagem_perfil,
    args:{
      file: Upload
     },
    resolve: async (_root, args, context:Context) => {
      const userId = getUserId(context)
      const { id, path, ...other } = await processUpload(file)
        console.log(path, file);
        
      const criarImagem = await context.prisma.imgem_perfil.create({

      data:{
      imagem:path,
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