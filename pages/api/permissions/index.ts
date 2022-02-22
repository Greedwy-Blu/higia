import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'
import { Context } from '../context'

const rules = {
  isAuthenticatedUsuario: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isProfissionalOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context)
    const profissional = await context.prisma.profissional
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
     
    return userId === profissional.id
  }),
  isNotificacaoOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context)
    const notificacao = await context.prisma.notificacao_Comentario
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
      
    return userId === notificacao.id
  }),

  isClienteOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context)
    const cliente = await context.prisma.cliente
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
      
    return userId === cliente.id
  }),

  isComentarioOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context)
    const comentario = await context.prisma.comentario_Post
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
      
    return userId === comentario.id
  }),

  isImagemOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context)
    const imgem = await context.prisma.imgem_perfil
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
      
    return userId === imgem.id
  }),

}


export const permissions = shield({
    Query: {
        TodosUsuario: rules.isAuthenticatedUsuario,
        Perfil: rules.isAuthenticatedUsuario,
        MeusPost: rules.isProfissionalOwner,
        IdPosts: rules.isProfissionalOwner ,
    },
    Mutation: {
        CriarPost: rules.isProfissionalOwner,
        CriarNotificacao_Comentario: rules.isNotificacaoOwner,
        CriarComentario: rules.isComentarioOwner,
        CriarImgem_perfil: rules.isImagemOwner,
     
    },
  })
