import { DateTimeResolver } from 'graphql-scalars';
import { NextApiHandler } from 'next';
import { ApolloServer } from 'apollo-server-micro';
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
} from 'nexus';
import path from 'path';
import cors from 'micro-cors';
import { Context } from './context';
import { APP_SECRET, getUserId } from './utils';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
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
    t.list.field("ComentarioProfissinalID", { type: Comentario_Post })
    t.int("id")
    t.list.nonNull.field("identificacaoCliente", { type: Usuario })
    t.string("medicamentos")
    t.int("nivel")
    t.list.field("notificacaoID", { type: Notificacao_Comentario })
  }
})
const Comentario_Post = objectType({
  name: "Comentario_Post",
  definition(t) {
    t.list.field("ComentarioProfissinalID", { type: Profissional })
    t.list.field("ComentariosClienteID", { type: Comentario_Post })
    t.string("coteudo")
   t.int("id")
    t.int("nota")
    t.list.field("notificacaoID", { type: Notificacao_Comentario })
  }
})
const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("CadastroUsuario", {
      type: AuthPayload,
      args: {
        SobreNome: stringArg(),
        cidade: stringArg(),
        email: stringArg(),
        genero: stringArg(),
        idade: intArg(),
        name: stringArg(),
        senha: stringArg(),
        telefone: stringArg(),
      },
    })
    t.field("CriarComentario", {
      type: Comentario_Post,
      args: {
        ComentarioProfissinalID: intArg(),
        ComentariosClienteID: intArg(),
        coteudo: stringArg(),
        createdAt: stringArg(),
        nota: intArg(),
      },
    })
    t.field("CriarImgem_perfil", {
      type: imgem_perfil,
      args: {
        identificacao_perfil: intArg(),
        imagen: stringArg(),
      },
    })
    t.field("CriarNotificacao_Comentario", {
      type: Notificacao_Comentario,
      args: {
        cliente_id: intArg(),
        comentario: stringArg(),
        imgem_perfil: stringArg(),
        notificacaoID: intArg(),
      },
    })
    t.field("CriarPost", {
      type: Profissional,
      args: {
        ambiente: stringArg(),
        especial: stringArg(),
        especialidade: stringArg(),
        grupo: intArg(),
        idade: stringArg(),
        identificacaoProfissionalId: intArg(),
        imagens: stringArg(),
        localatendimento: stringArg(),
        qualificacao: stringArg(),
        raio: floatArg(),
        servico: stringArg(),
      },
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
            email:args.email || undefined ,
         
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
const Notificacao_Comentario = objectType({
  name: "Notificacao_Comentario",
  definition(t) {
    t.list.field("cliente_id", { type: Cliente })
    t.string("comentario")
    t.int("id")
    t.string("imgem_perfil")
    t.list.field("notificacaoID", { type: Comentario_Post })
  }
})
const Profissional = objectType({
  name: "Profissional",
  definition(t) {
    t.list.field("ComentarioProfissinalID", { type: Comentario_Post })
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
})
const Query = objectType({
  name: "Query",
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
const Usuario = objectType({
  name: "Usuario",
  definition(t) {
    t.string("SobreNome")
    t.string("cidade")
    t.string("email")
    t.string("genero")
    t.int("id")
    t.int("idade")
    t.list.field("identificacaoCliente", { type: Cliente})
    t.list.field("identificacaoProfissionalId", { type: Profissional, resolve: (parent) =>{
     
      return  prisma.usuario
          .findUnique({
            where: {  id: Number(parent.id) },
          })
          .Profissionais()},})
    t.list.field("identificacao_perfil", { type: imgem_perfil,  resolve: (parent) =>{
     
      return  prisma.usuario
          .findUnique({
            where: {  id: Number(parent.id) },
          })
          .usuario_perfil()}, })
    t.string("name")
    t.string("senha")
    t.string("telefone")
  }
})
const imgem_perfil = objectType({
  name: "imgem_perfil",
  definition(t) {
    t.list.field("UsuarioPerfil", { type: Usuario })
    t.int("id")
    t.string("imagen")
  }
})

const ProfissionalCreateInput = inputObjectType({
  name: "ProfissionalCreateInput",
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
  }
});
const ProfissionalWhereUniqueInput = inputObjectType({
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
const UsuarioCreateInput = inputObjectType({
  name: "UsuarioCreateInput",
  definition(t) {
    t.string("email")
    t.list.field("relacionamentosUsuariom", { type: ProfissionalCreateInput })
    t.string("senha")
  }
});

export const schema = makeSchema({
  types: [ 
    Usuario,
    Profissional,
    imgem_perfil,
    Cliente,
    Comentario_Post,
    AuthPayload,
    Notificacao_Comentario,
    ProfissionalWhereUniqueInput,
    UsuarioCreateInput,
    ProfissionalCreateInput,
    Query,
    Mutation,
    GQLDate,],
    plugins: [
      nexusSchemaPrisma({
        experimentalCRUD: true,
        outputs: {
          typegen: path.join(process.cwd(), 'generated/typegen-nexus-plugin-prisma.d.ts'),
        },
      }),
    ],
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


